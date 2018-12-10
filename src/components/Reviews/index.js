import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './styles.css';
import myAPI from '../../api.js'

class Reviews extends Component {
	constructor(props){
		super(props);

		this.state = {
			content : [],
		}
	}

	async fetchContent(mapArray, pageToken){
		let fetchAddress = "https://www.googleapis.com/blogger/v3/blogs/7025349432715574756/posts/?key="+myAPI.blogger;
		if(pageToken){
			fetchAddress += "&pageToken="+pageToken;
		}
		fetch(fetchAddress)
			.then(res => res.json())
			.then(
				async (result) => {
					mapArray = mapArray.concat(result.items);
					if (result.nextPageToken){
						await this.fetchContent(mapArray, result.nextPageToken)
					}else{
						console.log(mapArray);
						this.mapContentToState(mapArray);
					}
				},
				(error) => {
					console.log("fetch error");
				}
			)
	}

	mapContentToState(myMap){
		myMap.forEach( (item) => {
			this.setState({
				content: [
					...this.state.content,
					item.content
				]
			});
		})
	}

	async componentDidMount(){
		let mapArray = [];
		this.fetchContent(mapArray);
	}

	render() {
	  return(
	  	<Container className="Reviews">
				<Row>
					<Col>
						<Jumbotron fluid>
							<Container fluid>
								<h1 className="display-3">Student Testimonials</h1>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
				{this.state.content.map(function(post, index){
						return(<Jumbotron key={index}>{ReactHtmlParser(post)}</Jumbotron>)
					})}
			</Container>
	    );
	  }
	}

export default Reviews;
