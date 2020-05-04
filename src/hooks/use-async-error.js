import { useState, useCallback } from 'react';

const useAsyncError = () => {
	const [ , setError ] = useState();
	return useCallback(
		( e ) => {
			setError( () => {
				throw e;
			} );
		},
		[ setError ]
	);
};

export default useAsyncError;
