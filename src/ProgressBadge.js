import React from 'react';

export default function ProgressBadge( { left, total } ) {
	if ( left === 0 ) {
		return (
			<span className="progress-badge progress-badge__all-done">
				All { total } item done
			</span>
		);
	}
	return (
		<span className="progress-badge">
			{ left } left from { total }.
		</span>
	);
}
