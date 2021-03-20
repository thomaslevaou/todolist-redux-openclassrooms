import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/* Component de l'input text de la todo. C'est un component React assez basique,
avec ses appels à change, blur et submit, ce dernier appelant la fonction de la prop
onSave qui est en réalité l'action Redux */
export default class TodoTextInput extends Component {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		editing: PropTypes.bool,
		newTodo: PropTypes.bool,
	}

	state = {
		text: this.props.text || '',
	}

	handleSubmit = (e) => {
		const text = e.target.value.trim()
		if (e.which === 13) {
			this.props.onSave(text)
			if (this.props.newTodo) {
				this.setState({ text: '' })
			}
		}
	}

	handleChange = (e) => {
		this.setState({ text: e.target.value })
	}

	handleBlur = (e) => {
		if (!this.props.newTodo) {
			this.props.onSave(e.target.value)
		}
	}

	render () {
		return (
			<input className={
				classnames({
					edit: this.props.editing,
					'new-todo': this.props.newTodo,
				})}
				type="text"
				placeholder={this.props.placeholder}
				autoFocus="true"
				value={this.state.text}
				onBlur={this.handleBlur}
				onChange={this.handleChange}
				onKeyDown={this.handleSubmit} />
		)
	}
}
