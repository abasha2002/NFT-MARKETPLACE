import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';

import spaceCraft from '../images/collection/space-craft.png';
import spaceCraftMobile from '../images/collection/space-craft-mobile.png';
import creator from '../images/collection/creator.svg';
import nftImages from '../images/nftImages/nftImages';
import sharedIcons from '../images/sharedIcons/sharedIcons';

function Collection() {
  return (
    <>
      <Header />
      <section className="collectionSection">
        <div>
          <img className='desktopPic w-100' src={spaceCraft} alt="space ship" />
        </div>

        <Container className='mt-4'>
          <Row className='align-items-center'>
            <Col md={6} xs={12}>
              <div>
                <h1 className="title">The Orbitians</h1>
                <h6>Minted On Sep 30, 2022</h6>
              </div>
              <div className='mt-4'>
                <h3>Created by</h3>
                <h5 className='d-flex align-items-center'>
                  <img className='me-2' src={creator} alt="robot" />
                  Orbitian
                </h5>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className='auction'>
                <p>Auction ends in:</p>
                <div className='d-flex justify-content-between mt-2 pe-2'>
                  <span>59</span>
                  <span>:</span>
                  <span>59</span>
                  <span>:</span>
                  <span>59</span>
                </div>
                <div className='d-flex justify-content-between mt-1'>
                  <p>Hours</p>
                  <p className='ps-3'>Minutes</p>
                  <p>Seconds</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button>Place Bid</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className='mt-5'>
            <Col xs={12} className='collDescription'>
              <div>
                <h3>Description</h3>
                <p>The Orbitians
                  is a collection of 10,000 unique NFTs on the Ethereum blockchain.

                  There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.

                  They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
              </div>

              <div className='mt-5'>
                <h3>Details</h3>
                <p><img className='me-2' src={sharedIcons.globe} alt="globe icon" />View on Etherscan</p>
                <p><img className='me-2' src={sharedIcons.globe} alt="globe icon" />View Original</p>
              </div>

              <div className='mt-5'>
                <h3>Tags</h3>
                <div className='d-flex align-items-center mt-2 buttons'>
                  <button><p>Animation</p></button>
                  <button><p>Illustration</p></button>
                  <button><p>Moon</p></button>
                  <button><p>Moon</p></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="collectionSection2 mt-5 mb-5">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="subTitle">More from this artist</h2>
            </Col>
          </Row>
          <Row>

            <Col lg={4} md={6} xs={12} className='mt-4'>
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.fox} alt="Fox" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Foxy Life</h3>
                    <h6><img className='me-2' src={creator} alt="Masked boy" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.cat} alt="Cat" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Cat from future</h3>
                    <h6><img className='me-2' src={creator} alt="Masked boy" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.doggo} alt="Dog" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Psycho Dog</h3>
                    <h6><img className='me-2' src={creator} alt="Masked boy" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.bear1} alt="Bear" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Designer Bear</h3>
                    <h6><img className='me-2' src={creator} alt="Masked boy" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.robot1} alt="Robot" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Dancing Robot 0375</h3>
                    <h6><img className='me-2' src={creator} alt="Robot" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.robot2} alt="Robot" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Dancing Robot 0356</h3>
                    <h6><img className='me-2' src={creator} alt="Robot" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.robot3} alt="Robot" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Dancing Robot 0321</h3>
                    <h6><img className='me-2' src={creator} alt="Robot" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.robot4} alt="Robot" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Dancing Robot 0512</h3>
                    <h6><img className='me-2' src={creator} alt="Robot" />Orbitian</h6>
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
              <div className='card'>
                <div className='cardIMG'>
                  <img className='w-100' src={nftImages.robot5} alt="Robot" />
                </div>
                <div className='cardDescription'>
                  <div>
                    <h3>Dancing Robot 0024</h3>
                    <h6><img className='me-2' src={creator} alt="Robot" />Orbitian</h6>
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
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Collection