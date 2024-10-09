import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import eCardBusiness from '../assets/images/e-card-Business.jpg';
import digitalMarketing from '../assets/images/Digital-Marketing.jpg';
import boostOnlineBusiness from '../assets/images/Boost-Online-Business.jpg';


const Hero = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
        <h1 className="hero-title">Discover and Connect</h1>
          <p>With Top-Rated Local Businesses Near You!</p>
          <Button id="find-btn">Find Business</Button>
          <Button id="list-btn">List Business</Button>
        </Col>
        <Col>
          <Carousel controls={true} indicators={true} interval={3000} pause="hover" className="mt-4">
            {/* First Image */}
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={eCardBusiness}
                alt="E-Card Business"
              />
            </Carousel.Item>

            {/* Second Image */}
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={digitalMarketing}
                alt="Digital Marketing"
              />
            </Carousel.Item>

            {/* Third Image */}
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={boostOnlineBusiness}
                alt="Boost Online Business"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
