const heading = {
	color: 'text',
	fontFamily: 'heading',
	lineHeight: 'heading',
	fontWeight: 'heading',
};

const base = {
	useColorSchemeMediaQuery: true,
	space: {
		none: 0,
		xxsmall: 4,
		xsmall: 8,
		normal: 16,
		medium: 24,
		large: 32,
		xxlarge: 64,
		xxxlarge: 128,
	},

	sizes: {
		none: 0,
		xxsmall: 4,
		xsmall: 8,
		normal: 16,
		medium: 24,
		large: 32,
		xlarge: 40,
		xxlarge: 64,
		xxxlarge: 128,
	},
	radii: {
		none: 0,
		small: 3,
		normal: 5,
		large: 8,
		circle: 9999,
	},
	fonts: {
		body:
			'"Calibre",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
		heading:
			'"Calibre",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
		monospace:
			'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace',
	},
	fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 96 ],
	fontWeights: {
		body: 400,
		heading: 400,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors: {
		text: '#000',
		background: '#fff',
		secondary: '#30c',
		muted: '#f6f6f6',
		primary: '#0070f3',
		error: '#e00',
		warning: '#f0bab4',
		success: '#0070F3',
		highlight: '#79ffe1',
		modes: {
			dark: {
				text: '#fff',
				background: '#000',
			},
		},
	},
	badges: {
		done: {
			bg: 'highlight',
		},
	},
	buttons: {
		primary: {
			color: '#fff',
			[ `&:visited,
				&:focus,
				&:active` ]: {
				color: '#fff',
			},
			bg: 'primary',
			inline: {
				textDecoration: 'underline',
				bg: 'transparent',
				color: 'primary',
				[ `&:visited,
				&:focus,
				&:active` ]: {
					color: 'primary',
				},
				px: 0,
			},
		},
		error: {
			bg: 'error',
			color: '#fff',
			[ `&:visited,
				&:focus,
				&:active` ]: {
				color: '#fff',
			},
			inline: {
				bg: 'transparent',
				color: 'error',
				[ `&:visited,
				&:focus,
				&:active` ]: {
					color: 'error',
				},
				textDecoration: 'underline',
				px: 0,
			},
		},
		outline: {
			bg: 'transparent',
			color: 'primary',
			[ `&:visited,
				&:focus,
				&:active` ]: {
				color: 'primary',
			},
			border: '1px solid',
			borderColor: 'primary',
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			p: {
				color: 'text',
				fontFamily: 'body',
				fontWeight: 'body',
				lineHeight: 'body',
			},
			pre: {
				fontFamily: 'monospace',
				overflowX: 'auto',
				code: {
					color: 'inherit',
				},
			},
			code: {
				fontFamily: 'monospace',
				bg: 'highlight',
				display: 'inline-block',
				color: '#000',
				fontSize: '12px',
				px: 'xxsmall',
				letterSpacing: '0.5px',
			},
			table: {
				width: '100%',
				borderCollapse: 'separate',
				borderSpacing: 0,
			},
			th: {
				textAlign: 'left',
				borderBottomStyle: 'solid',
			},
			td: {
				textAlign: 'left',
				borderBottomStyle: 'solid',
			},
			img: {
				maxWidth: '100%',
			},
		},
	},
};

export default base;
