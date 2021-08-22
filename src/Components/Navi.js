import React from 'react';
import Image from '../img/newtree.png'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navi() {
	return (
		<Navbar as='div' expand='md'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<img src={Image} alt="" height="40" width="40" />
					Urban Nature Time</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Item>
							<Nav.Link as={Link} to='/'>Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to='/borough'>Borough</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}