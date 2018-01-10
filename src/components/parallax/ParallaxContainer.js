import React from 'react'
import ParallaxComponent from './ParallaxComponent'
import IntroContainer from '../bio/IntroContainer'
import NameIntro from '../backgroundLayers/NameIntro'
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
          <IntroContainer />
        </ParallaxComponent>

        <ParallaxComponent

        >

        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
