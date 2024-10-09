import React from "react";
import logo from '../assets/images/Beezinfo.svg';
import login from '../assets/images/User-Logo.svg';
import { Navbar, Nav, Button, Container, Form, NavDropdown} from "react-bootstrap";

const BeezinfoNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src= {logo} // Replace with the actual logo path
            alt="Beezinfo Logo"
            width="40"
            height="40"
          />
          <span className="ml-2">Beezinfo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Find Business</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button variant="warning" className="ml-3">
            <NavDropdown title="LOG-IN" id="collapsible-nav-dropdown">
            <Button id="find-btns">
              <NavDropdown.Item href="#action/3.1">
          <img className="me-2 d-inline-block align-top"
            src= {login} // Replace with the actual logo path
            alt="LOG-IN"
            width="20"
            height="20"
          />
          <span className="ml-2">LOG-IN</span>
              </NavDropdown.Item>
              </Button>
              <NavDropdown.Divider />
              <Button id="list-btns">
              <NavDropdown.Item href="#action/3.4">
          <img className="me-2 d-inline-block align-top"
            src= {login} // Replace with the actual logo path
            alt="Register Now!"
            width="20"
            height="20"
          />
          <span className="ml-2">Register Now!</span>
              </NavDropdown.Item>
              </Button>
            </NavDropdown>
          </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BeezinfoNavbar;
