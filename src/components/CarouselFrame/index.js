import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col
} from 'reactstrap';
import './styles.css';

import pic1 from '../../img/barart.jpg';
import pic2 from '../../img/barseating.jpg';
import pic3 from '../../img/bar.jpg';
import pic4 from '../../img/barinterior.jpg';


const items = [
  {
    src: pic1,
    altText: '',
    caption: '',
  },
  {
    src: pic2,
    altText: '',
    caption: '',
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
          <img src={item.src} alt={item.altText} id="carouselImage"/>
          <CarouselCaption captionText={item.altText} captionHeader={item.caption} className={item.className}/>
        </CarouselItem>
      );
    });

    return (
      <div className="CarouselFrame">
					<Carousel
	        activeIndex={activeIndex}
	        next={this.next}
	        previous={this.previous}
					className="carouselBackground"
          interval={3000}
	      >
	        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
	        {slides}

	      </Carousel>
			</div>
    );
	}
}

export default CarouselFrame;
