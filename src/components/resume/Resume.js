import React from 'react'
import ResumeFile from '../../images/kyResume.jpg'


class Resume extends React.Component{
  render(){
    return(
      <div style={{
        backgroundImage: `url(${ResumeFile})`
      }}>

      </div>
    )
  }
}

export default Resume
