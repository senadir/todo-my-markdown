import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List } from '@nadir/components';
import Todo from '../Todo';
import useTodos from '../use-todos';
import { ReactComponent as ArrowBack } from '../assets/svg/back.svg';
import useDarkMode from '../use-dark-mode';

export default function Checklist() {
	const { title, todos, updateTodo, removeList, resetList } = useTodos();
	const ToggleDarkMode = useDarkMode();

	return (
		<>
			<h1 className="list-title">
				<ToggleDarkMode />
				<Link to="/" className="list__back">
					<ArrowBack fill="currentColor" /> All Lists
				</Link>
				{ title }
				<div className="layout layout--inline">
					<Button variant="error.inline" onClick={ removeList }>
						Remove
					</Button>
					<Button variant="primary.inline" onClick={ resetList }>
						Reset All
					</Button>
				</div>
			</h1>
			<List>
				{ todos.map( ( todo ) => (
					<Todo
						key={ todo.id }
						{ ...todo }
						updateTodo={ updateTodo }
					/>
				) ) }
			</List>
		</>
	);
}
