/* eslint-disable jsdoc/check-tag-names */
/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function List( { pl = 0, children, ...sx } ) {
	return <ul sx={ { pl, ...sx } }>{ children }</ul>;
}
