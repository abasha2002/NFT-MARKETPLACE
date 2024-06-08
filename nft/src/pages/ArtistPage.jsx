import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';

import pagePic from '../images/artist/pagePic.png';
import pagePicM from '../images/artist/pagePicM.png';
import profilePic from '../images/artist/ProfilePicture.png';

import sharedIcons from '../images/sharedIcons/sharedIcons';
import nftImages from '../images/nftImages/nftImages';

function ArtistPage() {
	return (
		<>
			<Header />

			<section className='artistSection'>
				<div className='position-relative'>
					<img className='desktopPic' src={pagePic} alt="building" />
					<img className='mobilePic' src={pagePicM} alt="building" />
				</div>
				<Container className='position-relative'>
					<Row>
						<Col md={7} xs={12}>
							<img className='position-absolute profile-pic' src={profilePic} alt="profile" />

							<div className='profile-info'>
								<h1 className="title">AnimaKid</h1>

								<div className="buttons mobileButtons">
									<button>
										<img className='me-2' src={sharedIcons.copy} alt="icons for copying button content" />
										0xc0E3...B79C
									</button>
									<button>+ Follow</button>
								</div>

								<div className='d-flex gap-5 personal-info'>
									<div>
										<h6>250K+</h6>
										<p>Volume</p>
									</div>

									<div>
										<h6>50+</h6>
										<p className='soldNFT'>NFTs Sold</p>
									</div>

									<div>
										<h6>3000+</h6>
										<p>Followers</p>
									</div>
								</div>
							</div>

							<div className='mt-5'>
								<span>Bio</span>
								<p>The Internet's Friendliest Designer Kid.</p>
							</div>

							<div className="links mt-5">
								<span>Links</span>
								<div className='d-flex mt-2 gap-3 align-items-center'>
									<img src={sharedIcons.globe} alt="Globe logo" />
									<img src={sharedIcons.discord} alt="Discord logo" />
									<img src={sharedIcons.youtube} alt="Youtube logo" />
									<img src={sharedIcons.twitter} alt="Twitter logo" />
									<img src={sharedIcons.instagram} alt="Instagram logo" />
								</div>
							</div>
						</Col>
						<Col md={5} className='d-none d-md-block'>
							<div className='buttons d-flex gap-3 desktopButtons'>
								<button>
									<img className='me-2' src={sharedIcons.copy} alt="icons for copying button content" />
									0xc0E3...B79C
								</button>
								<button>+ Follow</button>
							</div>
						</Col>
					</Row>
				</Container>

				<div className="line"></div>

				<Container>
					<Row>
						<Col xs={4} className='d-flex justify-content-center gap-3 align-items-center achievements'>
							<span>Created</span>
							<div className="number">302</div>
						</Col>
						<Col xs={4} className='d-flex justify-content-center gap-3 align-items-center achievements'>
							<span>Owned</span>
							<div className="number">67</div>
						</Col>
						<Col xs={4} className='d-flex justify-content-center gap-3 align-items-center achievements'>
							<span>Collection</span>
							<div className="number">4</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='artistSection2'>
				<Container className='pb-5'>
					<Row>

						<Col lg={4} md={6} xs={12} className='mt-4'>
							<div className='card'>
								<div className='cardIMG'>
									<img src={nftImages.spaceShip} alt="A spaceship" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Distant Galaxy</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
									<img src={nftImages.sky} alt="Sky" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Life On Edena</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
									<img src={nftImages.astronaut} alt="Astronaut" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>AstroFiction</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
									<img src={nftImages.cryptoCity} alt="Space city" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>CryptoCity</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
									<img src={nftImages.colorfulDog1} alt="Dog" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>ColorfulDog 0524</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
									<img src={nftImages.space} alt="Outer space" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Space Tales</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Maksed boy" />AnimaKid</h6>
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
									<img src={nftImages.Cherry} alt="Girl" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>Cherry Blossom Girl 037</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
										<h3>Dancing Robots 0987</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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
									<img src={nftImages.monkey2} alt="Monkey" />
								</div>
								<div className='cardDescription'>
									<div>
										<h3>IceCream Ape</h3>
										<h6><img className='me-2' src={nftImages.avatar8} alt="Masked boy" />AnimaKid</h6>
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

				<div className="line2"></div>
			</section>

			<Footer />
		</>
	)
}

export default ArtistPage