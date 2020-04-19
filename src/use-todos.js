import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import db from 'localforage';
import { prepareList, removeList } from './list';
const useTodos = () => {
	const { id: hash } = useParams();
	const sha = useRef();
	const [ title, setTitle ] = useState( '' );
	const [ todos, setTodos ] = useState( [] );
	useEffect( () => {
		db.getItem( hash ).then( ( data ) => {
			setTitle( data.title );
			setTodos( data.todos );
			sha.current = data.sha;
		} );
	}, [ hash ] );
	const updateTodo = ( id, done ) => {
		const itemIndex = todos.findIndex( ( todo ) => todo.id === id );
		const newTodos = [ ...todos ];
		newTodos[ itemIndex ] = {
			...todos[ itemIndex ],
			done,
		};
		setTodos( newTodos );
		db.setItem( hash, { title, todos: newTodos, sha: sha.current } );
	};

	const resetList = () => {
		const newTodos = todos.map( ( todo ) => ( { ...todo, done: false } ) );
		setTodos( newTodos );
		db.setItem( hash, { title, todos: newTodos, sha: sha.current } );
	};
	const removeLocalList = () => {
		removeList().then( () => window.location.replace( '/' ) );
	};
	return {
		title,
		todos: prepareList( todos ),
		updateTodo,
		removeList: removeLocalList,
		resetList,
	};
};

export default useTodos;
