import db from 'localforage';
import hash from 'js-sha1';
import saveList from './save-list';

const updateList = ( file, { title, todos, url } ) => {
	db.getItem( hash( file.path ) ).then( ( { todos: oldTodos } ) => {
		const newTodos = todos.map( ( todo ) => {
			if ( todo.isTitle ) {
				return todo;
			}
			return {
				...todo,
				done:
					oldTodos?.find( ( oldTodo ) => oldTodo.id === todo.id )
						?.done ?? todo.done,
			};
		} );
		return saveList( {
			title,
			todos: newTodos,
			id: hash( file.path ),
			sha: file.sha,
			url,
		} );
	} );
};

export default updateList;
