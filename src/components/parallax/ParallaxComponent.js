import React from 'react'

class ParallaxComponent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      speed: this.props.speed || '1',
      width: '100%',
      height: this.props.height || '100%',
      top: this.props.top || '0%',
      left: this.props.left,
      right: this.props.right,
      position: 'absolute',
      zIndex: this.props.zIndex || '0',
      backgroundRepeat: 'no-repeat',
      backgroundPostion: 'center',
      backgroundColor: this.props.color || null,
      backgroundImage: `url(${this.props.image})`
    }

    this.handleScroll = this.throttle(this.handleScroll.bind(this), 14);
    this.top = this.getTop()
  }

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


  getTop = () => {
    const top = this.state.top;

    return top.indexOf('%') > -1 ? window.innerHeight * (top.replace('%', '') / 100) : parseInt(top, 10);
  }

  handleScroll = () => {
    const speed = this.state.speed;
    const top = this.top;
    const pageTop = window.scrollY;
    const newTop = (top - (pageTop * speed));
    console.log('page top', pageTop);
    console.log('top', top);
    console.log('newTop', newTop);

    this.refs.parallaxElement.style.top = `${newTop}px`;
  }

  render(){
    return(
      <div
        ref = 'parallaxElement'
        style = {{...this.state}}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ParallaxComponent
