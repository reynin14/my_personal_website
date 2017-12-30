import React, { Component } from 'react';
import './App.css';
import BioContainer from './components/bio/BioContainer'
import ExperienceContainer from './components/experience/ExperienceContainer'
import ContactContainer from './components/contact/ContactContainer'



class App extends Component {

  render() {
    return (
      <div>
        <BioContainer />
        <ExperienceContainer />
        <ContactContainer />
      </div>
    );
  }
}

export default App;
