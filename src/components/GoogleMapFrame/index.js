import React, { Component } from "react";
import API from '../../api.js'; // API KEY REQUIRED!
import "./styles.css";

class GoogleMapFrame extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: (parseInt(window.innerHeight * .60, 10)) + "px", // 10 is for radix
      width: "80%"
    }
  }
  render() {
    return (
      <iframe
				title="googleMap"
        height= {this.state.height}
        width= {this.state.width}
        frameBorder="0"
        styles="margin:auto"
        src={"https://www.google.com/maps/embed/v1/place?key=" + API.GOOGLEMAPS + "&q=" + this.props.name + "," + this.props.location + "&zoom=" + this.props.zoom}
        allowFullScreen>
      </iframe>
    );
  }
}

GoogleMapFrame.defaultProps = {
  name: "Starday+Tavern",
  location: "Portland+OR",
  zoom: 14
}

export default GoogleMapFrame;
