import React from 'react';
import { Link } from 'react-router-dom';
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
					<Link className="button button--primary" to="/create">
						Create a list
					</Link>
				</div>
			</h1>
			{ lists.map( ( { title, id, todos } ) => (
				<h2 className="list-item" key={ id }>
					<Link
						className="list-item__title"
						to={ `/checklist/${ id }` }
					>
						{ title }
						<ProgressBadge
							left={
								todos.filter( ( todo ) => ! todo.done ).length
							}
							total={ todos.length }
						/>
					</Link>
					<div className="button-group list-actions">
						<button
							onClick={ () => removeList( id ) }
							className="button button--delete"
						>
							Remove
						</button>
					</div>
				</h2>
			) ) }
		</>
	);
}
