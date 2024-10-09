import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import your actual images here
import registerIcon from '../assets/images/Register&Login.svg';
import searchIcon from '../assets/images/search.svg';
import claimIcon from '../assets/images/claim.svg';

const ActionButtons = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col xs={12} md={4}>
          <Card className="text-center">
            <Card.Body>
              <img src={registerIcon} alt="Register & Login" className="img-fluid mb-2" />
              <h5>Register & Login</h5>
              <p>Register & login your profile easily.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center">
            <Card.Body>
              <img src={searchIcon} alt="Search" className="img-fluid mb-2" />
              <h5>Search</h5>
              <p>Search your business to claim it.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center">
            <Card.Body>
              <img src={claimIcon} alt="Claim" className="img-fluid mb-2" />
              <h5>Claim</h5>
              <p>Claim with documents uploading.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ActionButtons;
