import React from 'react'

class ContactIntro extends React.Component{
  render(){
    return(
      <div style={{
        font: '80px futura, sans-serif',
        color: 'white',
        textShadow: '2px 2px black',
        position: 'absolute',
        top: '19%',
        left: '30%',
        width: '200px',
        height: '100px'
      }}>
        <strong style={{padding: '19px'}}>Contact</strong>
        <strong>Me</strong>
      </div>
    )
  }
}

export default ContactIntro
