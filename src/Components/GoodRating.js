import React from 'react'
import './GoodRating.css'



export default function GoodRating({ currentPark, emotion }) {

    console.log(currentPark)
    console.log(emotion)

    return (
        <div className='GoodRating'>
            <h1>Thank you for Rating!</h1>
            <h3>{currentPark.name}'s current {emotion} rating is {currentPark.emotions[emotion].value}</h3>
            <p>Thank you for letting the community know that you've had a nice time at this park</p>
            <p>We hope that your time here has inspired you to help improve the community's remaining sources of nature.</p>
            <p>Consider volunteering at:</p>
            <ul>
                <li>GreenThumb </li>
                <li>It's My Park </li>
                <li>NYC Parks Stewardship </li>
            </ul>
            <p>More information can be found through the New York City's <a href="https://www.nycgovparks.org/opportunities/volunteer">Dept of Parks and Recreation</a></p>
        </div>
    )
}
