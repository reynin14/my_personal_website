import React from 'react';
import Resume1 from './images/3.21Resume_pg1.jpg';
import Resume2 from './images/3.21Resume_pg2.jpg';

import styles from './styles.css';


class Resume extends React.Component{
  render(){
    let resumeImageStyle = {
      height: '1000px',
      width: '800px',
    }

    return(
      <div styles={styles.resumeContainer}>
        <div>
          <img src={Resume1} alt='My Resume Page 1' style={resumeImageStyle}/>
        </div>
        <div>
          <img src={Resume2} alt='My Resume Page 2' style={resumeImageStyle}/>
        </div>
      </div>
    )
  }
}

export default Resume
