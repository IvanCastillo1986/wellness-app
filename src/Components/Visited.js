import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



export default function Visited({ parks }) {

    let { index } = useParams()
    console.log(index)
    const [park] = useState(parks[index])
    console.log(park)


    return (
        <div>
            <h1>Visited Component</h1>
            <p>{park.name}</p>
        </div>
    )
}
