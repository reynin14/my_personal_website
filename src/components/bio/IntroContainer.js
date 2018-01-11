import React from 'react'
import AboutMeContainer from './AboutMeContainer'
import Header from './Header'

class IntroContainer extends React.Component{
  render(){
    return(
      <div style={{
        height: '100%'
      }}>
        <Header />
        <AboutMeContainer />
      </div>
    )
  }
}

export default IntroContainer
