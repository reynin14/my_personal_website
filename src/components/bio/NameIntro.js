import React from 'react'
import FirstName from './FirstName'
import LastName from './LastName'

class NameIntro extends React.Component{
  render(){
    return(
      <div>
        <FirstName />
        <LastName />
      </div>
    )
  }
}

export default NameIntro
