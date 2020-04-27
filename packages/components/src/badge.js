/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function Badge( { sx, variant, children } ) {
	return (
		<span
			sx={ {
				px: 'xsmall',
				py: 'xxsmall',
				borderRadius: 'circle',
				fontSize: '10px',
				bg: 'warning',
				color: '#000',
				variant: `badges.${ variant }`,
				...sx,
			} }
		>
			{ children }
		</span>
	);
}
