import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';

import pagePic from '../images/artist/pagePic.png';
import pagePicM from '../images/artist/pagePicM.png';
import profilePic from '../images/artist/ProfilePicture.png';

function ArtistPage() {
  return (
    <>
			<Header />

			<section className='artistSection'>
				<div className='position-relative'>
					<img className='desktopPic' src={pagePic} alt="image of a building" />
					<img className='mobilePic' src={pagePicM} alt="image of a building" />
					{/* <img className='userProfile' src={profilePic} alt="user profile pic of a masked person" /> */}
				</div>
				<Container>
					<Row>
						<Col md={8} xs={12}></Col>
						<Col md={4} className='d-none d-md-block'></Col>
					</Row>
				</Container>
			</section>

			<Footer />
    </>
  )
}

export default ArtistPage