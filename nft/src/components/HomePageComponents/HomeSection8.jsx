import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import astronaut from '../../images/home/HomeSection8/astronaut_reading.png';
import envelope from  '../../images/sharedIcons/whiteEnvelope.svg';

function HomeSection8() {
  return (
    <section className='home-section8 homeSections'>
      <Container className='wrapper'>
        <Row>
					<Col md={5} xs={12}>
						<img className='astronaut' src={astronaut} alt="image of an astronaut reading newspaper" />
					</Col>
					<Col md={7} xs={12}>
						<div className='content'>
							<h2>Join Our Weekly Digest</h2>
							<p>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
							<div className='position-relative'>
								<input type="email" placeholder='Enter your email' />
								<button>
									<img className='me-2' src={envelope} alt="icon of an envelope" />
									<span>Subscribe</span>
								</button>
							</div>
						</div>
					</Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeSection8