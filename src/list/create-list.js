import hash from 'js-sha1';
import saveList from './save-list';

const createList = ( file, { title, todos, url } ) => {
	return saveList( {
		title,
		todos,
		id: hash( file.path ),
		sha: file.sha,
		url,
	} );
};

export default createList;
