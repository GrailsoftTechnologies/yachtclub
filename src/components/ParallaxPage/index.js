import React, { Component } from 'react';
import './styles.css';
import Contact from '../Contact';
import About from '../About';
import Home from '../Home';
import Menu from '../Menu';

class ParallaxPage extends Component {
  render(){
    return(
      <div className="ParallaxPage" style={{color: this.props.text,
        backgroundColor: this.props.background}}>
        <style>
          {`
            .ParallaxPage a:hover {
              text-decoration: none;
              color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
        <div className="bgimg1" id="Home">
          <div className="captionline">
            <span className="captionbox">Thunderbird Bar PDX</span>
          </div>
        </div>
        <div className="textbox">
          <Home/>
        </div>
        <div className="bgimg3" backgroundColor="rgb(0, 0, 0)" id="Menu">
          <div className="captionline">
            <span className="captionbox">Menu</span>
          </div>
        </div>
        <div className="textbox">
          <Menu/>
        </div>
        <div className="bgimg2" id="About">
          <div className="captionline">
            <span className="captionbox">About</span>
          </div>
        </div>
        <div className="textbox">
          <About/>
        </div>
        <div className="bgimg4" backgroundColor="rgb(270, 270, 270)" id="Contact">
          <div className="captionline">
            <span className="captionbox">Contact</span>
          </div>
        </div>
        <div className="textbox">
          <Contact/>
        </div>
      </div>
    )
  }
}

ParallaxPage.defaultProps = {
  text: "white",
  background: "black",
  hovercolor: "grey",
}

export default ParallaxPage;
