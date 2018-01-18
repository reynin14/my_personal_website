import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";

import ParallaxContainer from './components/parallax/ParallaxContainer'
import ParallaxContainerContact from './components/parallax/ParallaxContainerContact'



class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={ParallaxContainer} />
        <Route exact path="/contact" component={ParallaxContainerContact} />
      </div>
    );
  }
}

export default App;
