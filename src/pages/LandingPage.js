import React, { Component } from 'react';
import Header from '../components/Header';
import MeetDoctors from '../components/MeetDoctors';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header></Header>
        <MeetDoctors></MeetDoctors>
      </div>
    )
  }
}
