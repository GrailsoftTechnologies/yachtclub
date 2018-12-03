import React, { Component } from 'react';
import * as styles from './styles.css';

class FBEmbedFrame extends Component {

  constructor(props){
    super(props);
    this.state = {
      width: ((window.innerWidth > 576) ? 500 : parseInt(window.innerWidth*.75, 10)),
      height: ((window.innerHeight > 576) ? (parseInt(window.innerHeight * .80, 10)) : 400), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <div id="blocker" style={{width : '' + this.state.width + 'px', height : '71px', backgroundColor : '' + this.props.hiderColor + '', display: 'inline-block', position: 'absolute', zIndex: '12'}}>
          <h4 style={{marginTop : '20px'}}>{(this.props.data === "timeline") ? "Recent Posts" : "Events"}</h4>
        </div>
        <iframe
          title="FBiframe"
          style={{styles}}
          src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + this.props.account + "&tabs=" + this.props.data + "&width=" + this.state.width + "&height=" + this.state.height + "&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=" + (!this.state.mobile)}
          width={this.state.width}
          height={this.state.height}
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media">
        </iframe>
      </div>
      );
    }
}

FBEmbedFrame.defaultProps = {
  data: "timeline",
  account: "TheStardayTavern",
  hiderColor: "black"
}

export default FBEmbedFrame;
