import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import db from 'localforage';
import { prepareList, removeList } from '../list';
import demo from '../demo';
const useTodos = () => {
	const { id: hash } = useParams();
	const sha = useRef();
	const [ title, setTitle ] = useState( '' );
	const [ todos, setTodos ] = useState( [] );
	useEffect( () => {
		setTitle( demo[ 0 ].title );
		setTodos( demo[ 0 ].todos );
		sha.current = demo[ 0 ].sha;
	}, [ hash ] );
	const updateTodo = ( id, done ) => {
		const itemIndex = todos.findIndex( ( todo ) => todo.id === id );
		const newTodos = [ ...todos ];
		newTodos[ itemIndex ] = {
			...todos[ itemIndex ],
			done,
		};
		setTodos( newTodos );
	};

	const resetList = () => {
		const newTodos = todos.map( ( todo ) => ( { ...todo, done: false } ) );
		setTodos( newTodos );
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
