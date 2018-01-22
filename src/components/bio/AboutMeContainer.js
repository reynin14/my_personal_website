import React from 'react'
import AboutMe from './AboutMe'
import Details from './Details'

class AboutMeContainer extends React.Component{
  render(){
    return(
      <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        columnCount: '2',
        columnGap: '20px',
        columnWidth: '50%',
        display: 'flex',
        padding: '30px',
        top: '30%'
      }}>
        <Details />
        <AboutMe />
      </div>
    )
  }
}

export default AboutMeContainer
