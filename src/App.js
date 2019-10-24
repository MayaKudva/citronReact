import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar.js';
import './css/style.css';
import Searchengine from './components/Searchengine1';
import Middlebanner from './components/Middlebanner';
import Holidayslides from './components/holidayslides';
import Activityslides from './components/Activityslides';
import Contactbanner from './components/contactbanner';
import  Footer from  './components/Footersection';




class App extends Component {
  render() {
    return (
      <div className="App container-fluid" style={{ padding: "0" }}>
        <Navbar />
        <Searchengine />
        <Middlebanner />
        <Holidayslides />
        <Activityslides/>
        <Contactbanner/>
        <Footer/>
      </div>
    );
  }
}

export default App;
