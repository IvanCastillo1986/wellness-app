import React from 'react';

export default function Review({ emotion, handleEmotionReview, handleEmotionSubmit }) {
	return (
		<div>
			<form onSubmit={handleEmotionSubmit} action=''>
				<label htmlFor='emotion'>
					How {emotion} did your experience at this park make you feel?{' '}
				</label>
				<br />
				<span>0 </span>
				<input type='range' id='emotion' min='0' max='5' onChange={handleEmotionReview} />
				<span> 5</span>
				<br />
				<input type='submit' value='Thanks for rating!' />
			</form>
		</div>
	);
}
