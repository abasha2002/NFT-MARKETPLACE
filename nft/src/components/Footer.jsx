import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import sharedIcons from '../images/sharedIcons/sharedIcons';

function Footer() {
  return (
    <footer>
        <Container>
          <Row>

						<Col lg={4} xs={12}>

            	<div className='wrapper'>
						 		<h2><img className='me-2' src={sharedIcons.logo} alt="website logo" />
								NFT Marketplace</h2>

              	<h6>NFT Marketplace UI Created With Anima For Figma.</h6>
              	<p>Join our community:</p>

              	<div className='mediaLogos'>
              	  <Link to="#"><img src={sharedIcons.discord} alt="Discord icon" /></Link>
              	  <Link to="#"><img src={sharedIcons.youtube} alt="Youtube icon" /></Link>
              	  <Link to="#"><img src={sharedIcons.twitter} alt="Twitter icon" /></Link>
              	  <Link to="#"><img src={sharedIcons.instagram} alt="Instagram icon" /></Link>
              	</div>
							</div> 

            </Col>

            <Col lg={3} xs={12}>
							<div className="wrapper">
								<h2>Explore</h2>
								<Link to="#"><span>Marketplace</span></Link>
								<Link to="#"><span>Rankings</span></Link>
								<Link to="#"><span>Connect A Wallet</span></Link>
							</div>
						</Col>

            <Col lg={5} xs={12}>
							<div className="wrapper">
								<h2>Join Our Weekly Digest</h2>
								<span>Get Exclusive Promotions & Updates Straight To Your Inbox.</span>
								<div className='position-relative'>
									<input type="email" placeholder='Enter your email' />
									<button>Subscribe</button>
								</div>
							</div>
						</Col>

          </Row>

					<div className='line'></div>

					<div className='d-flex justify-content-center'>
						<span>Ⓒ NFT Market. Use this template freely.</span>
					</div>
      </Container>
    </footer>
  )
}

export default Footer