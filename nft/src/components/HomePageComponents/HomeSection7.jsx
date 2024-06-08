import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import workFiles from '../../images/home/HomeSection7/files.png';
import musicFiles from '../../images/home/HomeSection7/music_files.png';
import marketFiles from '../../images/home/HomeSection7/market_files.png';

function HomeSection7() {
  return (
    <section className='home-section7 homeSections'>
      <Container>
        <div>
          <div>
            <h2 className='subTitle'>How It Works</h2>
            <h6 className='description'>Find Out How To Get Started</h6>
          </div>
        </div>
        <Row className='mt-4'>

        	<Col lg={4} md={6} xs={12} className='mt-4'>
						<div className='cards'>
							<img src={workFiles} alt="Work files" />
							<div>
								<h3>Setup Your Wallet</h3>
								<p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
							</div>
						</div>
					</Col>

					<Col lg={4} md={6} xs={12} className='mt-4'>
						<div className='cards'>
							<img src={musicFiles} alt="Music files" />
							<div>
								<h3>Create Collection</h3>
								<p>Upload your work and setup your collection. Add a description, social links and floor price.</p>
							</div>
						</div>
					</Col>

					<Col lg={4} md={6} xs={12} className='mt-4'>
						<div className='cards'>
							<img src={marketFiles} alt="Market files" />
							<div>
								<h3>Start Earning</h3>
								<p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
							</div>
						</div>
					</Col>

        </Row>
      </Container>
    </section>
  )
}

export default HomeSection7