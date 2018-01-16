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
        backgroundColor: 'white'
      }}>
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    )
  }
}

export default ResumeContainer
