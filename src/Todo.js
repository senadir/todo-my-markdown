import React from 'react';

export default function Todo( { id, todo, done, todoChildren, updateTodo } ) {
	return (
		<li className="todo-item">
			<input
				type="checkbox"
				id={ id }
				checked={ done ? 'checked' : '' }
				onChange={ () => updateTodo( id, ! done ) }
			/>
			<label htmlFor={ id }>{ todo }</label>
			{ todoChildren && (
				<ul className="todo-list">
					{ todoChildren.map( ( childTodo ) => (
						<Todo
							key={ childTodo.id }
							{ ...childTodo }
							updateTodo={ updateTodo }
						/>
					) ) }
				</ul>
			) }
		</li>
	);
}
