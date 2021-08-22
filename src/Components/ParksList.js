import React from 'react';
import Park from './Park';




export default function ParksList({ parks, emotion }) {


    return (
		<div>
			{parks.map((park, i) => {
				return <Park key={i} park={park} index={i} emotion={emotion} />
			})}
		</div>
	);
}
