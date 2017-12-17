import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BioContainer from './components/bio/BioContainer'

class App extends Component {
  render() {
    return (
      <div>
        <BioContainer />
      </div>
    );
  }
}

export default App;
