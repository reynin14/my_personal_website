import React from 'react'
import kyBridge from '../../images/kyBridge.JPG'

class NameIntroBackground extends React.Component{
  render(){
    return(
      <div
        style={{
        Width: '100%',
        height: '100%',
        margin: '0 auto',
        backgroundImage: `url(${kyBridge})`,
        backgroundSize: '100% 80%',
        backgroundRepeat: 'no-repeat',
        backgroundPostion: 'center',
        backgroundOrigin: 'content-box'
        }}
      >
      </div>
    )
  }
}

export default NameIntroBackground
