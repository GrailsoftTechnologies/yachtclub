import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import IGFrame from '../IGFrame';
import FBEmbedFrame from '../FBEmbedFrame';

export default function About(props) {
  return(
    <Container className="About">
      <Row>
        <Col>
          <FBEmbedFrame account="thunderbirdbarpdx"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <IGFrame source="Bp2pX7fhvj2"/>
        </Col>
      </Row>
    </Container>
  );
};
