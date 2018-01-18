import React from 'react'

class PortfolioIntro extends React.Component{
  render(){
    return(
      <div style={{
        font: '80px futura, sans-serif',
        color: 'white',
        textShadow: '2px 2px black',
        position: 'absolute',
        top: '20%',
        left: '35%',
        width: '200px',
        height: '100px'
      }}>
        <strong>Portfolio</strong>
      </div>
    )
  }
}

export default PortfolioIntro
