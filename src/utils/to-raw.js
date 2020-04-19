import isBlob from './is-blob';
import isMarkdown from './is-markdown';
import isRaw from './is-raw';
import isFolder from './is-folder';
import isTree from './is-tree';

const replaceTree = /(^https?:\/\/github.com\/[\w-]+\/[\w-]+\/)(tree)(.*)/gm;
const replaceBlob = /(^https?:\/\/github.com\/[\w-]+\/[\w-]+\/)(Blob)(.*)/gm;

const toRaw = ( url ) => {
	if ( isRaw( url ) ) {
		return url;
	}
	if ( isTree( url ) ) {
		url =
			url.substr( -1 ) === '/'
				? `${ url }readme.md`
				: `${ url }/readme.md`;
		return url.replace(
			replaceTree,
			( _, base, __, path ) => `${ base }raw${ path }`
		);
	}
	if ( isBlob( url ) ) {
		if ( isFolder( url ) ) {
			url =
				url.substr( -1 ) === '/'
					? `${ url }readme.md`
					: `${ url }/readme.md`;
		}
		if ( isMarkdown( url ) ) {
			return url.replace(
				replaceBlob,
				( _, base, __, path ) => `${ base }raw${ path }`
			);
		}
	}

	return false;
};

export default toRaw;
