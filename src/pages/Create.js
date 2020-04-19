import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import hash from 'js-sha1';
import useAsyncError from '../use-sync-error';
import db from 'localforage';
import { isUrl, isGithub, parseUrl } from '../utils';
import { createList, updateList } from '../list';

export default function Create() {
	const { url } = useParams();
	const [ file, setFile ] = useState( null );
	const throwError = useAsyncError();
	useEffect(() => {

		if ( file ) {
			db.getItem( hash( file.path ) )
				.then( checklist => {
					if ( checklist.sha === file.sha ) {
						window.location.replace(`/checklist/${ hash( file.path ) }`);
					} else {
						updateList( file )
						.then(() => {
							window.location.replace(`/checklist/${ hash(file.path) }`);
						})
					}
				}).catch( () => {
					createList( file )
					.then(() => {
						window.location.replace(`/checklist/${ hash(file.path) }`);
					})
				})
		}
	}, [file])
	useEffect(() => {
		const { repo, path = "", ref = 'master' } = parseUrl( url );
		const link = `https://api.github.com/repos/${ repo }/contents/${ path }?ref=${ ref }`;
		const fetchFile = ( urlToFetch ) => {
			return fetch( urlToFetch )
			.then( res => {
				if ( res.status > 201 ) {
					throwError('File could not be found');
				}
				return res.json();
			})
			.then( res => {
				if ( Array.isArray( res ) ) {
					res = res.filter( file => file.name.toUpperCase() === 'README.MD' )[0];
					return fetchFile( res.url )
				}
				setFile( res );
			})
			.catch( error => {
				throw Error( error );
			} )

		};
		fetchFile( link );
	}, [throwError, url])
	return (
		<div>
			{ ! isUrl( url ) && 'The value you entered is not an url' }
			{ ! isGithub( url ) && 'We only support github links' }
		</div>
	)
}
