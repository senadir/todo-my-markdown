import db from 'localforage';

const removeList = ( id ) => {
	return db.removeItem( id )
};

export default removeList;