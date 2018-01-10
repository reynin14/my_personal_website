import React from 'react'
import ParallaxComponent from './ParallaxComponent'
import BioContainer from '../bio/BioContainer'
import ExperienceContainer from '../experience/ExperienceContainer'
import NameIntro from '../bio/NameIntro'
import NameIntroBackground from '../backgroundLayers/NameIntroBackground'
import Navbar from '../navbar/Navbar'


class ParallaxContainer extends React.Component{

  render(){
    return(
      <div>
        <ParallaxComponent
          zIndex = '1'
        >
          <Navbar />
        </ParallaxComponent>

        <ParallaxComponent
          speed = '0.1'
        >
          <NameIntroBackground />
        </ParallaxComponent>

        <ParallaxComponent
        >
          <NameIntro />
        </ParallaxComponent>

        <ParallaxComponent
          top = '100%'
          color = 'white'
        >
          <BioContainer />
        </ParallaxComponent>

        <ParallaxComponent
          top = '65%'
          speed = '0.2'
          height = '50%'
        >
          <ExperienceContainer />
        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
