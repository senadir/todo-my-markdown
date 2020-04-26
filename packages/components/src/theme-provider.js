import React from 'react';
import { ThemeProvider } from 'theme-ui';
import defaultTheme from './theme';

export default ( { theme: providedTheme = {}, children } ) => {
	const theme = { ...defaultTheme, ...providedTheme };
	return <ThemeProvider theme={ theme }>{ children }</ThemeProvider>;
};
