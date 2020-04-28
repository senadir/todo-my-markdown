import isUrl from './is-url';

const isGithub = ( url ) =>
	isUrl( url ) &&
	[ 'github.com', 'www.github.com' ].includes( new URL( url ).hostname );

export default isGithub;
