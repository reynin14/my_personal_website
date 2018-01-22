import React from 'react'

class Details extends React.Component{
  render(){
    return(
      <div style={{
        position: 'relative',
        left: '5%'
      }}>
        <h3>Location</h3>
        Irvine, California
        <h3>Age</h3>
        <p>26</p>
      </div>
    )
  }
}

export default Details
