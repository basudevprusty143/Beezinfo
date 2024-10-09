import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import your actual images here
import listingIcon1 from '../assets/images/New-CA-logo.jpg';
import listingIcon2 from '../assets/images/Beezinfo-Group.jpg';
// You can add more image imports as needed

// Example data for listings
const listings = [
  {
    title: 'R Dash & Associates',
    location: 'Bhubaneswar, Odisha',
    reviews: '0.0',
    image: listingIcon1, // Replace with actual path to image
  },
  {
    title: 'Ansur IT And Consulting',
    location: 'Hyderabad, Telangana',
    reviews: '0.0',
    image: listingIcon2, // Replace with actual path to image
  },
  // Add more listings
];

const Listings = () => {
  return (
    <Container>
        <p className='paragrap'>
        Discover our latest listing around the country
        </p>
      <h2 className="text-center my-4">New Listings in Our Directory</h2>
      <Row>
        {listings.map((listing, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <img src={listing.image} alt={listing.title} className="img-fluid mb-2" />
                <h5>{listing.title}</h5>
                <p>{listing.location}</p>
                <p>{listing.reviews} reviews</p>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listings;
