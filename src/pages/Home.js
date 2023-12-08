import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FlippingCard from '../components/FlippingCard';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const appLogoStyle = {
  height: '40vmin',
  pointerEvents: 'none',
};

const Home = () => (
  <div>
    <Row>
      <Col style={{ alignItems: 'center' }} className='flex'>
        <img src={logo} style={appLogoStyle} className="App-logo" alt="logo" />
        <h1>Faire face au changement climatique.</h1>
      </Col>
    </Row>
    <div>
      <FlippingCard frontText="test" backText="back test" cardWidth={300} cardHeight={350} frontTitle='titre' backImg={logo} />
    </div>
  </div>
);

export default Home;