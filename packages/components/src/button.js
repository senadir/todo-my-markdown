/** @jsx jsx */
import { jsx } from 'theme-ui';
import classnames from 'classnames';

export default function Button( {
	className,
	children,
	variant = 'primary',
	...props
} ) {
	return (
		<button
			{ ...props }
			className={ classnames( className, {
				[ `is-${ variant }` ]: variant,
			} ) }
			sx={ {
				margin: 0,
				py: 0,
				px: 'normal',
				border: 0,
				borderRadius: 'small',
				height: 'large',
				boxShadow: 'none',
				display: 'inline-flex',
				fontFamily: 'inherit',
				fontSize: 1,
				fontWeight: 'body',
				letterSpacing: 'inherit',
				textDecoration: 'none',
				textTransform: 'none',
				verticalAlign: 'baseline',
				whiteSpace: 'pre',
				background: 'transparent',
				cursor: 'pointer',
				variant: `buttons.${ variant }`,
			} }
		>
			{ children }
		</button>
	);
}
