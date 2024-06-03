import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import section4Images from '../../images/home/HomeSection4/images4';

function HomeSection4() {
  return (
    <section className="home-section4 homeSections">

        <Container>
          <div>
            <h2 className='subTitle'>Browse Categories</h2>
          </div>

          <Row className='mt-4'>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.whale} alt="image of a painted whales"/>
                  <img className='categoryIcons' src={section4Images.paintBrush} alt="icon of a paint brush" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Art</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.monkey} alt="image of a pained monkey"/>
                  <img className='categoryIcons' src={section4Images.Pcard} alt="icon of a portable card" />
                </div>
                <div className='categoryCardDescription'>
                  <p>colectibles</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.guitar} alt="image of a pained guitar"/>
                  <img className='categoryIcons' src={section4Images.musicNote} alt="icon of a music note" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Music</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.oldMan} alt="image of a pained old man"/>
                  <img className='categoryIcons' src={section4Images.Camera} alt="icon of a camera" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Photography</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.sky} alt="image of a pained sky"/>
                  <img className='categoryIcons' src={section4Images.Video} alt="icon of a video camera" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Video</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.strangeKey} alt="image of a pained key"/>
                  <img className='categoryIcons' src={section4Images.magicWand} alt="icon of a magic wand" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Utility</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.ball} alt="image of a pained ball"/>
                  <img className='categoryIcons' src={section4Images.basketball} alt="icon of a basketball" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Sport</p>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={4} xs={6} className='mt-4'>
              <div className='categoryCard'>
                <div className='position-relative categoryCardImage'>
                  <img className='categoryBackImages' src={section4Images.spaceCity} alt="image of a painted space city"/>
                  <img className='categoryIcons' src={section4Images.planet} alt="icon of a planet" />
                </div>
                <div className='categoryCardDescription'>
                  <p>Virtual Worlds</p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
    </section>
  )
}

export default HomeSection4