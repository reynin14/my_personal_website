import React from 'react'
import ParallaxComponent from './ParallaxComponent'

import Navbar from '../navbar/Navbar'

import PortfolioIntroBackground from '../backgroundLayers/PortfolioIntroBackground'
import PortfolioIntro from '../backgroundLayers/PortfolioIntro'

import ContactContainer from '../contact/ContactContainer'

class ParallaxContainerPortfolio extends React.Component{

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
          <PortfolioIntroBackground />
        </ParallaxComponent>

        <ParallaxComponent
        >
          <PortfolioIntro />
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

export default ParallaxContainerPortfolio
