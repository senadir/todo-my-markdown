const fetchFile = ( urlToFetch ) => {
	return fetch( urlToFetch )
		.then( ( res ) => {
			if ( res.status > 201 ) {
				throw new Error( 'File could not be found' );
			}
			return res.json();
		} )
		.then( ( res ) => {
			if ( Array.isArray( res ) ) {
				res = res.filter(
					( document ) => document.name.toUpperCase() === 'README.MD'
				)[ 0 ];
				return fetchFile( res.url );
			}
			return res;
		} );
};
export default fetchFile;
