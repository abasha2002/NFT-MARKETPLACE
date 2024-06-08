import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import section5Images from '../../images/home/HomeSection5/images5';
import nftImages from '../../images/nftImages/nftImages';
import eye from '../../images/sharedIcons/Eye.svg';

function HomeSection5() {
  return (
    <section className="home-section5 homeSections">
      <Container>
        
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h2 className='subTitle'>Discover More NFTs</h2>
            <h6 className='description'>Explore new trending NFTs</h6>
          </div>
          <div className='rankingsDivD'>
            <button className='rankingButton'><img className='me-3' src={eye} alt="Eye icon" />See All</button>
          </div>
        </div>

        <Row className='mt-4'>

          <Col lg={4} md={6} xs={12} className='mt-4'>
            <div className='discoverCard'>
              <div className='discoverCardImg'>
                <img src={section5Images.spaceship} alt="Spaceship" />
              </div>
              <div className='discoverCardDescription'>
                <div>
                  <h3>Distant Galaxy</h3>
                  <h6><img className='me-2' src={nftImages.avatar6} alt="Girl" />MoonDancer</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <span>Price</span>
                    <p>1.63 ETH</p>
                  </div>
                  <div>
                    <span>Highest Bid</span>
                    <p>0.33 wETH</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} xs={12} className='mt-4'>
            <div className='discoverCard'>
              <div className='discoverCardImg'>
                <img src={section5Images.sky} alt="Sky" />
              </div>
              <div className='discoverCardDescription'>
                <div>
                  <h3>Life On Edena</h3>
                  <h6><img className='me-2' src={nftImages.avatar7} alt="Boy" />NebulaKid</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <span>Price</span>
                    <p>1.63 ETH</p>
                  </div>
                  <div>
                    <span>Highest Bid</span>
                    <p>0.33 wETH</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} xs={12} className='mt-4'>
            <div className='discoverCard'>
              <div className='discoverCardImg'>
                <img src={section5Images.astronaut} alt="Astronaut" />
              </div>
              <div className='discoverCardDescription'>
                <div>
                  <h3>AstroFiction</h3>
                  <h6><img className='me-2' src={nftImages.avatar4} alt="Girl" />Spaceone</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <span>Price</span>
                    <p>1.63 ETH</p>
                  </div>
                  <div>
                    <span>Highest Bid</span>
                    <p>0.33 wETH</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
        </Row>

        <div className='rankingsDivM'>
          <button className='rankingButton'><img className='me-3' src={eye} alt="Eye icon" />See All</button>
        </div>
      </Container>
    </section>
  )
}

export default HomeSection5