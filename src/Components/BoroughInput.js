import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL.js';
import makePark from '../util/makePark.js';
import axios from 'axios';
import './BoroughInput.css'



export default function BoroughInput({ handleEmotionChange, setParks }) {
	const [borough, setBorough] = useState('R');
	const API = apiURL();
	const history = useHistory();

	const handleChange = (e) => {
		setBorough(e.target.value);
	};

	const getParks = async () => {
		const newParks = [];
		await axios
			.get(`${API}?borough=${borough}&$limit=5`)
			.then((res) => {
				console.log(res.data);
				res.data.forEach((park) => {
					newParks.push(makePark(park));
				});
			})
			.then((res) => history.push('/results'))
			.catch((c) => console.warn(`catch `, c));
		console.log('Using getParks');
		setParks(newParks);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getParks();
	};

	return (
		<div className="BoroughInput">
			<form onSubmit={handleSubmit}>
				<label htmlFor='borough-select'>Choose a Borough:</label>
				<select id='borough-select' onChange={handleChange}>
					<option value='R'>Staten Island</option>
					<option value='B'>Brooklyn</option>
					<option value='X'>Bronx</option>
					<option value='M'>Manhattan</option>
					<option value='Q'>Queens</option>
				</select>
				<br />
				<label htmlFor='emotion'>How are you currently feeling?</label>
				<select id='emotion' onChange={handleEmotionChange}>
					<option value='happy'>Sad</option>
					<option value='entertained'>Bored</option>
					<option value='content'>Frustrated</option>
					<option value='relaxed'>Tense</option>
					<option value='at_ease'>Annoyed</option>
					<option value='uplifted'>Depressed</option>
					<option value='calm'>Hyper</option>
				</select>
				<br />
				<input type='submit' value="Let's Go!" />
			</form>
		</div>
	);
}
