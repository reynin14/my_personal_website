import React from 'react'
import kyLeavesActual from '../../images/kyLeavesActual.JPG'

class NameIntroBackground extends React.Component{
  render(){
    return(
      <div
        style={{
        Width: '100%',
        height: '100%',
        margin: '0 auto',
        backgroundImage: `url(${kyLeavesActual})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectPosition: '100% 150%'
        }}
      >
      </div>
    )
  }
}

export default NameIntroBackground
