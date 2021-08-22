import React from 'react';
import { Link } from 'react-router-dom'



export default function Review({ emotion, handleEmotionReview, handleEmotionSubmit }) {


	return (
		<div className='Review'>
			<form onSubmit={handleEmotionSubmit} action=''>
				<label htmlFor='emotion'>
					How {emotion} did your experience at this park make you feel?{' '}
				</label>
				<br />
				<div>
					<span>0 </span>
					<input type='range' id='emotion' min='0' max='5' onChange={handleEmotionReview} />
					<span> 5</span>
					<div className='Rating'><span className='Bad'>No Likey</span> <span className='Good'>Great Park!</span></div>
				</div>
				<br />
				<Link to='/volunteer'><input type='submit' value='Submit rating!' /></Link>
			</form>
		</div>
	);
}
