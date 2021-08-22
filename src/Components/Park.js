import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Park.css';

export default function Park({ park, index, emotion }) {
	return (
		<div>
			<CardGroup className='Park'>
				<Card className='m-5' style={{ width: '18rem' }}>
					<Card.Title className='Park'>
						<Link to={`/results/${index}`}>
							<h2>{park.name}</h2>
						</Link>
					</Card.Title>
					Location:
					<Card.Text>
						<p>{park.address}</p>
					</Card.Text>
					<Card.Text>
						{emotion}: {park.emotions[`${emotion}`].value}
					</Card.Text>
					<Button variant='success'>Get Directions</Button>
				</Card>
			</CardGroup>
		</div>
	);
}
