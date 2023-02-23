import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const MeetDoctors = () => {
  return (
    <section>
      <Container>
        <div className="text-center">
          <h2 className="section-hd">Meet the Doctors</h2>
          <p>
            Specialized doctors who take care of you, not as a patient, but as a
            friend.
          </p>
        </div>
        <Tabs defaultActiveKey="Naeem Hameed">
          {ProfileCard.map((text, index) => (
            <Tab key={text.id} eventKey={text.name} title={'Dr. ' + text.name}>
              <div className="info-box">
                <div className="profile-card">
                  <img src="" alt="" />
                  <div>
                    <h5 className="name">Dr. {text.name}</h5>
                    <p className="designation">{text.designation}</p>
                    <p className="institute">{text.institue}</p>
                    <div className="d-flex align-items-center">
                      <a
                        href={text.phoneLink}
                        className="phone text-decoration-none"
                      >
                        <span className="material-symbols material-symbols-rounded">
                          call
                        </span>
                        {text.phone}
                      </a>
                      <a href={'mailto:' + text.email} className="phone text-decoration-none">
                        <span className="material-symbols material-symbols-rounded">
                          mail
                        </span>
                        {text.email}
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="clinicinfo-hd">Clinic Information</h4>
                <ol type="1">
                  {text.clinics.map((text2, index) => (
                    <li>
                      <div className="clinic-box">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="clinic-name">{text2.name}</h5>
                          <Button as="a" href={text2.direction} target="_blank" variant="outline-accent">
                            Get Directions
                            <span className="material-symbols material-symbols-rounded">arrow_forward</span>
                            </Button>
                        </div>
                        <Table>
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
                </ol>
              </div>
            </Tab>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};
export default MeetDoctors;
