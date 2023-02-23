import React, { Component } from 'react';
import Header from '../components/Header';
import MeetDoctors from '../components/MeetDoctors';
import Hero from '../components/Hero';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header></Header>
        <Hero></Hero>
        <MeetDoctors></MeetDoctors>
      </div>
    )
  }
}
