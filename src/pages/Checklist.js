import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../Todo';
import useTodos from '../use-todos';
import { ReactComponent as ArrowBack } from '../assets/svg/back.svg';
import useDarkMode from '../use-dark-mode';

export default function Checklist() {
	const { title, todos, updateTodo, removeList, resetList } = useTodos();
	const ToggleDarkMode = useDarkMode();

	return (
		<>
			<ToggleDarkMode className="button__dark-mode--checklist" />
			<h1 className="list-title">
				<Link to="/" className="list__back">
					<ArrowBack fill="currentColor" /> All Lists
				</Link>
				{ title }
				<div className="button-group list-actions">
					<button
						className="button button--delete"
						onClick={ removeList }
					>
						Remove
					</button>
					<button
						className="button button--primary"
						onClick={ resetList }
					>
						Reset All
					</button>
				</div>
			</h1>
			<ul className="todo-list">
				{ todos.map( ( todo ) => (
					<Todo
						key={ todo.id }
						{ ...todo }
						updateTodo={ updateTodo }
					/>
				) ) }
			</ul>
		</>
	);
}
