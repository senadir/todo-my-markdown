/* eslint-disable jsdoc/check-tag-names */
/** @jsx jsx */
import { jsx, Heading, Input } from 'theme-ui';
import { useEffect, useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import hash from 'js-sha1';
import { Button, Stack } from '@nadir/components';
import db from 'localforage';

import useAsyncError from '../use-sync-error';
import { isUrl, isGithub, parseUrl } from '../utils';
import { createList, updateList } from '../list';
import useDarkMode from '../use-dark-mode';
import { ReactComponent as ArrowBack } from '../assets/svg/back.svg';

export default function Create() {
	const { url: fetchedUrl } = useParams();
	const [ url, setUrl ] = useState( () => {
		const githubRef = isGithub( document.referrer )
			? document.referrer
			: '';
		return fetchedUrl || githubRef;
	} );
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
		<Fragment>
			<h1 className="list-title">
				<ToggleDarkMode />
				<Link to="/" className="list__back">
					<ArrowBack fill="currentColor" /> All Lists
				</Link>
				Create A list
			</h1>
			<form className="create-list" onSubmit={ validateForm }>
				<Stack direction="column" gap="normal">
					<label htmlFor="url-input">
						<Heading as="h3">Enter the File Link</Heading>
					</label>
					<Stack direction="row" gap="xsmall">
						<Input type="url" name="url" defaultValue={ url } />
						<Button variant="primary">Create List</Button>
					</Stack>

					{ error && <p className="forme-errors">{ error }</p> }
				</Stack>
			</form>
		</Fragment>
	);
}
