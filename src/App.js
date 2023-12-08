import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Legal from './pages/Legal';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


const appStyle = {
  textAlign: 'center',
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

const footerStyle = {
  marginTop: 'auto',
  backgroundColor: '#0d3001',
  color: 'rgb(196, 111, 71)',
  padding: '20px',
};

const App = () => (
  <Router>
    <div style={appStyle} className="App">
      <header style={appHeaderStyle} className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </header>

      <footer style={footerStyle}>
        <Link to="/legal">
          Mentions Légales
        </Link>
      </footer>
    </div>
  </Router>
);

export default App;
