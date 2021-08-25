import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'
import VisitedPark from '../Components/VisitedPark'
import Review from '../Components/Review'
import './Feedback.css'



export default function Feedback({ currentPark, handleSetCurrentParkEmotion, emotion, handleEmotionReview, emotionReview }) {


	return (
		<div className='Feedback'>
			<VisitedPark currentPark={currentPark} />
			<Review currentPark={currentPark} emotion={emotion} handleSetCurrentParkEmotion={handleSetCurrentParkEmotion} />
		</div>
	)
}
