import React from 'react'
import NavLinks from './NavLinks'
import Home from './Home'

class Navbar extends React.Component{
  render(){
    return(
      <nav style={{
        backgroundColor: 'black',
        width: '100%',
        height: '8%'
      }}>
        <Home />
        <NavLinks />
      </nav>
    )
  }
}

export default Navbar
