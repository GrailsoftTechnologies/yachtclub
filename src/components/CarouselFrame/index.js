import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col
} from 'reactstrap';
import './styles.css';

import pic1 from '../../img/home1.jpg';
import pic2 from '../../img/home2.jpg';
import pic3 from '../../img/home3r.jpg';
import pic4 from '../../img/home4r.jpg';


const items = [
  {
    src: pic1,
    altText: '',
    caption: '',
		className: 'specialClass'
  },
  {
    src: pic2,
    altText: '',
    caption: '',
		className: 'specialClass'
  },
  {
    src: pic3,
    altText: '',
    caption: '',
		className: 'specialClass'
  },
  {
    src: pic4,
    altText: '',
    caption: '',
		className: 'specialClass'
  },
];

class CarouselFrame extends Component {
	constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

	render() {
		const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Container>
            <Row>
              <Col lg="0" xl="1"></Col>
              <Col lg="3" xl="3" id="desktopTitle">
                <h1>NASHVILLE</h1>
                <h1>CLASSICAL</h1>
                <h1>BALLET</h1>
                <h1>ACADEMY</h1>
              </Col>
              <Col lg="9" xl="7">
                <div id="mobileTitle">
                  <h1>NASHVILLE</h1>
                  <h1>CLASSICAL</h1>
                  <h1>BALLET</h1>
                  <h1>ACADEMY</h1>
                </div>
                <img src={item.src} alt={item.altText} id="carouselImage"/>
              </Col>
              <Col leg="0" xl="1"></Col>
            </Row>
          </Container>
          <CarouselCaption captionText={item.altText} captionHeader={item.caption} className={item.className}/>
        </CarouselItem>
      );
    });

    return (
      <div>
					<Carousel
	        activeIndex={activeIndex}
	        next={this.next}
	        previous={this.previous}
					className="carouselBackground"
	      >
	        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
	        {slides}

	      </Carousel>
			</div>
    );
	}
}

export default CarouselFrame;
