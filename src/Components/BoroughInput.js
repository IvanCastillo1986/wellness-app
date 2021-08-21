import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'



export default function BoroughInput() {

    const [parks, setParks] = useState([])
    const API = apiURL()

    const handleChange = (e) => {

    }
    
    useEffect(() => {
        axios.get(`${API}?$limit=5`)
        .then(
            (res) => setParks(res.data),
            (err) => console.log(`get `, err)
        ).catch((c) => console.warn(`catch `, c))
    }, [API])
    

    return (
        <div>
            <form action="" >
                <label htmlFor="">Choose a Borough:</label>
                <select id="borough-select">
                    <option value="Q">Staten Island</option>
                    <option value="B">Brooklyn</option>
                    <option value="X">Bronx</option>
                    <option value="M">Manhattan</option>
                    <option value="Q">Queens</option>
                </select>
            </form>
        </div>
    )
}
