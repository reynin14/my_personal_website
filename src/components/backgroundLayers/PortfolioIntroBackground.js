import React from 'react'
import kyDC from '../../images/kyDC.JPG'

class PortfolioIntroBackground extends React.Component{
  render(){
    return(
      <div
        style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${kyDC})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 100%'
        }}
      >
      </div>
    )
  }
}

export default PortfolioIntroBackground
