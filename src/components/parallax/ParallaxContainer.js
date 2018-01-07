import React from 'react'
import ParallaxComponent from './ParallaxComponent'
import BioContainer from '../bio/BioContainer'
import ExperienceContainer from '../experience/ExperienceContainer'
import NameIntro from '../bio/NameIntro'


class ParallaxContainer extends React.Component{

  render(){
    return(
      <div>
        <ParallaxComponent
        >
          <NameIntro />
        </ParallaxComponent>

        <ParallaxComponent
          top = '20%'
        >
          <BioContainer />
        </ParallaxComponent>

        <ParallaxComponent
          top = "65%"
          speed = "0.2"
          height = '50%'
        >
          <ExperienceContainer />
        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
