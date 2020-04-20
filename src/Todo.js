/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import marked from 'marked';
export default function Todo( {
	id,
	todo,
	done,
	todoChildren,
	updateTodo,
	isTitle,
} ) {
	const renderer = new marked.Renderer();
	renderer.paragraph = ( text ) => text;
	if ( isTitle ) {
		return (
			<p
				className="todo-heading"
				dangerouslySetInnerHTML={ {
					__html: marked( todo, { renderer } ),
				} }
			></p>
		);
	}
	return (
		<li className="todo-item">
			<input
				type="checkbox"
				id={ id }
				checked={ done ? 'checked' : '' }
				onChange={ () => updateTodo( id, ! done ) }
			/>
			<label
				htmlFor={ id }
				dangerouslySetInnerHTML={ {
					__html: marked( todo, { renderer } ),
				} }
			></label>
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
