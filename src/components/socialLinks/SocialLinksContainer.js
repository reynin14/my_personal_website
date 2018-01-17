import React from 'react'
import LinkedIn from './LinkedIn'
import Github from './Github'
import Instagram from './Instagram'

class SocialLinksContainer extends React.Component{
  render(){
    return(
      <div>
        <LinkedIn />
        <Github />
        <Instagram />
      </div>
    )
  }
}

export default SocialLinksContainer
