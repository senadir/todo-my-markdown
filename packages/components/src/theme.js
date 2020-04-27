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
			bg: 'primary',
			inline: {
				textDecoration: 'underline',
				bg: 'transparent',
				color: 'primary',
				px: 0,
			},
		},
		error: {
			bg: 'error',
			color: '#fff',
			inline: {
				bg: 'transparent',
				color: 'error',
				textDecoration: 'underline',
				px: 0,
			},
		},
		outline: {
			bg: 'transparent',
			color: 'primary',
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
/*
--geist-foreground: #000;
    --geist-background: #fff;
    --geist-selection: var(--geist-cyan);
    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999;
    --accents-4: #888;
    --accents-5: #666;
    --accents-6: #444;
    --accents-7: #333;
    --accents-8: #111;
    --geist-link-color: var(--geist-success);
    --geist-marketing-gray: #fafbfc;
    --geist-code: var(--geist-purple);
    --geist-success-light: #3291ff;
    --geist-success: #0070f3;
    --geist-success-dark: #0366d6;
    --geist-error-light: #ff1a1a;
    --geist-error: #e00;
    --geist-error-dark: #c00;
    --geist-warning-light: #f7b955;
    --geist-warning: #f5a623;
    --geist-warning-dark: #f49b0b;
    --geist-secondary-light: var(--accents-3);
    --geist-secondary: var(--accents-5);
    --geist-secondary-dark: var(--accents-7);
    --dropdown-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.02);
    --dropdown-triangle-stroke: #fff;
    --scroller-start: #fff;
    --scroller-end: hsla(0,0%,100%,0);
    --shadow-smallest: 0px 4px 8px rgba(0,0,0,0.12);
    --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
    --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
    --shadow-large: 0 30px 60px rgba(0,0,0,0.12);
    --shadow-hover: 0 30px 60px rgba(0,0,0,0.12);
    --shadow-sticky: 0 12px 10px -10px rgba(0,0,0,0.12);
    --portal-opacity: 0.25;
--geist-gap: 16pt;
    --geist-gap-negative: -16pt;
    --geist-gap-half: 8pt;
    --geist-gap-half-negative: -8pt;
    --geist-gap-quarter: 4pt;
    --geist-gap-quarter-negative: -4pt;
    --geist-gap-double: 32pt;
    --geist-gap-double-negative: -32pt;
    --geist-page-margin: 16pt;
    --geist-page-width: 750pt;
    --geist-page-width-with-margin: 782pt;
    --geist-breakpoint-mobile: 600px;
    --geist-breakpoint-tablet: 960px;
    --geist-radius: 5px;
    --geist-marketing-radius: 8px;
    --geist-cyan: #79ffe1;
    --geist-cyan-dark: #50e3c2;
    --geist-cyan-darker: #29bc9b;
    --geist-purple: #f81ce5;
    --geist-violet: #7928ca;
    --geist-alert: #ff0080;
    --font-sans:
    --font-mono:
    --header-height: 64px;
    --header-border-bottom: inset 0 -1px 0 0 rgba(0,0,0,0.1);
    --header-background: hsla(0,0%,100%,0.8);
    --geist-form-large-font: 1rem;
    --geist-form-large-height: 3rem;
    --geist-form-large-line-height: 1.5rem;
    --geist-form-small-font: 0.875rem;
    --geist-form-small-height: 2rem;
    --geist-form-small-line-height: 0.875rem;
    --geist-form-font: 0.875rem;
    --geist-form-height: 2.5rem;
		--geist-form-line-height: 1.25rem;

*/
