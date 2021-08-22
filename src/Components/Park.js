import React from 'react'



export default function Park({ park }) {
    
    console.log('Console.log: ', park)
    
    return (
        <div>
            <h1>{park.name311}</h1>
            <h3>{park.address}</h3>
        </div>
    )
}
