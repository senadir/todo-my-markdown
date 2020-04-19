import db from 'localforage';
import hash from 'js-sha1';
import parseList from "./parse-list";
import saveList from "./save-list";

const updateList = ( file ) => {
	const { title, todos } = parseList( file );
	db.getItem( hash( file.path ) )
		.then( ({ todos: oldTodos }) => {
			const newTodos = todos.map(todo => ({
				...todo,
				done: oldTodos?.find( oldTodo => oldTodo.id === todo.id ).done ?? todo.done
			}))
			return saveList({
				title,
				todos: newTodos,
				id: hash(file.path),
				sha: file.sha
			})
		})
};

export default updateList;