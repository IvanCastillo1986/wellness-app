import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import VisitedPark from '../Components/VisitedPark'
import Review from '../Components/Review'
import './Feedback.css'



export default function Feedback({ parks, emotion, handleEmotionReview, emotionReview }) {

	let { index } = useParams()
    const [park, setPark] = useState(parks[index])

	// This function sets the current emotion count + 1, and the current emotion value is averaged
	const avgEmotion = (park) => {
		const newCount = park.emotions[emotion].count + 1
		const average = (park.emotions[emotion].value + emotionReview) / newCount
		setPark(prevPark => ({
			...prevPark,
			emotions: { ...prevPark.emotions, [emotion]: { ...prevPark.emotions[emotion], value: average, count: newCount } }
		}))
	}

	const handleEmotionSubmit = (e) => {
        e.preventDefault()
        avgEmotion(park)
    }

	return (
		<div className='Feedback'>
			<VisitedPark park={park} />
			<Review emotion={emotion} handleEmotionReview={handleEmotionReview} handleEmotionSubmit={handleEmotionSubmit} park={park} />
		</div>
	)
}
