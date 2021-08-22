import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default function Park({ park, index, emotion }) {
	return (
		<div className='Park'>
			<CardGroup>
				<Card className='m-5' style={{ width: '18rem', textAlign: 'center' }}>
					<Card.Title className='Park'>
						<Link to={`/results/${index}`}>
							<h2>{park.name}</h2>
						</Link>
					</Card.Title>
					Location:
					<Card.Text className='Park'>
						<p>{park.address}</p>
					</Card.Text>
					<Card.Text>
						{emotion}: {park.emotions[`${emotion}`].value}
					</Card.Text>
				</Card>
			</CardGroup>
		</div>
	);
}
