import { useEffect, useState } from 'react';
import { removeList } from '../list';
import db from 'localforage';
const useLists = () => {
	const [ lists, setLists ] = useState( [] );
	useEffect( () => {
		db.iterate( ( value, key ) => {
			!! value.title &&
				setLists( ( list ) => [
					...list,
					{ title: value.title, id: key, todos: value.todos },
				] );
		} );
	}, [] );
	const removeLocalList = ( id ) => {
		removeList( id ).then( () => {
			const listIndex = lists.findIndex( ( list ) => list.id === id );
			const newList = [ ...lists ];
			newList.splice( listIndex, 1 );
			setLists( newList );
		} );
	};
	return {
		lists,
		removeList: removeLocalList,
	};
};

export default useLists;
