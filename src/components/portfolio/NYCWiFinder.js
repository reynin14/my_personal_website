import React from 'react'

import nycWiFinderLogo from '../../images/nycWiFinderLogo.png'

class NYCWiFinder extends React.Component{

  state = {
    show: true
  }

  handleMouseEnter = (event) => {
    this.setState({
      show: false
    })
  }

  handleMouseLeave = (event) => {
    this.setState({
      show: true
    })
  }

  render(){
    let display =
      <div style={{
        border: '2px solid black',
        position: 'relative',
        left: '20%'
      }}>
        <img src={nycWiFinderLogo} alt='NYCWiFinder' height='450' width='550' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
      </div>

    let description =
      <a href='https://wifinder.surge.sh/data'>
        <div onMouseLeave={this.handleMouseLeave} style={{
          border: '2px solid black',
          position: 'relative',
          left: '20%',
          height: '450px',
          width: '550px'
        }}>
          Description
        </div>
      </a>

    let showing = this.state.show ? display : description

    return(
      <div>
        {showing}
      </div>
    )
  }
}

export default NYCWiFinder
