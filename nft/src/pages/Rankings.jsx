import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';
import profilePics from '../images/profilePics/profilePics';

function Rankings() {
  return (
    <>
			<Header />

			<section className='rankingSection'>
				<Container>
					<div>
						<h1 className='title'>Top Creators</h1>
						<p className="description">Checkout Top Rated Creators On The NFT Marketplace</p>
					</div>

					<Row className='mt-5 options'>
						<Col xs={3} className='time d-flex justify-content-center align-items-center'>
							<h6 className='desktopTime'>Today</h6>
							<h6 className='mobileTime'>1d</h6>
						</Col>

						<Col xs={3} className='time d-flex justify-content-center align-items-center'>
							<h6 className='desktopTime'>This week</h6>
							<h6 className='mobileTime'>7d</h6>
						</Col>

						<Col xs={3} className='time d-flex justify-content-center align-items-center'>
							<h6 className='desktopTime'>This month</h6>
							<h6 className='mobileTime'>30d</h6>
						</Col>

						<Col xs={3} className='time d-flex justify-content-center align-items-center'>
							<h6>All time</h6>
						</Col>
					</Row>


					<Row className='mt-5 mb-5'>

						<Col xs={12} className='profileBoard'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3'>
									<span className='numberTag'>#</span>
									<span>Artist</span>
								</Col>
								<Col md={2} className="d-none d-md-block">
									<span>change</span>
								</Col>
								<Col md={2} className="d-none d-md-block">
									<span>NFTs Sold</span>
								</Col>
								<Col md={2} xs={4}>
									<span>Volume</span>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>1</span>
									</div>
									<img src={profilePics.profile1} alt="profile picture of a girl" />
									<h3>Jaydon Bothman</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>2</span>
									</div>
									<img src={profilePics.profile2} alt="profile picture of a boy" />
									<h3>Ruben Carder</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>3</span>
									</div>
									<img src={profilePics.profile3} alt="profile picture of a girl" />
									<h3>Alfredo Septimus</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>4</span>
									</div>
									<img src={profilePics.profile4} alt="profile picture of a girl" />
									<h3>Davis Franci</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>5</span>
									</div>
									<img src={profilePics.profile5} alt="profile picture of a robot" />
									<h3>Livia Rosser</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>6</span>
									</div>
									<img src={profilePics.profile6} alt="profile picture of a fox" />
									<h3>Kianna Donin</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>7</span>
									</div>
									<img src={profilePics.profile7} alt="profile picture of a boy" />
									<h3>Phillip Lipshutz</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>8</span>
									</div>
									<img src={profilePics.profile8} alt="profile picture of a robot" />
									<h3>Maria Rosser</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>9</span>
									</div>
									<img src={profilePics.profile9} alt="profile picture of a robot" />
									<h3>Kianna Stanton</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>10</span>
									</div>
									<img src={profilePics.profile13} alt="profile picture of a boy" />
									<h3>Angel Lubin</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>11</span>
									</div>
									<img src={profilePics.profile14} alt="profile picture of a robot" />
									<h3>Allison Torff</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>12</span>
									</div>
									<img src={profilePics.profile15} alt="profile picture of a robot" />
									<h3>Davis Workman</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>13</span>
									</div>
									<img src={profilePics.profile16} alt="profile picture of a dog" />
									<h3>Lindsey Lipshutz</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>14</span>
									</div>
									<img src={profilePics.profile10} alt="profile picture of a masked person" />
									<h3>Randy Carder</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>15</span>
									</div>
									<img src={profilePics.profile11} alt="profile picture of a girl" />
									<h3>Lydia Culhane</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>16</span>
									</div>
									<img src={profilePics.profile17} alt="profile picture of a girl" />
									<h3>Rayna Bator</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>17</span>
									</div>
									<img src={profilePics.profile12} alt="profile picture of a boy" />
									<h3>Jocelyn Westervelt</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>18</span>
									</div>
									<img src={profilePics.profile1} alt="profile picture of a girl" />
									<h3>Marilyn Torff</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>19</span>
									</div>
									<img src={profilePics.profile13} alt="profile picture of a boy" />
									<h3>Skylar Levin</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

						<Col xs={12} className='profile mt-4'>
							<Row>
								<Col md={6} xs={8} className='d-flex gap-3 align-items-center'>
									<div className='number'>
										<span>20</span>
									</div>
									<img src={profilePics.profile3} alt="profile picture of a girl" />
									<h3>Terry Dorwart</h3>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<p>+1.41%</p>
								</Col>
								<Col md={2} className="d-none d-md-flex align-items-center">
									<h5>602</h5>
								</Col>
								<Col md={2} xs={4} className='d-flex align-items-center'>
									<h5>12.4 ETH</h5>
								</Col>
							</Row>
						</Col>

					</Row>

				</Container>
			</section>

			<Footer />
    </>
  )
}

export default Rankings
