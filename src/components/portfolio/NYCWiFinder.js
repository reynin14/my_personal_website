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
      <a href='https://wifinder.surge.sh/data' style={{textDecoration: 'none', color: 'black'}}>
        <div onMouseLeave={this.handleMouseLeave} style={{
          border: '2px solid black',
          position: 'relative',
          left: '20%',
          height: '450px',
          width: '550px'
        }}>
          <i>Graphically locate the nearest public Wifi hotspot and charging station in NYC.</i>
          <p>+ Created the application using React</p>
          <p>+ Efficiently persisted data provided by the NYC Open Data API into my Rails API</p>
          <p>+ Implemented Google Maps to provide the main component for the user interface and hotspot markers</p>
          <p>+ Accessed the NYC Open Data API for the latitude and longitude coordinates for the public Wifi hotspots</p>
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
