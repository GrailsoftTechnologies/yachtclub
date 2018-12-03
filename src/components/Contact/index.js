import React from "react";
import { Container, Col, Row } from 'reactstrap';

import GoogleMapFrame from '../GoogleMapFrame';

export default function Contact (props) {
  return (
    <Container className="Contact">
      <Row>
        <Col>
          <h3>Call</h3>
          <a href="tel:+15038675309"><h3>(503)-867-5309</h3></a>
        </Col>
        <Col>
          <h3>5339 SE Foster Rd</h3>
          <h3>Portland, OR</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <GoogleMapFrame name="Thunderbird+Bar" location="Portland+OR"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="mailto:info@thunderbirdbarpdx.com"><h4>info@thunderbirdbarpdx.com</h4></a>
        </Col>
      </Row>
    </Container>
  );
};
