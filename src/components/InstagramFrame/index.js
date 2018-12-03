import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Col, Row } from 'reactstrap';
import './styles.css';

import API from '../../api.js'

class InstagramFrame extends Component {
	constructor(props){
		super(props);

		this.state = {
			urls : [],
			width: "1200px"
		}
	}

	mapContentToState(){
		let fetchAddress = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+API.INSTAGRAM;
		fetch(fetchAddress)
    .then(res => res.json())
    .then(
      (result) => {
				let myMap = result.data;
				myMap.forEach( (data) => {
					this.setState({
						urls: [
							...this.state.urls,
							data.link
						]
					});
				});
      },
      (error) => {
        this.setState({
          content: "error"
        });
      }
  	)
	}

	componentWillMount(){
		this.mapContentToState();
	}

	render() {
		let list = null;
		if (this.state.urls[0]){
			list = this.state.urls.map((url, index) =>
				<Col key={index}>
					<InstagramEmbed
						url={this.state.urls[index]}
						maxWidth={this.state.width}
						hideCaption={true}
						containerTagName='div'
						protocol=''
						injectScript
						onLoading={() => {}}
						onSuccess={() => {}}
						onAfterRender={() => {}}
						onFailure={() => {}}
					/>
				</Col>
			);
			return (
				<Row className="ig-row">
					{list}
				</Row>
			);
		}else{

			return(
				<p>Instagram fetch error</p>
			);
		}
  }
}

export default InstagramFrame;
