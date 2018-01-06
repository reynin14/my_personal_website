import React from 'react'
import ParallaxComponent from './ParallaxComponent'
import BioContainer from '../bio/BioContainer'
import ExperienceContainer from '../experience/ExperienceContainer'
import nycbackground from '../../images/nycbackground.jpg'

class ParallaxContainer extends React.Component{

  render(){
    return(
      <div>
        <ParallaxComponent
          image = {nycbackground}
        >

        </ParallaxComponent>

        <ParallaxComponent
        >
          <BioContainer />
        </ParallaxComponent>

        <ParallaxComponent
          top = "65%"
        >
          <ExperienceContainer />
        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
