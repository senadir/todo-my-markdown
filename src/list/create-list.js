import hash from 'js-sha1';
import parseList from "./parse-list";
import saveList from "./save-list";

const createList = ( file ) => {
	const { title, todos } = parseList( file );
	return saveList({
		title,
		todos,
		id: hash(file.path),
		sha: file.sha
	})
};

export default createList;