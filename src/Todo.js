/* eslint-disable jsx-a11y/label-has-associated-control */
import { Checkbox, List } from '@nadir/components';
import React from 'react';
import marked from 'marked';
export default function Todo( {
	id,
	todo,
	done,
	todoChildren,
	updateTodo,
	isTitle,
	level = 1,
} ) {
	// eslint-disable-next-line no-console
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
		<Checkbox
			id={ id }
			checked={ done }
			onChange={ ( checked ) => {
				updateTodo( id, checked );
			} }
			label={ marked( todo, { renderer } ) }
		>
			{ todoChildren && (
				<List
					pl={ level > 0 ? 'normal' : 0 }
					mt={ level > 0 ? 'normal' : 0 }
				>
					{ todoChildren.map( ( childTodo ) => (
						<Todo
							key={ childTodo.id }
							{ ...childTodo }
							updateTodo={ updateTodo }
							level={ level + 1 }
						/>
					) ) }
				</List>
			) }
		</Checkbox>
	);
}
