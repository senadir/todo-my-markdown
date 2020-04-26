/* eslint-disable jsdoc/check-tag-names */
import React from 'react';
import { Badge } from '@nadir/components';

export default function ProgressBadge( { left, total, sx } ) {
	const text =
		left === 0
			? `All ${ total } item done.`
			: `${ left } left from ${ total }.`;
	return (
		<Badge
			sx={ { ...sx, top: '2px', position: 'relative' } }
			variant={ left === 0 ? 'done' : '' }
		>
			{ text }
		</Badge>
	);
}
