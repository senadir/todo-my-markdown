import { parseList } from '../';

import {
	fileWithNoHeadings,
	fileWithNoTodo,
	normalTodoFile,
	fileWithNoTitle,
} from './parse-list-stub';

describe( 'parsing a file', () => {
	const file = parseList( normalTodoFile );

	it( 'should parse todos correctly', () => {
		const todos = file.todos.filter( ( todo ) => ! todo.isTitle );
		expect( todos.length ).toEqual( 13 );
		expect( todos[ 0 ].todo ).toEqual(
			'You should not see the add coupon section in your cart and checkout and in the editor.'
		);
	} );

	it( 'should parse subtasks correctly', () => {
		const todos = file.todos.filter( ( todo ) => ! todo.isTitle );
		//  todo index 5 has two children (6 and 7)
		expect( todos[ 6 ].parent ).toEqual( todos[ 5 ].id );
		expect( todos[ 7 ].parent ).toEqual( todos[ 5 ].id );
	} );

	it( 'should parse the title correctly', () => {
		expect( file.title ).toEqual( 'Coupons' );
	} );

	it( 'should return the file name if no title is present', () => {
		const { title } = parseList( fileWithNoTitle );
		expect( title ).toEqual( 'README' );
	} );

	it( 'should parse section headings correctly', () => {
		const titles = file.todos.filter( ( todo ) => todo.isTitle );

		expect( titles.length ).toEqual( 2 );
		expect( titles[ 0 ].todo ).toEqual( 'With coupons disabled:' );
	} );

	it( 'should check already checked todos', () => {
		const todos = file.todos.filter( ( todo ) => ! todo.isTitle );
		expect( todos[ 2 ].done ).toEqual( true );
	} );

	it( 'should return no todos for a file with no todos', () => {
		let { todos } = parseList( fileWithNoTodo );
		todos = todos.filter( ( todo ) => ! todo.isTitle );
		expect( todos.length ).toEqual( 0 );
	} );

	it( 'should return no titles for a file with no titles', () => {
		const { todos } = parseList( fileWithNoHeadings );
		const titles = todos.filter( ( todo ) => todo.isTitle );
		expect( titles.length ).toEqual( 0 );
	} );
} );
