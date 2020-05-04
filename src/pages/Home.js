import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@nadir/components';
import { useLists, useDarkMode } from '../hooks';
import ProgressBadge from '../ProgressBadge';

export default function Home() {
	const { lists, removeList } = useLists();
	const ToggleDarkMode = useDarkMode();

	return (
		<>
			<div className="list">
				<ToggleDarkMode />
				<h1 className="list__title">Your Lists</h1>
				<div className="button-group list-actions">
					<Button as={ Link } variant="primary" to="/create">
						Create a list
					</Button>
				</div>
			</div>
			{ lists.map( ( { title, id, todos } ) => (
				<h2 className="list-item" key={ id }>
					<Link
						className="list-item__title"
						to={ `/checklist/${ id }` }
					>
						<Stack direction="row" align="center" gap="xsmall">
							{ title }
							<ProgressBadge
								left={
									todos.filter(
										( todo ) =>
											! todo.done && ! todo.isTitle
									).length
								}
								total={
									todos.filter( ( { isTitle } ) => ! isTitle )
										.length
								}
							/>
						</Stack>
					</Link>
					<div className="button-group list-actions">
						<Button
							onClick={ () => removeList( id ) }
							variant="error.inline"
						>
							Delete
						</Button>
					</div>
				</h2>
			) ) }
		</>
	);
}
