import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List } from '@nadir/components';
import Todo from '../Todo';
import { useTodos, useDarkMode } from '../hooks/';
import { ReactComponent as ArrowBack } from '../assets/svg/back.svg';

export default function Checklist() {
	const { title, todos, updateTodo, removeList, resetList } = useTodos();
	const ToggleDarkMode = useDarkMode();

	return (
		<>
			<div className="list">
				<ToggleDarkMode />
				<Link to="/" className="list__back">
					<ArrowBack fill="currentColor" /> All Lists
				</Link>
				<h1 className="list__title">{ title }</h1>
				<div className="layout layout--inline">
					<Button variant="primary.inline" onClick={ resetList }>
						Reset All
					</Button>
				</div>
			</div>
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
