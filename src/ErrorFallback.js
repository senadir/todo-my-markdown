import React from 'react';

export default function ErrorFallback( { componentStack, error } ) {
	return (
		<div>
			<p>
				<strong>Oops! An error occured!</strong>
			</p>
			<p>
				<strong>Error:</strong> { error.toString() }
			</p>
		</div>
	);
}
