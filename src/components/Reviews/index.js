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
		let fetchAddress = "https://public-api.wordpress.com/rest/v1.1/sites/grailsoft.wordpress.com/posts";
		let header = {"Authorization" : "Bearer 6VYGoL8E@sQu8dT0!c)VtV4HsPulh(UDC2bE5kYSd5qPh3EX#af%lqMJFyXxQ2jq"}
		fetch(fetchAddress, {headers: header})
			.then(res => res.json())
			.then(
				async (result) => {
					this.mapContentToState(result.posts);
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
