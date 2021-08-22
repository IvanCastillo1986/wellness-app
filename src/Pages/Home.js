import React from 'react';
import Image from '../img/nyc-park.jpeg'
import './Home.css'

export default function Home() {
	return (
		<div className="Home">
			<img src={Image} alt="" className="imgstyle"/>
			<div className="centered"><h1>Welcome To Park Place!</h1>
			<p>Tying mental health with physical surroundings</p></div>
		</div>
	);
}
