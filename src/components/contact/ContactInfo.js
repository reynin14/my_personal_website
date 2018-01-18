import React from 'react'

import emailIcon from '../../images/emailIcon.png'



class ContactInfo extends React.Component{
  render(){
    return(
      <div style={{
        color: 'black',
        position: 'absolute',
        top: '40%',
        left: '23%'
      }}>
        <div>
          <img src={emailIcon} alt='email icon' width='175' height='175'/>
          <div style={{fontSize: '40px', position: 'absolute', top: '29%', left: '110%'}}><strong>kyonzon14@gmail.com</strong></div>
        </div>
      </div>
    )
  }
}

export default ContactInfo
