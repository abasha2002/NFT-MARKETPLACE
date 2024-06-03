import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import nftImages from '../../images/nftImages/nftImages';

function HomeSection2() {
  return (
    <section className="home-section2 homeSections">
      <Container>

        <div>
          <h2 className='subTitle'>Trending Collection</h2>
          <h6 className='description'>Checkout our weekly updated trending collection.</h6>
        </div>

        <Row className='mt-5'>

          <Col lg={4} md={12} className='pe-4 ps-4'>
            <Row>
              <Col xs={12} className='mb-3'>
                <div className='position-relative profile'>
                  <div className='position-absolute profileCheck'>
                  </div>
                  <Link to='/artist'>
                    <button className='seeMore'>
                      <h3>See more</h3>
                    </button>
                  </Link>
                  <img className='images' src={nftImages.dog} alt="Image of a dog" />
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <img className='images' src={nftImages.cat} alt="Image of a cat" />
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <img className='images' src={nftImages.bear} alt="Image of a bear" />
                </div>
              </Col>
              <Col xs={4}>
                <div className='number'>
                  <span>1025+</span>
                </div>
              </Col>
            </Row>
            <div>
              <h5>DSGN Animals</h5>
              <p className='creator'><img className='me-2' src={nftImages.avatar3} alt="Image of a fox" /> MrFox</p>
            </div>
          </Col>

          <Col lg={4} md={12} className='pe-4 ps-4 secondaryImage'>
            <Row>
              <Col xs={12} className='mb-3'>
                <div className='position-relative profile'>
                  <div className='position-absolute profileCheck'>
                  </div>
                  <Link to='/artist'>
                    <button className='seeMore'>
                      <h3>See more</h3>
                    </button>
                  </Link>
                  <img className='images' src={nftImages.mainMushroom} alt="Image of a mushroom" />
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <img className='images' src={nftImages.secondaryMushroom1} alt="Image of a mushroom" />
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <img className='images' src={nftImages.secondaryMushroom2} alt="Image of a mushroom" />
                </div>
              </Col>
              <Col xs={4}>
                <div className='number'>
                  <span>1025+</span>
                </div>
              </Col>
            </Row>
            <div>
              <h5>DSGN Animals</h5>
              <p className='creator'><img className='me-2' src={nftImages.avatar1} alt="Image of a human" /> Shroomie</p>
            </div>
          </Col>

          <Col lg={4} md={12} className='pe-4 ps-4 secondaryImage'>
            <Row>
              <Col xs={12} className='mb-3'>
                <div className='position-relative profile'>
                  <div className='position-absolute profileCheck'>
                  </div>
                  <Link to='/artist'>
                    <button className='seeMore'>
                      <h3>See more</h3>
                    </button>
                  </Link>
                  <img className='images' src={nftImages.mainRobot} alt="Image of a robot" />
                </div>  
              </Col>
              <Col xs={4}>
                <div>
                  <img className='images' src={nftImages.secondaryRobot1} alt="Image of a robot" />
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <img className='images' src={nftImages.secondaryRobot2} alt="Image of a robot" />
                </div>
              </Col>
              <Col xs={4}>
                <div className='number'>
                  <span>1025+</span>
                </div>
              </Col>
            </Row>
            <div>
              <h5>DSGN Animals</h5>
              <p className='creator'><img className='me-2' src={nftImages.avatar2} alt="Image of a robot" /> BeKind2Robots</p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default HomeSection2