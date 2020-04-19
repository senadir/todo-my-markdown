import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import db from 'localforage';
import { prepareList, removeList } from './list'
const useTodos = () => {
	const { id: hash } = useParams();
	const [ title, setTitle ] = useState( '' );
	const [ todos, setTodos ] = useState( [] );
	useEffect(() => {
		db.getItem( hash )
		.then( data => {
			setTitle( data.title );
			setTodos( data.todos );
		})
	}, [ hash ]);
	const updateTodo = ( id, done ) => {
		const itemIndex = todos.findIndex( todo => todo.id === id );
		const newTodos = [ ...todos ];
		newTodos[ itemIndex ] = {
			...todos[ itemIndex ],
			done,
		};
		setTodos( newTodos );
		db.setItem( hash, {title, todos: newTodos });
	}

	const removeLocalList = () => {
		removeList()
		.then(() => window.location.replace('/'))
	}
	return {
		title,
		todos: prepareList(todos),
		updateTodo,
		removeList: removeLocalList,
	}
}

export default useTodos;