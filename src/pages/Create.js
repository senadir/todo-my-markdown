/** @jsx jsx */
import { jsx, Heading, Input } from 'theme-ui';
import { useEffect, useState, Fragment } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as hash from 'js-sha1';
import { Button, Stack } from '@nadir/components';

import { useAsyncError, useDarkMode } from '../hooks';
import { isUrl, isGithub, parseUrl } from '../utils';
import { createList, updateList, getList, parseList } from '../list';
import { fetchFile } from '../data';
import { ReactComponent as ArrowBack } from '../assets/svg/back.svg';

export default function Create() {
	const { url: fetchedUrl } = useParams();
	const history = useHistory();
	const [ url, setUrl ] = useState( () => {
		const githubRef = isGithub( document.referrer )
			? document.referrer
			: null;
		return fetchedUrl || githubRef;
	} );
	const [ preloaded, setPreloaded ] = useState( !! url );
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
			getList( hash( file.path ) )
				.then( ( checklist ) => {
					if ( checklist.sha === file.sha ) {
						history.push( `/checklist/${ hash( file.path ) }` );
					} else {
						const { title, todos, url: fileUrl } = parseList(
							file
						);
						if ( todos.length === 0 ) {
							return setError(
								'The file you provided has no todos in it.'
							);
						}
						updateList( file, {
							title,
							todos,
							url: fileUrl,
						} ).then( () =>
							history.push( `/checklist/${ hash( file.path ) }` )
						);
					}
				} )
				.catch( () => {
					const { title, todos, url: fileUrl } = parseList( file );
					if ( todos.length === 0 ) {
						return setError(
							'The file you provided has no todos in it.'
						);
					}
					createList( file, {
						title,
						todos,
						url: fileUrl,
					} ).then( () =>
						history.push( `/checklist/${ hash( file.path ) }` )
					);
				} );
		}
	}, [ file, history, url ] );
	useEffect( () => {
		if ( url ) {
			try {
				const { repo, path = '', ref = 'master' } = parseUrl( url );
				const link = `https://api.github.com/repos/${ repo }/contents/${ path }?ref=${ ref }`;
				fetchFile( link )
					.then( ( res ) => setFile( res ) )
					.catch( ( e ) => setError( e.message ) );
			} catch ( e ) {
				return setError( e.message );
			}
		}
	}, [ throwError, url ] );

	useEffect( () => {
		if ( error && preloaded ) {
			setPreloaded( false );
		}
	}, [ error, preloaded ] );
	if ( preloaded ) {
		return null;
	}
	return (
		<Fragment>
			<div className="list">
				<ToggleDarkMode />
				<Link to="/" className="list__back">
					<ArrowBack fill="currentColor" /> All Lists
				</Link>
				<h1 className="list__title">Create A list</h1>
			</div>
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
