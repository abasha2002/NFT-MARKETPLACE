import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import sharedIcons from '../images/sharedIcons/sharedIcons';

function Header() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className='align-items-center header'>
      <Container>
        <Navbar.Brand href='/home' className="align-items-center d-flex nav-brand">
            <img className="me-2" src={sharedIcons.logo} alt="Storefront- website icon" />
            NFT Marketplace
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"> 
					<img src={sharedIcons.burgerMenu} alt="Burger menu icon" />
				</Navbar.Toggle> 

        <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto header-links">
							<Link className='nav-links' to='/marketplace' >Marketplace</Link>
							<Link className='nav-links' to='/rankings' >Ranking</Link>
							<Link className='nav-links' to='/wallet' >Connect a Wallet</Link>
              <div className='headerLine'></div>
							<Link className='nav-links' to='/login' >Log Out</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header