import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <h1 className="title">
                Find good <span className="life">Life</span>
                <br />
                With good <span className="health">Health</span>
              </h1>
              <p className="punch">
                Book a video consultation, an appointment or get clinic details
                of notable and professional doctors in your area, specialist in
                <b className="text-primary">Gynae</b> and{" "}
                <b className="text-accent">Heart</b> related diseases
              </p>
              <Button as="a" href="#meet-doctors" variant="outline-primary">
                Meet Doctors
                <span className="material-symbols material-symbols-rounded">arrow_forward</span>
              </Button>
            </Col>
            <Col lg={7}>
              <img src="/images/Hero.png" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
