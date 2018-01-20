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
      <a href='https://www.youtube.com/watch?v=QbMZK6RA72A&feature=youtu.be'>
        <div style={{
          border: '2px solid black',
          position: 'relative',
          left: '10%',
          height: '450px',
          width: '550px'
        }} onMouseLeave={this.handleMouseLeave}>
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

export default AdventurUs
