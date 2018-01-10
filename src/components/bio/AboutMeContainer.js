import React from 'react'
import AboutMe from './AboutMe'
import Details from './Details'

class AboutMeContainer extends React.Component{
  render(){
    return(
      <div style={{
        columnCount: '2',
        columnGap: '20px',
        columnWidth: '40%',
      }}>
        <Details />
        <AboutMe />
      </div>
    )
  }
}

export default AboutMeContainer
