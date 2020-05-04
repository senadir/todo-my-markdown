import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from '@nadir/components';
import Checklist from '../Checklist';
import useTodos from '../../hooks/use-todos';
jest.mock( '../../hooks/use-todos' );

const listMock = {
	title: 'Title',
	todos: [
		{
			id: '89bc96767401d461bc75e67c3654edea128bdff2',
			todo: 'Section title',
			index: 0,
			isTitle: true,
		},
		{
			id: '502f6f58b158c1d9e0d4b27ad16164752473dada',
			todo: 'unchecked todo',
			index: 1,
			done: false,
			todoChildren: null,
		},
		{
			id: 'f049b0ecfc9944db3d42aaf31db67b78476c5150',
			todo: 'checked todo',
			index: 2,
			done: true,
			todoChildren: [
				{
					id: 'c3e6b73d6f097726d169114cdfc2e9be333e0953',
					todo: 'child todo',
					index: 3,
					done: true,
					todoChildren: null,
				},
			],
		},
	],
	updateTodo: jest.fn(),
	removeList: jest.fn(),
	resetList: jest.fn(),
};
useTodos.mockReturnValue( listMock );
describe( 'a checklist', () => {
	test( 'displays correctly', async () => {
		const history = createMemoryHistory();
		render(
			<ThemeProvider>
				<Router history={ history }>
					<Checklist />
				</Router>
			</ThemeProvider>
		);
		const title = screen.getByRole( 'heading' );
		expect( title.textContent ).toEqual( listMock.title );
	} );
} );
