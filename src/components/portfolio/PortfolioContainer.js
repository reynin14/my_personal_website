import React from 'react'

import adventurUsCover from '../../images/adventurUsCover.png'
import nycWiFinderLogo from '../../images/nycWiFinderLogo.png'

class PortfolioContainer extends React.Component{
  render(){
    return(
      <div style={{
        backgroundColor: 'white',
        display: 'flex'
      }}>
        <div style={{
          border: '2px solid black'  
        }}>
          <a href='https://www.youtube.com/watch?v=QbMZK6RA72A&feature=youtu.be'><img src={adventurUsCover} alt='AdventurUs Cover' height='450' width='550'/></a>
        </div>

        <a href='https://wifinder.surge.sh/data'><img src={nycWiFinderLogo} alt='AdventurUs Cover' height='450' width='550' /></a>
      </div>
    )
  }
}

export default PortfolioContainer
