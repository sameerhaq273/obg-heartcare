import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default class MeetDoctors extends Component {
  render() {
    return (
      <section>
        <Container>
          <div className="text-center">
            <h2 className="section-hd">Meet the Doctors</h2>
            <p>
              Specialized doctors who take care of you, not as a patient, but as
              a friend.
            </p>
          </div>
          <Nav variant="pills" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <span className="material-symbols material-symbols-rounded">
                  monitor_heart
                </span>
                Dr. Naeem Hameed
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <span className="material-symbols material-symbols-rounded">
                  female
                </span>
                Dr. Sidra Mushtaq
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </section>
    );
  }
}
