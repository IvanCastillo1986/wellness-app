import React from 'react';
import ParksList from '../Components/ParksList';



export default function Results({ parks, emotion }) {
	return (
		<div>
			<ParksList parks={parks} emotion={emotion} />
		</div>
	);
}
