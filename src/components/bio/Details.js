import React from 'react'

class Details extends React.Component{
  render(){
    return(
      <div style={{
        position: 'relative',
        left: '10%'
      }}>
        <h3>Details</h3>
        <p><b>Name:</b><br></br>Kevin Yonzon</p>
        <p><b>Age:</b><br></br>26</p>
        <p><b>Location:</b><br></br>Irvine, California</p>
      </div>
    )
  }
}

export default Details
