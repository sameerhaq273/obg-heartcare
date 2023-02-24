import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Problems from "./Problems";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section>
      <Container>
        <div className="text-center">
          <h2 className="section-hd">Book Your Appointment Now</h2>
          <p>
            Send us an email to book your appointment. We'll respond you with
            confirmation email when available.
          </p>
        </div>
        <Form
          className="contact-form needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="gy-md-5 gy-4">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name here"
                  required
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
                <Form.Control.Feedback type="invalid">
                  We will remember you with your name 😊
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="problem">
                <Form.Label>Problem Related to*</Form.Label>
                <Form.Select required>
                  <option value="" disabled selected>
                    --Select--
                  </option>
                  {Problems.map((text, index) => (
                    <option value={text.value}>{text.label}</option>
                  ))}
                  ;
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  We will assign right doctor to you with this 🧑‍⚕️👩‍⚕️
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email (optional)</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="someone@mail.com"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone*</Form.Label>
                <Form.Control type="tel" placeholder="03001234567" required />
                <Form.Text className="text-muted">
                  We'll never share your phone with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Your phone number will help us contact you 🤙
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date of Booking</Form.Label>
                <Form.Control type="date" required />
                <Form.Control.Feedback type="invalid">
                  Please choose a date of booking 📅
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} className="text-end">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="rounded-pill"
              >
                Send
                <span className="material-symbols material-symbols-rounded">
                  send
                </span>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default ContactForm;
