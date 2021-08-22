import React from 'react'


// This page will crash if it is refreshed!
// Because it no longer has user input from the borough component, so the parks array is empty


export default function VisitedPark({ park }) {


    return (
        <div>
            <p>We hope you've enjoyed visiting {park.name} Park!</p>
        </div>
    )
}
