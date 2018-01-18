import React from 'react'

class Header extends React.Component{
  render(){
    return(
      <div style={{
        textAlign: 'center',
        padding: '50px',
        fontSize: '40px'
      }}>
        <strong>“Things work out best for those who make the best of how things work out.”<br></br><div style={{position: 'absolute', right: '5%'}}>- John Wooden</div></strong>
      </div>
    )
  }
}

export default Header
