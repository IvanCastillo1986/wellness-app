import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Park from './Park';




export default function ParksList({ parks, emotion }) {


    return (
			<Container>
				<CardGroup className="m-5">
					{parks.map((park, i) => {
						return <Park key={i} park={park} index={i} emotion={emotion} />;
					})}
				</CardGroup>
			</Container>
		);
}
