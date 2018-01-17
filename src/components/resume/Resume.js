import React from 'react'
import ResumeFile from '../../images/kyResume.jpg'


class Resume extends React.Component{
  render(){
    return(
      <div>
        <img src={ResumeFile} alt='My Resume'/>
      </div>
    )
  }
}

export default Resume
