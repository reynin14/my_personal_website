import React from 'react'

class NameIntro extends React.Component{
  render(){
    return(
      <div style={{
        font: '90px futura, sans-serif',
        color: 'white',
        textShadow: '2px 2px black',
        position: 'absolute',
        top: '16%',
        left: '38%',
        width: '200px',
        height: '100px'
      }}>
        <strong>Résumé</strong>
      </div>
    )
  }
}

export default NameIntro
