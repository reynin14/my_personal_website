import React from 'react'

import linkedinIcon from '../../images/linkedinIcon.png'
import githubIcon from '../../images/githubIcon.png'
import instagramIcon from '../../images/instagramIcon.jpeg'

class SocialMediaLinksContainer extends React.Component{
  render(){
    return(
      <div style={{
        display: 'flex',
        position: 'absolute',
        padding: '20px',
        top: '70%',
        left: '19%'
      }}>
        <div style={{padding: '10%'}}>
          <a href='https://www.linkedin.com/in/kevin-yonzon/'><img src={linkedinIcon} alt='email icon' width='150' height='150'/></a>
        </div>

        <div style={{padding: '10%'}}>
          <a href='https://github.com/reynin14'><img src={githubIcon} alt='email icon' width='150' height='150'/></a>
        </div>

        <div style={{padding: '10%'}}>
          <a href='https://www.instagram.com/aykevinrey/'><img src={instagramIcon} alt='email icon' width='150' height='150'/></a>
        </div>
      </div>
    )
  }
}

export default SocialMediaLinksContainer
