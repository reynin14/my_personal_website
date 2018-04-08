import React from 'react'
import ParallaxComponent from './ParallaxComponent'

import Navbar from '../navbar/Navbar'

import PortfolioIntroBackground from './backgroundLayers/PortfolioIntroBackground'
import PortfolioIntro from './backgroundLayers/PortfolioIntro'
import PortfolioContainer from '../portfolio/PortfolioContainer'


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
          <PortfolioContainer />
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

export default ParallaxContainerPortfolio
