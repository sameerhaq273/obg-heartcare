import React, { Component } from 'react';
import Header from '../components/landingpage/Header';
import MeetDoctors from '../components/landingpage/doctors/MeetDoctors';
import Hero from '../components/landingpage/Hero';
import OladocBook from '../components/landingpage/OladocBook';
import ContactForm from '../components/landingpage/contactform/ContactForm';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header></Header>
        <Hero></Hero>
        <MeetDoctors></MeetDoctors>
        <OladocBook></OladocBook>
        <ContactForm></ContactForm>
      </div>
    )
  }
}
