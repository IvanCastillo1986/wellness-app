import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'



export default function Borough() {

    const [parks, setParks] = useState([])
    const API = apiURL()
    
    useEffect(() => {
        axios.get(`${API}?$limit=5`)
        .then(
            (res) => setParks(res.data),
            (err) => console.log(`get `, err)
        ).catch((c) => console.warn(`catch `, c))
    }, [API])
    

    return (
        <div>
            Borough
        </div>
    )
}
