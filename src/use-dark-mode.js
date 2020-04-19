/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

export default function useDarkMode() {
	const [ isDarkMode, setIsDarkMode ] = useState( () => {
		return (
			JSON.parse( localStorage.getItem( 'isDarkMode' ) ) ??
			( window.matchMedia &&
				window.matchMedia( '(prefers-color-scheme: dark)' ).matches )
		);
	} );

	useEffect( () => {
		if ( isDarkMode ) {
			console.log( isDarkMode );
			document.documentElement.classList.add( 'dark' );
		} else {
			document.documentElement.classList.remove( 'dark' );
		}
		localStorage.setItem( 'isDarkMode', isDarkMode );
	}, [ isDarkMode ] );

	window.matchMedia( '(prefers-color-scheme: dark)' ).addListener( ( e ) => {
		setIsDarkMode( !! e.matches );
	} );
	const ToggleDarkMode = ( { className } ) => (
		<button
			className={ classnames( 'button button--dark-mode', className ) }
			onClick={ () => setIsDarkMode( ( mode ) => ! mode ) }
		>
			<span aria-label="Toggle light mode" role="img">
				{ isDarkMode ? '🌞' : '🌚' }
			</span>
		</button>
	);
	return ToggleDarkMode;
}
