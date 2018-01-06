import React from 'react'
import AboutMe from './AboutMe'
import NameIntro from './NameIntro'
import Details from './Details'
import ParallaxComponent from '../parallax/ParallaxComponent'

class BioContainer extends React.Component{
  render(){
    return(
      <div>
        <ParallaxComponent>
          <NameIntro />
          <AboutMe />
          <Details />
        </ParallaxComponent>
      </div>
    )
  }
}

export default BioContainer
