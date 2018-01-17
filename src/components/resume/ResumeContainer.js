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

        <button style={{
          position: 'absolute',
          width: '70%',
          height: '160%',
          left: '15%',
          padding: '2%',
          top: '5%'
        }}>
          <Resume />
        </button>

        <div style={{
          position: 'absolute',
          top: '167%',
          left: '15%',
          font: ''
        }}>
          Updated January 2018
        </div>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <div style={{
            position: 'absolute',
            left: '20%',
            overflow: 'auto'
          }}>
            <Resume />
          </div>
        </Modal>

      </div>
    )
  }
}

export default ResumeContainer


//<button onClick={this.toggleModal} /* from line 28 */
