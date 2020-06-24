import hash from 'js-sha1';
import { Base64 } from 'js-base64';
// https://regex101.com/r/uMDqfz/3
// Takes a markdown H1 title and return the title alone (strips links).
const titleRegex = /^[^\S\n\t]?#\s?\[?([\w-,;:'"^ ]+[.:?!]?)\]?.*?$/g;

const hasParent = ( todo ) => todo.slice( 0, 2 ) === '  ';
const getParentId = ( todo, index, array ) => {
	if ( ! hasParent( todo ) ) {
		return null;
	}
	let n = 1;
	let previousTodo = array[ index - n ];
	while ( hasParent( previousTodo ) ) {
		n++;
		previousTodo = array[ index - n ];
	}
	return hash( `${ previousTodo }` );
};

const parseList = ( file ) => {
	const decodedLines = Base64.decode( file.content )
		.split( '\n' )
		.filter( Boolean );
	const title =
		decodedLines
			.filter( ( line ) => line.match( '#' ) )
			.map( ( line ) => [ ...line.matchAll( titleRegex ) ] )
			.flat( Infinity )
			.filter( Boolean )[ 1 ] || file.name;

	const todos = decodedLines
		.filter( ( line ) => line.match( /\[x\]|\[ \]|<!-- heading -->/g ) )
		.map( ( todo, index, allTodos ) => {
			if ( todo.match( /<!-- heading -->/g ) ) {
				return {
					todo: todo.replace( /<!-- heading -->/g, '' ).trim(),
					index, // needed to keep the sort correct.
					id: hash( `${ todo }` ),
					parent: null, // titles shouldn't have parents for now.
					isTitle: true,
				};
			}
			return {
				todo: todo.replace( /\[x\]|\[ \]/g, '' ).trim(),
				index, // needed to keep the sort correct.
				id: hash( `${ todo }` ),
				parent: getParentId( todo, index, allTodos ),
				done: !! todo.match( / \[x\]/g )?.length,
				todoChildren: null,
			};
		} );
	const url = file.url;
	return {
		url,
		title,
		todos,
	};
};

export default parseList;
