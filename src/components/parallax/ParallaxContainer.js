import React from 'react'

import ParallaxComponent from './ParallaxComponent'
import IntroContainer from '../bio/IntroContainer'
import NameIntro from './backgroundLayers/NameIntro'
import NameIntroBackground from './backgroundLayers/NameIntroBackground'

import Navbar from '../navbar/Navbar'

import ResumeIntroBackground from './backgroundLayers/ResumeIntroBackground'
import ResumeIntro from './backgroundLayers/ResumeIntro'
import Resume from '../resume/Resume'

class ParallaxContainer extends React.Component{

  render(){
    return(
      <div style={{
        overflow: 'hidden'
      }}>
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
          top = '400%'
          zIndex = '1'
          height = '80%'
        >
          <div>
            <Resume />
          </div>
        </ParallaxComponent>

        <ParallaxComponent
          top = '500%'
          color = 'black'
          height = '20%'
        >
          <div style={{
            position: 'relative',
            textAlign: 'center',
            top: '40%',
            color: 'white'
          }}>
            Created with React
          </div>
        </ParallaxComponent>
      </div>
    )
  }
}

export default ParallaxContainer
