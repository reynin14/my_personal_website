import React from 'react'
import { Link } from "react-router-dom";

class Home extends React.Component{
  render(){
    return(
      <div style={{
        position: 'absolute',
        color: 'grey',
        left: '2%',
        top: '3%'
      }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'grey' }}><strong>Kevin Yonzon</strong></Link>
      </div>
    )
  }
}

export default Home
