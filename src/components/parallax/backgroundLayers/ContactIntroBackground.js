import React from 'react'
import kyCrossing from '../../../images/kyCrossing.JPG'

class ContactIntroBackground extends React.Component{
  render(){
    return(
      <div
        style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${kyCrossing})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 20%'
        }}
      >
      </div>
    )
  }
}

export default ContactIntroBackground
