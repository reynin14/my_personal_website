import React from 'react'
import ResumeFile from '../../images/kyResumeForWebsite.jpg'


class Resume extends React.Component{
  render(){
    return(
      <div style={{
        position: 'absolute',
        left: '20%',
        top: '10%'
      }}>
        <img src={ResumeFile} alt='My Resume'/>
      </div>
    )
  }
}

export default Resume
