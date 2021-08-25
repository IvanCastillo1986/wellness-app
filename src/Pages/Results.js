import React from 'react';
import ParksList from '../Components/ParksList';
import './Feedback.css'


// all this component does is display the parks, no changes

export default function Results({ parks, emotion, handleSetCurrentPark }) {
	
	return (
		<div>
			<ParksList parks={parks} emotion={emotion} handleSetCurrentPark={handleSetCurrentPark} />
		</div>
	);
}
