import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <section>
        <Container>
          <Row className="gy-4">
            <Col lg={5}>
              <h2 className="section-hd">About us</h2>
              <p className="mb-0">
                We are highly qualified doctors specialized in our fields
                providing best services and getting positive feedback from
                patients in the city.
              </p>
            </Col>
            <Col lg={3}>
              <h2 className="section-hd">Doctors</h2>
              <ul className="ps-0 mb-0 list-unstyled">
                <li>
                  <a href="" className="text-white">
                    Dr. Naeem Hameed
                  </a>
                </li>
                <li>
                  <a href="" className="text-white">
                    Dr. Sidra Mushtaq
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h2 className="section-hd">Social Media</h2>
              <div className="d-flex gap-3 mb-2">
                <a href="">
                  <img src="/images/facebook.svg" className="img-fluid" alt="" />
                </a>
                <a href="">
                  <img src="/images/instagram.svg" className="img-fluid" alt="" />
                </a>
              </div>
              <p className="mb-0 fw-lighter">
                Copyright @ 2023 Saee, All Right Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
