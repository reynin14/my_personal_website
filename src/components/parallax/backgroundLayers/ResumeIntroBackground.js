import React from 'react'
import kyFlatiron from '../../../images/kyFlatiron.JPG'

class ResumeIntroBackground extends React.Component{
  render(){
    return(
      <div style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${kyFlatiron})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 100%'
      }}>
      </div>
    )
  }
}

export default ResumeIntroBackground
