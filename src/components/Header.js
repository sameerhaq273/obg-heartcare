import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand className="text-uppercase fw-bold text-white" href="#home">Obg<br/>Heartcare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <Nav.Link href="#home" variant="primary" Component={Button}>Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                <Button as="a" variant="outline-primary" className="mx-2">
                  Book Appointment
                  <span className="material-symbols material-symbols-rounded">arrow_forward</span>
                </Button>
                <Button as="a" variant="primary" className="mx-2">
                  <span className="material-symbols material-symbols-rounded">video_call</span>
                  Video Consultation
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
