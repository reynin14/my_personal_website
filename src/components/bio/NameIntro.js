import React from 'react'

class NameIntro extends React.Component{
  render(){
    return(
      <div style={{
        font: '90px futura, sans-serif',
        color: 'white',
        textShadow: '2px 2px black',
        position: 'absolute',
        top: '13%',
        left: '38%',
        width: '200px',
        height: '100px'
      }}>
        <strong>Kevin</strong><br></br>
        <strong>Yonzon</strong>
      </div>
    )
  }
}

export default NameIntro
