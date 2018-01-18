import React from 'react'
import { Link } from "react-router-dom";

class Main extends React.Component{
  render(){
    return(
      <div style={{
        position: 'absolute',
        color: 'grey',
        left: '2%',
        top: '3%'
      }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'grey' }}><strong>Main</strong></Link>
      </div>
    )
  }
}

export default Home2
