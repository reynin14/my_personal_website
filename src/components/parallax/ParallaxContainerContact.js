import React from 'react'
import ParallaxComponent from './ParallaxComponent'

import Navbar from '../navbar/Navbar'
import SocialLinksContainer from '../socialLinks/SocialLinksContainer'
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
        </ParallaxComponent>

      </div>
    )
  }
}

export default ParallaxContainerContact
