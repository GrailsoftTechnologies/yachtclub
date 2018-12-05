import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import CarouselFrame from '../CarouselFrame';


export default function Home (props) {
  return (
    <Container className="Home">
      <Row>
        <Col>
          <h1><span role="img" aria-label="thunderbolt">&#x26A1;</span> Thunderbird <span role="img" aria-label="thunderbolt">&#x26A1;</span></h1>
          <h4>is the latest from the Lightning Bar Collective</h4>
          <h3>Open 4pm-2am every day of the week</h3>
          <h2>Happy Hour 2pm-4pm Everyday</h2>
          <h4>$1 off Drafts</h4>
          <h4>$1 off Well Drinks</h4>
          <h4>$1 off House Wines</h4>
          <h4>$1 off Sandwiches</h4>
          <h4>$1 off French Fries</h4>
          <h4>$4 Eat Your Greens Salad</h4>
        </Col>
      </Row>
      <Row>
        <CarouselFrame/>
      </Row>
    </Container>
  );
};
