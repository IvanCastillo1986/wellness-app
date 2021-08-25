import React from 'react';
import VisitedPark from '../Components/VisitedPark'
import Review from '../Components/Review'
import './Feedback.css'



export default function Feedback({ currentPark, handleSetCurrentParkEmotion, emotion, handleEmotionReview }) {


	return (
		<div className='Feedback'>
			<VisitedPark currentPark={currentPark} />
			<Review currentPark={currentPark} emotion={emotion} handleSetCurrentParkEmotion={handleSetCurrentParkEmotion} handleEmotionReview={handleEmotionReview} />
		</div>
	)
}
