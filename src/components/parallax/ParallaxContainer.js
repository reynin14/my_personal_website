import React from 'react'

class ParallaxContainer extends React.Component{

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  throttle(fn, wait) {
    let time = Date.now()

    return function(){
      if ((time + wait - Date.now()) < 0){
        fn()
        time = Date.now()
      }
    }
  }

  render(){
    return(
      <div>
        In ParallaxContainer
      </div>
    )
  }
}

export default ParallaxContainer
