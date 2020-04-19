// I try to avoid reduce as much as possible but I think it was needed here.
// our original array was flat, all todos on same level, this reduce
// move all todos that has a parent to their parent and turn everything to an object
// so that we can keep track of them.
// before rendering, we will turn this to an array and sort it.

const reduceList = ( todos ) => todos.reduce( ( newTodos, todo ) => {
	const {id, parent, ...cleanedTodo} = todo;
	if (parent === null) {
		return {...newTodos, [id]: cleanedTodo};
	} else {
		return {...newTodos, [parent]: {
			...newTodos[parent],
			todoChildren: {
				...newTodos[parent]['todoChildren'],
				[id]: cleanedTodo
			}
		} }
	}
}, {} );

export default reduceList;