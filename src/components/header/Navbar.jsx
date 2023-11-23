
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavigationBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='fs-2 fw-bold cs-color main-color' href="#home">RET-BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5 cs-link-hover text-dark">
            <Nav.Link className='px-3 text-dark' href="/home">Home</Nav.Link>
            <Nav.Link  className='px-3 text-dark' href="#link">Topics</Nav.Link> 
            <Nav.Link className='px-3 text-dark' href="#link">Regions</Nav.Link> 
            <Nav.Link className='px-3 text-dark' href="#link">Authors</Nav.Link> 
            <Nav.Link className='px-3 text-dark' href="#link">Charts of the Week</Nav.Link> 
            <Nav.Link className='px-3 text-dark' href="#link">Archives</Nav.Link> 
          </Nav>
          <Form  className='ms-auto' >
            <Row>
             <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavigationBar;