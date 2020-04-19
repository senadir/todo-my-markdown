const objectToArray = ( object ) =>
	Object.entries( object ).map( ( [ id, item ] ) => ( {
		id,
		...item,
	} ) );

export default objectToArray;
