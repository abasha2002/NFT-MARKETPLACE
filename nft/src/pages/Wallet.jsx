import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';

import image from '../images/wallet/SpaceShip1.png';
import metaMask from '../images/wallet/Metamask.svg';
import coinbase from '../images/wallet/Coinbase.svg';
import wallet from '../images/wallet/WalletConnect.svg';


function Wallet() {
  return (
    <>
			<Header />

			<section className='walletSection'>
				<Container fluid className=''>
					<Row className='position-relative'>
						<Col md={6} xs={12} className='image p-0 d-none d-md-block'>
							<img className='w-100' src={image} alt="image of a space ship"/>
						</Col>
						<Col md={6} xs={12} className='d-flex align-items-center content'>
							<div className='w-100 d-flex wallet'>
								<h1 className='title'>Connect wallet</h1>
								<p className="description">Choose a wallet you want to connect. There are several wallet providers.</p>
								<button>
									<img src={metaMask} alt="MetaMask logo" />
									<span>MetaMask</span>
								</button>
								<button>
									<img src={wallet} alt="WalletConnect logo" />
									<span>ConnectWallet</span>
								</button>
								<button>
									<img src={coinbase} alt="Coinbase logo" />
									<span>Coinbase</span>
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<Footer />
    </>
  )
}

export default Wallet