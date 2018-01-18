import React from 'react'
import ContactInfo from './ContactInfo'
import ContactHeader from './ContactHeader'

class ContactContainer extends React.Component{
  render(){
    return(
      <div style={{
        backgroundColor: 'white'
      }}>
        <ContactHeader />
        <ContactInfo />
      </div>
    )
  }
}

export default ContactContainer
