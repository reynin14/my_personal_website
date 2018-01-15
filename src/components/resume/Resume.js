import React from 'react'
import ResumeFile from '../../images/kyResume.jpg'

class Resume extends React.Component{
  render(){
    return(
      <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundImage: `url(${ResumeFile})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 100%'
      }}>
      </div>
    )
  }
}

export default Resume
