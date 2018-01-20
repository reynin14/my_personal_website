import React from 'react'
import ParallaxComponent from './ParallaxComponent'

import Navbar from '../navbar/Navbar'

import ContactIntro from '../backgroundLayers/ContactIntro'
import ContactIntroBackground from '../backgroundLayers/ContactIntroBackground'

import ContactContainer from '../contact/ContactContainer'

class ParallaxContainerContact extends React.Component{

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
          <ContactIntroBackground />
        </ParallaxComponent>

        <ParallaxComponent
        >
          <ContactIntro />
        </ParallaxComponent>

        <ParallaxComponent
          top = '100%'
          color = 'white'
          zIndex = '1'
        >
          <ContactContainer />
        </ParallaxComponent>

        <ParallaxComponent
          top = '230%'
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

export default ParallaxContainerContact
