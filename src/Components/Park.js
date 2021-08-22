import React from 'react';
import { Link } from 'react-router-dom'
import { CardGroup, Card } from 'react-bootstrap'



export default function Park({ park, index, emotion }) {

	return (
		<Link to={`/results/${index}`}>
			<CardGroup className="Park">
				<Card className='m-5' style={{ width: '18rem' }}>
					<Card.Title className='Park'>
						<h2>{park.name}</h2>
					</Card.Title>
					Location:
					<Card.Text>
						<p>{park.address}</p>
					</Card.Text>
					<Card.Text>
						{emotion}: {park.emotions[`${emotion}`].value}
					</Card.Text>
				</Card>
			</CardGroup>
		</Link>
	);
}
