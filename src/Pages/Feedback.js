import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import VisitedPark from '../Components/VisitedPark'
import Review from '../Components/Review'


// This is essentially the Show Page

export default function Feedback({ parks, emotion, handleEmotionReview, emotionReview }) {

	let { index } = useParams()
    const [park, setPark] = useState(parks[index])

	const avgEmotion = (park) => {
		const newCount = park.emotions[emotion].count + 1
		setPark(...park, (park.emotions[emotion].value + emotionReview) / newCount)
	}

	const handleEmotionSubmit = (e) => {
        e.preventDefault()
        avgEmotion(park)
		// console.log(park.emotions[emotion].value)
    }

	return (
		<div>
			<VisitedPark park={park} />
			<Review emotion={emotion} handleEmotionReview={handleEmotionReview} handleEmotionSubmit={handleEmotionSubmit} park={park} />
		</div>
	)
}
