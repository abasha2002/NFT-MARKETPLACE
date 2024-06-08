import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

import nftImages from '../images/nftImages/nftImages';

function Marketplace() {
  return (
    <>
			<Header />
			<section className='marketSection'>
				<Container>

					<div className='search'>
						<h1>Browse Marketplace</h1>
						<p className='description'>Browse through more than 50k NFTs on the NFT Marketplace.</p>
						<input type="text" placeholder='Search your favourite NFTs' />
						
						<div className='mt-5'>
							<Row>
								<Col xs={6} className='d-flex gap-3 align-items-center justify-content-center info'>
									<h6>NFTs</h6>
									<div className='number'>
										<span>302</span>
									</div>
								</Col>
								<Col xs={6} className='d-flex gap-3 align-items-center justify-content-center info'>
									<h6>Collection</h6>
									<div className='number'>
										<span>67</span>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</Container>
			</section>

			<section className='marketSection2'>
				<Container>
					<Row>

						<Col lg={4} md={6} xs={12} className='mt-4'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.mushroom1} alt="Mushroom" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Life On Edena</h3>
										<h6><img className='me-2' src={nftImages.avatar1} alt="Boy" />Shroomie</h6>
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
									<img src={nftImages.smileyRobot} alt="Robot" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Happy Robot 032</h3>
										<h6><img className='me-2' src={nftImages.avatar2} alt="Robot" />BeKind2Robots</h6>
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
									<img src={nftImages.yelloRobot} alt="Robot" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Happy Robot 024</h3>
										<h6><img className='me-2' src={nftImages.avatar2} alt="Robot" />BeKind2Robots</h6>
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
									<img src={nftImages.bear1} alt="Bear with glasses" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Designer Bear</h3>
										<h6><img className='me-2' src={nftImages.avatar3} alt="Fox in a suit" />Mr Fox</h6>
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
									<img src={nftImages.colorfulDog1} alt="Colorful dog" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Colorful Dog 0356</h3>
										<h6><img className='me-2' src={nftImages.avatar4} alt="Girl" />Keepitreal</h6>
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
									<img src={nftImages.robot3} alt="Robot" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Dancing Robot 0312</h3>
										<h6><img className='me-2' src={nftImages.avatar5} alt="Robot" />Robotica</h6>
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

						<Col lg={4} md={6} xs={12} className='mt-4 desktopNFT'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.Cherry} alt="Girl" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Cherry Blossom 035</h3>
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

						<Col lg={4} md={6} xs={12} className='mt-4 desktopNFT'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.alines} alt="Space ship" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Space Travel</h3>
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

						<Col lg={4} md={6} xs={12} className='mt-4 desktopNFT'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.spaceTravel} alt="Space ship" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Sunset Dimension</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />Animakid</h6>
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

						<Col lg={4} md={6} xs={12} className='mt-4 desktopNFT'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.walk} alt="Zombie robot" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Desert Walk</h3>
										<h6><img className='me-2' src={nftImages.avatar9} alt="Astronaut" />Catch 22</h6>
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
						
						<Col lg={4} md={6} xs={12} className='mt-4 desktopNFT'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.monkey2} alt="Monkey" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Sunset Dimension</h3>
										<h6><img className='me-2' src={nftImages.avatar10} alt="Monkey" />Ice Ape Club</h6>
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

						<Col lg={4} md={6} xs={12} className='mt-4 desktopNFT'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.colorfulDog2} alt="Dog" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Sunset Dimension</h3>
										<h6><img className='me-2' src={nftImages.avatar11} alt="Dog" />PuppyPower</h6>
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
			<div className="marketLine"></div>
			<Footer />
    </>
  )
}

export default Marketplace;