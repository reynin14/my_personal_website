import React from 'react'

import AdventurUs from './AdventurUs'
import NYCWiFinder from './NYCWiFinder'

class PortfolioContainer extends React.Component{
  render(){
    return(
      <div style={{
        backgroundColor: 'white',
        display: 'flex',
        position: 'absolute',
        top: '15%'
      }}>
        <AdventurUs />
        <NYCWiFinder />
      </div>
    )
  }
}

export default PortfolioContainer
