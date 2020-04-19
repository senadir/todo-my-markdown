// sorts array of objects by a key.
const sortArray = ( array, key ) => [
	...array.sort( ( item1, item2 ) => item1[ key ] - item2[ key ] ),
];

export default sortArray;
