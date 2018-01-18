import React from 'react'
import { Link } from "react-router-dom";

class NavLinks extends React.Component{
  render(){
    return(
      <div style={{
        position: 'absolute',
        color: 'grey',
        top: '3%',
        right: '2%',
        float: 'right'
      }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'grey', padding: '10px' }}><strong>Main</strong></Link>
        <Link to='/contact' style={{ textDecoration: 'none', color: 'grey' }}><strong>Contact</strong></Link>
      </div>
    )
  }
}

export default NavLinks
