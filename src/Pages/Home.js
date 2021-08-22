import React from 'react';
import Image from '../img/nyc-park.jpeg'
import './Home.css'

export default function Home() {
	return (
		<div className="Home">
			<img src={Image} alt="" className="imgstyle"/>
			<div className="centered"><h1>Welcome To Urban Nature Time!</h1>
			<p>This is where the welcome messgae goes</p></div>
		</div>
	);
}
