import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@nadir/components';
import useLists from '../use-lists';
import ProgressBadge from '../ProgressBadge';
import useDarkMode from '../use-dark-mode';

export default function Home() {
	const { lists, removeList } = useLists();
	const ToggleDarkMode = useDarkMode();

	return (
		<>
			<h1 className="list-title">
				<ToggleDarkMode />
				Your Lists
				<div className="button-group list-actions">
					<Button as={ Link } variant="primary" to="/create">
						Create a list
					</Button>
				</div>
			</h1>
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
