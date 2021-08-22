import React from 'react';
import { Link } from 'react-router-dom'



export default function Park({ park, index }) {
	console.log('Console.log: ', park);

	return (
        <Link to={`/feedback/${index}`}>
            <div>
                <h1>{park.name}</h1>
                <h3>{park.address}</h3>
            </div>
        </Link>
	);
}
