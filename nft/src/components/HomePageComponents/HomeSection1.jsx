import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import gifImage from '../../images/home/HomeSection1/gifImage.gif';
import RocketIcon from '../../images/sharedIcons/RocketLaunch.svg';

function HomeSection1() {
  return (
    <section className="home-section1 mt-5">
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <h1>Discover digital art & Collect NFTs</h1>
            <p className='mt-4'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <img className='gif mobileGif' src={gifImage} alt="Users profile animated" />
            <button className="getStartedButton d-flex align-items-center"><img src={RocketIcon} className='me-3' alt="Rocket icon" />Get Started</button>
            <div className="followers mt-4 d-flex">
              <div>
                <h4>240K+</h4>
                <p>Total Sale</p>
              </div>
              <div>
                <h4>100K+</h4>
                <p>Auctions</p>
              </div>
              <div>
                <h4>240K+</h4>
                <p>Artists</p>
              </div>
            </div>
          </Col>
          <Col lg={1} md={12}></Col>
          <Col lg={6} className='desktopGif'>
            <img className='gif' src={gifImage} alt="Users profile animated" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeSection1
