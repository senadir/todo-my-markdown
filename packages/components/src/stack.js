/* eslint-disable no-console */
/* eslint-disable jsdoc/check-tag-names */
/** @jsx jsx */
import { cloneElement } from 'react';
import { jsx, Flex, Text, useThemeUI } from 'theme-ui';
export default function Stack( { direction, align, gap, children = [] } ) {
	const { theme } = useThemeUI();
	console.log( children );
	// eslint-disable-next-line no-nested-ternary
	const gapProp = gap
		? direction === 'row'
			? { marginRight: theme.space[ gap ] }
			: { marginBottom: theme.space[ gap ] }
		: {};
	return (
		<Flex
			sx={ {
				flexDirection: direction,
				alignItems: align,
				width: '100%',
			} }
		>
			{ children.map( ( c, i, arr ) => {
				if ( arr.length - 1 === i ) {
					return c;
				}
				if ( typeof c === 'string' ) {
					return (
						<Text key={ i } { ...gapProp }>
							{ c }
						</Text>
					);
				}

				return cloneElement( c, {
					style: { ...gapProp },
					key: c.props.key || i,
				} );
			} ) }
		</Flex>
	);
}
