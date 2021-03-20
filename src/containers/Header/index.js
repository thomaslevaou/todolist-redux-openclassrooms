import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TodoTextInput from '../../components/TodoTextInput/'
import { addTodo } from '../../actions'


/* Le header est ici l'endroit en haut de la page où l'utilisateur est invité
* à saisir une nouvelle todo.
* On peut remarque que le header est un container (pas juste un component),
* et que l'action associée à l'entrée d'un texte est une ACTION du dossier action.
*/
export const Header = ({ addTodo }) => (
	<header className="header">
		<h1>
			Todo
		</h1>
		<TodoTextInput
			newTodo
			onSave={(text) => {
				if (text.length !== 0) {
					addTodo(text)
				}
			}}
			placeholder="Que faut-il faire ?"
		/>
	</header>
)

Header.propTypes = {
	addTodo: PropTypes.func.isRequired,
}

/* Connexion au store, sans state ni dispatch clairement visible
* Le fait d'utiliser connect() ici implique évidemment de devoir appeler le store
* dans index.js */
export default connect(null, { addTodo })(Header)
