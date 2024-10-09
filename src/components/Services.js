import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Importing the actual images
import consultancyIcon from '../assets/images/Consultancy.jpg';
import restaurantIcon from '../assets/images/Restaurant.jpg';
import mallIcon from '../assets/images/Mall.jpg';
import cafeIcon from '../assets/images/Cafe.jpg';
import hotelIcon from '../assets/images/Hotel.jpg';
import salonIcon from '../assets/images/Salon.jpg';
import softwareIcon from '../assets/images/Software.jpg';
import realEstateIcon from '../assets/images/RealEstate.jpg';
import othersIcon from '../assets/images/Others.jpg';

// Updating the services array with imported images
const services = [
  { title: 'Consultancy', icon: consultancyIcon },
  { title: 'Restaurant', icon: restaurantIcon },
  { title: 'Mall', icon: mallIcon },
  { title: 'Cafe', icon: cafeIcon },
  { title: 'Hotel', icon: hotelIcon },
  { title: 'Salon', icon: salonIcon },
  { title: 'Software', icon: softwareIcon },
  { title: 'Real Estate', icon: realEstateIcon },
  { title: 'Others', icon: othersIcon }
];

const Services = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        {services.map((service, index) => (
          <Col xs={6} md={3} key={index} className="my-2">
            <Card className="h-100">
              <Card.Body>
                <img src={service.icon} alt={service.title} className="img-fluid mb-2" />
                <h6>{service.title}</h6>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
