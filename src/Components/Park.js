import React from 'react';
import { Link } from 'react-router-dom'



export default function Park({ park, index, emotion }) {
	console.log('Console.log: ', park);


    
	return (
        <Link to={`/results/${index}`}>
            <div>
                <h1>{park.name}</h1>
                <h3>Located at {park.address}</h3>
                <h4>{emotion}: {park.emotions[`${emotion}`].value}</h4>
            </div>
        </Link>
	);
}
