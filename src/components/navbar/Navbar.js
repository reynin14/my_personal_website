import React from 'react'
import NavLinks from './NavLinks'

class Navbar extends React.Component{
  render(){
    return(
      <nav style={{
        backgroundColor: 'black',
        width: '100%',
        height: '8%'
      }}>
        <NavLinks />
      </nav>
    )
  }
}

export default Navbar
