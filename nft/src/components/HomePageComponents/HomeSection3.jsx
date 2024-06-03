import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Rocket from '../../images/sharedIcons/RocketLaunch.svg';
import profilePics from '../../images/profilePics/profilePics';

function HomeSection3() {
  return (
    <section className="home-section3 homeSections">
      <Container>

        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h2 className='subTitle'>Trending Collection</h2>
            <h6 className='description'>Checkout our weekly updated trending collection.</h6>
          </div>
          <div className='rankingsDivD'>
            <button className='rankingButton'><img src={Rocket} alt="Rocket icon" /> View Rankings</button>
          </div>
        </div>

        <Row className='mt-4'>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative'>

              <div className='profileRankNumber position-absolute'>
                <span>1</span>
              </div>

              <div>
                <img src={profilePics.profile1} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Keepitreal</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative'>
              
              <div className='profileRankNumber position-absolute'>
                <span>2</span>
              </div>

              <div>
                <img src={profilePics.profile2} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>DigiLab</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative'>
              
              <div className='profileRankNumber position-absolute'>
                <span>3</span>
              </div>

              <div>
                <img src={profilePics.profile3} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>GravityOne</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative'>
              
              <div className='profileRankNumber position-absolute'>
                <span>4</span>
              </div>

              <div>
                <img src={profilePics.profile4} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Juanie</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>
          
          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative'>

              <div className='profileRankNumber position-absolute'>
                <span>5</span>
              </div>

              <div>
                <img src={profilePics.profile5} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>BlueWhale</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative'>
              
              <div className='profileRankNumber position-absolute'>
                <span>6</span>
              </div>

              <div>
                <img src={profilePics.profile6} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Mr Fox</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative desktopProfile'>
              
              <div className='profileRankNumber position-absolute'>
                <span>7</span>
              </div>

              <div>
                <img src={profilePics.profile7} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Shroomie</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative desktopProfile'>
              
              <div className='profileRankNumber position-absolute'>
                <span>8</span>
              </div>

              <div>
                <img src={profilePics.profile8} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Robotica</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative desktopProfile'>

              <div className='profileRankNumber position-absolute'>
                <span>9</span>
              </div>

              <div>
                <img src={profilePics.profile9} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>RustyRobot</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative desktopProfile'>
              
              <div className='profileRankNumber position-absolute'>
                <span>10</span>
              </div>

              <div>
                <img src={profilePics.profile10} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>AnimaKid</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative desktopProfile'>
              
              <div className='profileRankNumber position-absolute'>
                <span>11</span>
              </div>

              <div>
                <img src={profilePics.profile11} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Dotgu</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

          <Col xl={3} lg={4} md={6} xs={12}>
            <div className='userProfile position-relative desktopProfile'>
              
              <div className='profileRankNumber position-absolute'>
                <span>12</span>
              </div>

              <div>
                <img src={profilePics.profile12} alt="user profile picture" />
              </div>
              <div className='userProfileInfo'>
                <h5>Ghiblier</h5>
                <p><span className='me-2'>Total Sales:</span>34.53 ETH</p>
              </div>

            </div>
          </Col>

        </Row>

        <div className='rankingsDivM'>
            <button className='rankingButton'><img src={Rocket} alt="Rocket icon" /> View Rankings</button>
        </div>
      </Container>
    </section>
  )
}

export default HomeSection3