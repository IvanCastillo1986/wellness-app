import React from 'react';
import Visited from '../Components/Visited'
import { useParams } from 'react-router-dom'


// This is essentially the Show Page

export default function Feedback({ parks }) {


	return (
		<div>
			<Visited parks={parks} />
		</div>
	)
}
