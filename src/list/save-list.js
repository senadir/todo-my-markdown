import db from 'localforage';

const saveList = ( { title, todos, sha, id, url } ) => {
	return db.setItem( id, {
		title,
		todos,
		sha,
		url,
	} );
};

export default saveList;
