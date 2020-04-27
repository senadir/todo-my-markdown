import { Checkbox, List } from '@nadir/components';
import React from 'react';
export default function Todo( {
	id,
	todo,
	done,
	todoChildren,
	updateTodo,
	isTitle,
	level = 1,
} ) {
	const codeParser = ( str ) =>
		str.replace( /`([^`]*)`/g, '<code>$1</code>' );
	if ( isTitle ) {
		return (
			<p
				className="todo-heading"
				dangerouslySetInnerHTML={ {
					__html: codeParser( todo ),
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
			label={ codeParser( todo ) }
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
