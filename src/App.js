import React, { Component } from 'react';
import './App.css';
import BioContainer from './components/bio/BioContainer'
import ExperienceContainer from './components/experience/ExperienceContainer'



class App extends Component {
  render() {
    return (
      <div>
        <BioContainer />
        <ExperienceContainer />
      </div>
    );
  }
}

export default App;
