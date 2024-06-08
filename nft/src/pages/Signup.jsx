import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../style.css';


import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


import 'bootstrap/dist/css/bootstrap.min.css';

import AnotherPlanet from "../images/signup/another_planet.png";




function Signup() {

  const navigate = useNavigate();

  const createAccount = (e) =>{
    e.preventDefault();
    navigate('/Home');
  }

  return (
    <section className="account">
        <Container fluid className='cont'>
            <Row>
                <Col lg={6} md={12} className='account-page'>
                    <img className='w-100' src={AnotherPlanet} alt='Planet'/>
                </Col>
                <Col lg={6} md={12} className='d-flex align-items-center text-center auth'>
                    <div className='w-100'>
                        <div className="reg-title">
                            <h1>Create account</h1>
                            <p>Welcome! Enter your details and start<br className='break' /> creating, collecting and selling NFTs.</p>
                        </div>     
                        <Form onSubmit={createAccount}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control className='reg-input text' type="text" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='reg-input email' type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='reg-input pass' type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Control className='reg-input pass' type="password" placeholder="Confirm Password" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control className='reg-input submit' type="submit" value={"Create Account"} />
                            </Form.Group>
                        </Form>
                        <div className='foo'>
                            <span>Already have an account? <Link className='login' to="/login">Log in</Link></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Signup