import React from 'react'
import AboutMeContainer from './AboutMeContainer'
import Header from './Header'

class IntroContainer extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <AboutMeContainer />
      </div>
    )
  }
}

export default IntroContainer
