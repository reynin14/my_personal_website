import React from 'react'

import ContactInfo from './ContactInfo'
import ContactHeader from './ContactHeader'
import SocialMediaLinksContainer from './SocialMediaLinksContainer'

class ContactContainer extends React.Component{
  render(){
    return(
      <div style={{
        backgroundColor: 'white'
      }}>
        <ContactHeader />
        <ContactInfo />
        <SocialMediaLinksContainer />
      </div>
    )
  }
}

export default ContactContainer
