import React from 'react'
import useLists from '../use-lists';
import { Link } from 'react-router-dom';

export default function Home() {
	const { lists, removeList } = useLists();
	return (
		<div className='home'>
			{lists.map(({title, id}) => (
			<h2 key={ id }>
				<Link to={`/checklist/${id}`}>{title}</Link>
				<button onClick={() => removeList( id ) }>remove</button>
				</h2>
			))}
		</div>
	)
}
