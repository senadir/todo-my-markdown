import db from 'localforage';

const getList = ( id ) => {
	return db.getItem( id );
};

export default getList;
