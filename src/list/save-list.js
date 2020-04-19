import db from 'localforage';

const saveList = ( { title, todos, sha, id } ) => {
	return db.setItem( id, {
		title,
		todos,
		sha,
	} );
};

export default saveList;
