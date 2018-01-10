import React from 'react'

class FirstName extends React.Component{
  render(){
    return(
      <div style={{
        font: '90px futura, sans-serif',
        color: 'white',
        textShadow: '2px 2px black',
        position: 'absolute',
        top: '23%',
        left: '41%',
        width: '200px',
        height: '100px'
      }}>
        <strong>Kevin</strong>
      </div>
    )
  }
}

export default FirstName
