import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FlippingCard from './components/FlippingCard';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const appStyle = {
  textAlign: 'center',
};

const appLogoStyle = {
  height: '40vmin',
  pointerEvents: 'none',
};

const appHeaderStyle = {
  backgroundColor: '#0d3001',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'rgb(196, 111, 71)',
};

const App = () => {
  return (
    <div style={appStyle} className="App">
      <header style={appHeaderStyle} className="App-header">
        <Row>
          <Col style={{ alignItems: 'center' }} className='flex'>
            <img src={logo} style={appLogoStyle} className="App-logo" alt="logo" />
            <h1>Faire face au changement climatique.</h1>
          </Col>
        </Row>

        <div>
          <FlippingCard frontText="test" backText="back test" cardWidth={300} cardHeight={350} frontTitle='titre' backImg={logo} />
        </div>
      </header>
    </div>
  );
}

export default App;
