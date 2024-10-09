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

// Updating the services array with imported images and links
const services = [
  { title: 'Consultancy', icon: consultancyIcon, link: '/consultancy' },
  { title: 'Restaurant', icon: restaurantIcon, link: '/restaurant' },
  { title: 'Mall', icon: mallIcon, link: '/mall' },
  { title: 'Cafe', icon: cafeIcon, link: '/cafe' },
  { title: 'Hotel', icon: hotelIcon, link: '/hotel' },
  { title: 'Salon', icon: salonIcon, link: '/salon' },
  { title: 'Software', icon: softwareIcon, link: '/software' },
  { title: 'Real Estate', icon: realEstateIcon, link: '/real-estate' },
  { title: 'Others', icon: othersIcon, link: '/others' }
];

const Services = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        {services.map((service, index) => (
          <Col 
            key={index} 
            xs={4} sm={4} md={4} lg={1}  // Full width on xs, 2 cards per row on sm, 3 cards per row on md, and 3 cards per row on lg
            className="my-2"
          >
            <a href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="h-100 service-card">
                <Card.Body>
                  <img src={service.icon} alt={service.title} className="img-fluid mb-2" />
                  <h6>{service.title}</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
      <h2 className="hading2">Your business is already listed! Here's how to claim it.</h2>
      <p className="Paragrap1">Our team will verify and approve your claim. Once approved, the business will appear in your profile.</p>
    </Container>
  );
};

export default Services;

