import React from 'react'
import AboutMe from './AboutMe'
import NameIntro from './NameIntro'
import Details from './Details'

class BioContainer extends React.Component{
  render(){
    return(
      <div>
        <AboutMe />
        <Details />
      </div>
    )
  }
}

export default BioContainer
