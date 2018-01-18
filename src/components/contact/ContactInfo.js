import React from 'react'

import emailIcon from '../../images/emailIcon.png'
import linkedinIcon from '../../images/linkedinIcon.png'
import githubIcon from '../../images/githubIcon.png'
import instagramIcon from '../../images/instagramIcon.jpeg'


class ContactInfo extends React.Component{
  render(){
    return(
      <div style={{
        color: 'black'
      }}>
        <h2>Contact Information</h2>
        <img src={emailIcon} alt='email icon' width='50' height='50'/>
        <h4>Email - </h4>
        <p>kyonzon14@gmail.com</p>
        <img src={linkedinIcon} alt='email icon' width='50' height='50'/>
        <h4>LinkedIn - </h4>
        <p>www.linkedin.com/in/kevin-yonzon</p>
        <img src={githubIcon} alt='email icon' width='50' height='50'/>
        <img src={instagramIcon} alt='email icon' width='50' height='50'/>
      </div>
    )
  }
}

export default ContactInfo
