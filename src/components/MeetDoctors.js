import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const MeetDoctors = () => {
  return (
    <section id="meet-doctors">
      <Container>
        <div className="text-center">
          <h2 className="section-hd">Meet the Doctors</h2>
          <p className="mb-lg-5 mb-4">
            Specialized doctors who take care of you, not as a patient, but as a
            friend.
          </p>
        </div>
        <Tabs defaultActiveKey="Naeem Hameed" className="custom-tabs">
          {ProfileCard.map((text, index) => (
            <Tab key={text.id} eventKey={text.name} title={" Dr. " + text.name}>
              <div className={"info-box " + text.color}>
                <div className="profile-card">
                  <img src={text.imagesrc} alt="Doctor Image" />
                  <div>
                    <h5 className="name">Dr. {text.name}</h5>
                    <p className="designation">{text.designation}</p>
                    <p className="institute">{text.institue}</p>
                    <div className="contact-card">
                      <a
                        href={text.phoneLink}
                        className="phone text-decoration-none"
                      >
                        <span className="material-symbols material-symbols-rounded">
                          call
                        </span>
                        {text.phone}
                      </a>
                      <a
                        href={"mailto:" + text.email}
                        className="phone text-decoration-none"
                      >
                        <span className="material-symbols material-symbols-rounded">
                          mail
                        </span>
                        {text.email}
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="clinicinfo-hd">Clinic Information</h4>
                <ul className="list-unstyled ps-0 mb-0">
                  {text.clinics.map((text2, index) => (
                    <li>
                      <div className="clinic-box">
                        <div className="name-direction">
                          <h5 className={"clinic-name text-" + text.color}>
                            {text2.id + 1 + ". " + text2.name}
                          </h5>
                          <Button
                            as="a"
                            href={text2.direction}
                            target="_blank"
                            variant={"outline-" + text.color}
                          >
                            Get Directions
                            <span className="material-symbols material-symbols-rounded">
                              arrow_forward
                            </span>
                          </Button>
                        </div>
                        <Table className="mb-0">
                          <tr>
                            <th>
                              <span className="material-symbols material-symbols-rounded">
                                payments
                              </span>
                              Fee
                            </th>
                            <td>{text2.fee}</td>
                          </tr>
                          <tr>
                            <th>
                              <span className="material-symbols material-symbols-rounded">
                                schedule
                              </span>
                              Timings
                            </th>
                            <td>
                              {text2.day}
                              <br />
                              {text2.time}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span className="material-symbols material-symbols-rounded">
                                location_on
                              </span>
                              Location
                            </th>
                            <td>{text2.location}</td>
                          </tr>
                        </Table>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="note">
                  <b>Note: </b>
                  Video consultation is also available. Please leave a message
                  or send an email for video consultation.
                </p>
                <Alert variant={text.color}>
                  <Alert.Link href={text.oladoc} target="_blank" className="fw-normal text-decoration-none">
                    <span className="material-symbols material-symbols-rounded">redeem</span>
                    Book an appointment using oladoc and get up-to 50% discount.
                    Click here.
                  </Alert.Link>
                </Alert>
              </div>
            </Tab>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};
export default MeetDoctors;
