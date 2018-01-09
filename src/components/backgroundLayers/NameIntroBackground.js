import React from 'react'
import kyLeavesActual from '../../images/kyLeavesActual.JPG'

class NameIntroBackground extends React.Component{
  render(){
    return(
      <div
        style={{
        width: '100%',
        height: '100%',
        margin: '0 auto',
        backgroundImage: `url(${kyLeavesActual})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 60%'
        }}
      >
      </div>
    )
  }
}

export default NameIntroBackground
