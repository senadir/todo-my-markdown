import React from 'react';
import { useColorMode } from 'theme-ui';
import classnames from 'classnames';

export default function useDarkMode() {
	const [ colorMode, setColorMode ] = useColorMode();

	const toggleDarkMode = () => {
		setColorMode( colorMode === 'default' ? 'dark' : 'default' );
		if ( colorMode === 'dark' ) {
			document.documentElement.classList.remove( 'dark' );
		} else {
			document.documentElement.classList.add( 'dark' );
		}
	};

	const ToggleDarkMode = ( { className } ) => (
		<button
			className={ classnames( 'button button--dark-mode', className ) }
			onClick={ () => toggleDarkMode() }
		>
			<span aria-label="Toggle light mode" role="img">
				{ colorMode === 'default' ? '🌞' : '🌚' }
			</span>
		</button>
	);
	return ToggleDarkMode;
}
