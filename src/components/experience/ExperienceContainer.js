import React from 'react'
import Education from './Education'
import WorkHistory from './WorkHistory'

class ExperienceContainer extends React.Component{
  render(){
    return(
      <div>
        <Education />
        <WorkHistory />
      </div>
    )
  }
}

export default ExperienceContainer
