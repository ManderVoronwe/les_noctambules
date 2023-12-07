import logo from './logo.png';
import './App.css';
import { Row, Col } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col style={{
          alignItems: 'center'
        }} className='flex'>
              <img src={logo} className="App-logo" alt="logo"/>
              <h1>Faire face au changement climatique.</h1>
          </Col>
        </Row>
        
      </header>
    </div>
  );
}

export default App;
