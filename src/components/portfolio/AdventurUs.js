import React from 'react'

import adventurUsCover from '../../images/adventurUsCover.png'

class AdventurUs extends React.Component{

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
        left: '10%'
      }}>
        <img src={adventurUsCover} alt='AdventurUs Cover' height='450' width='550' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
      </div>

    let description =
      <a href='https://www.youtube.com/watch?v=QbMZK6RA72A&feature=youtu.be' style={{textDecoration: 'none', color: 'black'}}>
        <div style={{
          textDecoration: 'none',
          border: '2px solid black',
          position: 'relative',
          left: '10%',
          height: '450px',
          width: '550px'
        }} onMouseLeave={this.handleMouseLeave}>
        <i>Find users previous travel destinations along with the recommendations they would like to share from their trips.</i>
        <p>+ Created with a React/Redux frontend and a Rails backend</p>
        <p>+ Constructed Rails API to store user’s information, travel destinations, and recommendations along with user authentication</p>
        <p>+ Used open source libraries for a unique user interface and experience</p>
        <p>+ Applied the Semantic UI React library for popup and modal functionality as well as for an enhanced UI</p>
        <p>+ Incorporated Google Maps as the main display for users to mark their travel destination and recommendations</p>
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

export default AdventurUs
