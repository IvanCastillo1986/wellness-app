import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'



export default function BoroughInput({ emotion, handleEmotionChange, setParks }) {

    const [borough, setBorough] = useState('R')
    const API = apiURL()
    const history = useHistory()

    const handleChange = (e) => {
        setBorough(e.target.value)
    }
    const getParks = () => {
        axios.get(`${API}?borough=${borough}&$limit=5`)
        .then(
            (res) => setParks(res.data),
            (err) => console.log(`get `, err)
        ).then(res => history.push('/results'))
        .catch((c) => console.warn(`catch `, c))
        console.log('Using getParks')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getParks()
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="borough-select">Choose a Borough:</label>
                <select id="borough-select" onChange={handleChange}>
                    <option value="R">Staten Island</option>
                    <option value="B">Brooklyn</option>
                    <option value="X">Bronx</option>
                    <option value="M">Manhattan</option>
                    <option value="Q">Queens</option>
                </select>
                <br />
                <label htmlFor="">How are you currently feeling?</label>
                <select id="emotion" onChange={handleEmotionChange}>
                    <option value="happy">Sad</option>
                    <option value="satisfied">Bored</option>
                    <option value="content">Frustrated</option>
                    <option value="relaxed">Tense</option>
                    <option value="at_ease">Annoyed</option>
                    <option value="uplifted">Depressed</option>
                    <option value="calm">Hyper</option>
                </select>
                <br />
                <input type="submit" value="Let's Go!" />
            </form>
        </div>
    )
}
