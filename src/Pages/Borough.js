import React from 'react'
import BoroughInput from '../Components/BoroughInput'



export default function Borough({ emotion, handleEmotionChange, parks, setParks }) {
    

    return (
        <div>
            <BoroughInput emotion={emotion} handleEmotionChange={handleEmotionChange} parks={parks} setParks={setParks} />
        </div>
    )
}
