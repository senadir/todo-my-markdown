import React from 'react'
import Todo from '../Todo';
import useTodos from '../use-todos';

export default function Checklist() {
	const { title, todos, updateTodo, removeList } = useTodos();
	return (
		<div className='todoList'>
			<h1>{ title }</h1>
			<button onClick={ removeList }>Remove List</button>
			<ul>
				{ todos.map(todo => <Todo key={todo.id} {...todo} updateTodo={ updateTodo } />)}
			</ul>
		</div>
	)
}
