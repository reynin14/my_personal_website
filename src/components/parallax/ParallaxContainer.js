import React from 'react'
import ParallaxComponent from './ParallaxComponent'
import AboutMe from '../bio/AboutMe'

class ParallaxContainer extends React.Component{

  render(){
    return(
      <div>
        <ParallaxComponent
          top = '50%'
        >
          <AboutMe />
        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
