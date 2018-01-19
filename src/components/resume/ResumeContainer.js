import React from 'react'
import Resume from './Resume'

import Modal from '../modal/Modal'



class ResumeContainer extends React.Component{
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){

    return(
      <div style={{
        height: '140%',
        width: '100%',
        backgroundColor: 'white',
        left: '70%',
        padding: '2%'
      }}>
        <Resume />
      </div>
    )
  }
}

export default ResumeContainer


//<button onClick={this.toggleModal} /* from line 28 */
