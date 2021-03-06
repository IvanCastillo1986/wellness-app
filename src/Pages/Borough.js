import React from 'react';
import BoroughInput from '../Components/BoroughInput';
import './Borough.css'



export default function Borough({ emotion, handleEmotionChange, handleSetParks }) {
	return (
		<div className='Borough'>
			<h1>Let's find the park that's best for you!</h1>
			<BoroughInput
				emotion={emotion}
				handleEmotionChange={handleEmotionChange}
				handleSetParks={handleSetParks}
			/>
		</div>
	);
}
