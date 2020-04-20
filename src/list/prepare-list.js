import reduceList from './reduce-list';
import { sortArray, objectToArray } from '../utils';

const prepareList = ( todos ) => {
	let reducedTodos = reduceList( todos );
	reducedTodos = objectToArray( reducedTodos );
	reducedTodos = sortArray( reducedTodos, 'index' );
	reducedTodos = reducedTodos.map( ( todo ) => {
		if ( todo.todoChildren === null || todo.todoChildren === undefined ) {
			return todo;
		}
		return {
			...todo,
			todoChildren: sortArray( objectToArray( todo.todoChildren ) ),
		};
	} );

	return reducedTodos;
};

export default prepareList;
