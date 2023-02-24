import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const OladocBook = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <h2 className="section-hd">
              Good Service and Better Health with Specialists
            </h2>
            <Button
              as="a"
              variant="primary"
              size="lg"
              className="rounded-pill"
              href="https://oladoc.com/pakistan/faisalabad/dr/cardiologist/naeem-hameed/428550"
            >
              Book Now on Oladoc
            </Button>
          </Col>
          <Col lg={5}>
            <img
              src="/images/expert-doctors.svg"
              className="img-fluid"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OladocBook;
