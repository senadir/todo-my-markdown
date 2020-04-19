import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import hash from 'js-sha1';
import useAsyncError from '../use-sync-error';
import db from 'localforage';
import { isUrl, isGithub, parseUrl } from '../utils';
import { createList, updateList } from '../list';
import useDarkMode from '../use-dark-mode';
import { ReactComponent as ArrowBack } from '../assets/svg/back.svg';

export default function Create() {
	const { url: fetchedUrl } = useParams();
	const [ url, setUrl ] = useState( fetchedUrl );
	const [ file, setFile ] = useState( null );
	const [ error, setError ] = useState( '' );
	const throwError = useAsyncError();
	const ToggleDarkMode = useDarkMode();

	const validateForm = ( e ) => {
		e.preventDefault();
		const value = e.target.url.value;
		if ( ! isUrl( value ) ) {
			return setError( 'The url you submitted is not valid.' );
		}
		if ( ! isGithub( value ) ) {
			return setError(
				`We only support Github links, you passed: ${
					new URL( value ).hostname
				}`
			);
		}
		setUrl( value );
	};
	useEffect( () => {
		if ( file ) {
			db.getItem( hash( file.path ) )
				.then( ( checklist ) => {
					if ( checklist.sha === file.sha ) {
						window.location.replace(
							`/checklist/${ hash( file.path ) }`
						);
					} else {
						updateList( file ).then( () => {
							window.location.replace(
								`/checklist/${ hash( file.path ) }`
							);
						} );
					}
				} )
				.catch( () => {
					createList( file ).then( () => {
						window.location.replace(
							`/checklist/${ hash( file.path ) }`
						);
					} );
				} );
		}
	}, [ file ] );
	useEffect( () => {
		if ( url ) {
			let parseLinked;
			try {
				parseLinked = parseUrl( url );
			} catch ( e ) {
				return setError( e.message );
			}
			const { repo, path = '', ref = 'master' } = parseLinked;
			const link = `https://api.github.com/repos/${ repo }/contents/${ path }?ref=${ ref }`;
			const fetchFile = ( urlToFetch ) => {
				return fetch( urlToFetch )
					.then( ( res ) => {
						if ( res.status > 201 ) {
							setError( 'File could not be found' );
						}
						return res.json();
					} )
					.then( ( res ) => {
						if ( Array.isArray( res ) ) {
							res = res.filter(
								( document ) =>
									document.name.toUpperCase() === 'README.MD'
							)[ 0 ];
							return fetchFile( res.url );
						}
						setFile( res );
					} )
					.catch( ( e ) => {
						setError( e.message );
					} );
			};
			fetchFile( link );
		}
	}, [ throwError, url ] );
	return (
		<>
			<h1 className="list-title">
				<ToggleDarkMode />
				<Link to="/" className="list__back">
					<ArrowBack fill="currentColor" /> All Lists
				</Link>
				Create A list
			</h1>
			<form className="create-list" onSubmit={ validateForm }>
				<label htmlFor="url-input" className="create-list__label">
					<h3>Enter the File Link</h3>
				</label>
				<input
					type="url"
					name="url"
					defaultValue={ url }
					className="create-list__input"
				/>
				<button className="button button--primary create-list__submit">
					Create List
				</button>
				{ error && <p className="forme-errors">{ error }</p> }
			</form>
		</>
	);
}
