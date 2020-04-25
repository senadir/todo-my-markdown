import React from 'react';
import classnames from 'classnames';

export default function Button( { className, type, children, ...props } ) {
	return (
		<button
			{ ...props }
			className={ classnames( className, { [ `is-${ type }` ]: type } ) }
		>
			{ children }
		</button>
	);
}
