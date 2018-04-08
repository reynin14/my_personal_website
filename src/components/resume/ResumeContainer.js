import React from 'react'
import Resume from './Resume'

import styles from './styles.css'

class ResumeContainer extends React.Component{
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){

    return(
        <Resume />
    )
  }
}

export default ResumeContainer


//<button onClick={this.toggleModal} /* from line 28 */
