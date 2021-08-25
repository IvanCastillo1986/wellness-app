import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default function Park({ park, index, emotion, handleSetCurrentPark }) {

	// console.log(park)

	return (
		<div className='Park'>
				<Card className='m-5' style={{ width: '18rem', textAlign: 'center' }}>
					<Card.Title className='Park'>
						<Link to={`/results/${index}`}>
							<h2 onClick={() => {handleSetCurrentPark(park)}}>{park.name}</h2>
						</Link>
					</Card.Title>
					Location:
					<Card.Text className='Park'>
						{park.address}
					</Card.Text>
					<Card.Text>
						{emotion}: {park.emotions[emotion].value}
					</Card.Text>
				</Card>
		</div>
	);
}
