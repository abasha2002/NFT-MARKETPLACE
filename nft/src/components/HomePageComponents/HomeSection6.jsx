import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import profPic from '../../images/nftImages/profile1.png';
import Eye from '../../images/home/HomeSection6/Eye.svg';

function HomeSection6() {
	return (
		<section className="home-section6 homeSections">
			<div className="gradient"></div>

			<Container className='section6Content'>
				<Row>
					<Col lg={8} md={12}>
						<div>
							<div className='user'>
								<h4><img className='me-2' src={profPic} alt="Boy" /> Shroomie</h4>
							</div>
							<h3>Magic Mushrooms</h3>
							<button className='align-items-center desktopButton'>
								<img className='me-2' src={Eye} alt="Icon of an eye" />
								<span>See NFT</span>
							</button>
						</div>
					</Col>
					<Col className='d-flex justify-content-center' lg={4} md={12}>
						<div className='auction'>
							<p>Auction ends in:</p>
							<div className='d-flex justify-content-between mt-2 pe-2'>
								<h5>59</h5>
								<h6>:</h6>
								<h5>59</h5>
								<h6>:</h6>
								<h5>59</h5>
							</div>
							<div className='d-flex justify-content-between mt-1'>
								<p>Hours</p>
								<p className='ps-3'>Minutes</p>
								<p>Seconds</p>
							</div>
						</div>
					</Col>
				</Row>
				<button className='align-items-center mobileButton'>
					<img className='me-2' src={Eye} alt="icon of an eye" />
					<span>See NFT</span>
				</button>
			</Container>
		</section>
	)
}

export default HomeSection6