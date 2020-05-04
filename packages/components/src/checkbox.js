/** @jsx jsx */
import { jsx } from 'theme-ui';
import { createElement } from 'react';

export default function Checkbox( { id, checked, onChange, label, children } ) {
	return (
		<div
			sx={ {
				mb: 'xsmall',
				pl: 'medium',
				position: 'relative',
			} }
		>
			<label
				htmlFor={ id }
				sx={ {
					position: 'relative',
					cursor: 'pointer',
					textDecoration: 'line-through',
					transition: 'all ease 300ms',
					'&:focus': {
						outline: ( theme ) =>
							`1px solid ${ theme.colors.text }`,
					},
					textDecorationColor: checked ? 'text' : 'transparent',
					code: {
						textDecoration: checked ? 'line-through' : 'none',
					},
				} }
			>
				{ createElement( 'span', {
					dangerouslySetInnerHTML: { __html: label },
				} ) }
			</label>
			<div
				aria-hidden="true"
				tabIndex={ -1 }
				sx={ {
					display: 'inline-block',
					verticalAlign: 'text-top',
					width: '18px',
					height: '18px',
					bg: checked ? 'primary' : 'transparent',
					top: '3px',
					left: 0,
					position: 'absolute',
					border: '1px solid',
					borderColor: 'primary',
					transition: 'all ease 300ms',
					outline: '1px solid transparent',
					'label:hover + &': {
						boxShadow: ( theme ) =>
							! checked &&
							`0 0 3px 0px ${ theme.colors.primary }`,
					},
				} }
			></div>
			<input
				sx={ { position: 'absolute', opacity: 0 } }
				type="checkbox"
				id={ id }
				checked={ checked ? 'checked' : '' }
				onChange={ ( e ) => onChange( e.target.checked ) }
			/>
			<svg
				aria-hidden="true"
				sx={ {
					position: 'absolute',
					left: '1px',
					top: '3px',
					fill: 'background',
				} }
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="16px"
				height="16px"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
			</svg>
			{ children }
		</div>
	);
}

/**<div
				aria-hidden="true"
				sx={ {
					top: '5.5px',
					left: '7px',
					position: 'absolute',
					bg: 'transparent',
					borderBottom: ( theme ) =>
						`1px solid ${ theme.colors.background }`,
					borderRight: ( theme ) =>
						`1px solid ${ theme.colors.background }`,
					transform: 'rotate(45deg)',
					width: '5px',
					height: '10px',
					transition: 'all ease 300ms',
				} }
			></div> */
