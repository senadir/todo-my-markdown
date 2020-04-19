import isUrl from './is-url';
import isGithub from './is-github';

// matches any github link, will get you the org/repo, the branch or tag and the path.
const regex = /^https?:\/\/github.com\/([\w-]+\/[\w-]+)(?:\/[\w-]*\/?([\w-]+)\/([\w-/]+\.?[\w]+))?/gm;

const parseUrl = ( url ) => {
	if ( ! isUrl( url ) ) {
		throw Error( 'The url you submitted is not valid.' );
	}
	if ( ! isGithub( url ) ) {
		throw Error(
			`We only support Github links, you passed: ${
				new URL( url ).hostname
			}`
		);
	}
	const [ , repo, ref, path ] = [ ...url.matchAll( regex ) ][ 0 ];
	return {
		repo,
		path,
		ref,
	};
};

export default parseUrl;
