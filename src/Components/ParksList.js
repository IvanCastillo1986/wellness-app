import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Park from './Park';


// Should I use this to set a single park object to hand up to App.js?

export default function ParksList({ parks, emotion, handleSetCurrentPark }) {


    return (
		<div>
			<Container>
				<CardGroup className="m-5">
					{parks.map((park, i) => {
						return <Park key={i} park={park} index={i} emotion={emotion} handleSetCurrentPark={handleSetCurrentPark} />;
					})}
				</CardGroup>
			</Container>
		</div>
	);
}
