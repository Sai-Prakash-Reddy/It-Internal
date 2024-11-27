import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CNLab from './CNLab';
import IoTLab from './IoTLab';

const App = () => {
  return (
    <Router>
      <div>
        <header style={{ backgroundColor: '#2f2f2f', padding: '15px', color: 'white', textAlign: 'center', fontSize: '25px'}}>
          <h1>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Lab Internal
            </Link>
          </h1>
        </header>
        <div
          style={{
            textAlign: 'center',
            marginTop: '50px',
            fontSize: '32px',
            color: '#ffffff',
          }}
        >
          <p>Good Luck Bro!</p>
          <p>Choose Your Internal Exam Subject And Click On That And Scroll Down.</p>
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <Link
            to="/cn-lab"
            style={{
              padding: '10px 20px',
              backgroundColor: '#2f2f2f',
              color: 'white',
              textDecoration: 'none',
              margin: '0 10px',
            }}
          >
            CN Lab Internal
          </Link>
          <Link
            to="/iot-lab"
            style={{
              padding: '10px 20px',
              backgroundColor: '#2f2f2f',
              color: 'white',
              textDecoration: 'none',
              margin: '0 10px',
            }}
          >
            IoT Lab Internal
          </Link>
        </nav>
        <Routes>
          <Route path="/cn-lab" element={<CNLab />} />
          <Route path="/iot-lab" element={<IoTLab />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
