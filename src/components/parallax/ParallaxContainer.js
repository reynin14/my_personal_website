import React from 'react'

import ParallaxComponent from './ParallaxComponent'
import IntroContainer from '../bio/IntroContainer'
import NameIntro from '../backgroundLayers/NameIntro'
import NameIntroBackground from '../backgroundLayers/NameIntroBackground'

import Navbar from '../navbar/Navbar'

import ResumeIntroBackground from '../backgroundLayers/ResumeIntroBackground'
import ResumeIntro from '../backgroundLayers/ResumeIntro'
import Resume from '../resume/Resume'


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
          zIndex = '1'
        >
          <IntroContainer />
        </ParallaxComponent>

        <ParallaxComponent
          top = '110%'
          speed = '0.1'
        >
          <ResumeIntroBackground />
        </ParallaxComponent>

        <ParallaxComponent
          top = '215%'
          zIndex = '1'
        >
          <ResumeIntro />
        </ParallaxComponent>

        <ParallaxComponent
          top = '300%'
        >
          <div style={{
            height: '140%',
            width: '100%',
            backgroundColor: 'white'
          }}>
            <Resume />
          </div>

        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
