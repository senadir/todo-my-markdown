import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@nadir/components';
import { useDarkMode } from '../hooks';
import ProgressBadge from '../ProgressBadge';
import demoContent from '../demo';

export default function Home() {
	const lists = demoContent;
	const ToggleDarkMode = useDarkMode();
	console.log( JSON.stringify( lists[ 0 ] ) );
	return (
		<>
			<div className="list">
				<ToggleDarkMode />
				<h1 className="list__title">Your Lists</h1>
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
				</h2>
			) ) }
		</>
	);
}
