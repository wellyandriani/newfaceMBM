import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import logo from './mbm.png'

const particleOpt = {
    particles: {
      number: {
        value : 200,
        density:{
          enable: true,
          value_area:700
        }
      }
    }
  }


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <img className="App-logo" src={logo} alt="logo"/>
        </div>
        <Particles 
              params={particleOpt}
            />
        <div>
          <Container>
            <Row>
              <Col xs="6" sm="4">
              <img  src={logo} alt="logo"/></Col>
              <Col xs="6" sm="4">
              <img  src={logo} alt="logo"/></Col>
              <Col sm="4">
              <img  src={logo} alt="logo"/></Col>
            </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default App;
