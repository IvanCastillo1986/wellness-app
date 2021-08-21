import React, { useState, useEffect } from 'react'
import ParksList from '../Components/ParksList'



export default function Results({ parks }) {



    return (
        <div>
            <ParksList parks={parks} />
        </div>
    )
}
