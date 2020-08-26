import React from 'react';
import logo from './tesla_logo.png';
import './App.css';
import Tesla from './Tesla';
import Chevy from './Chevy'
import Maserati from './Maserati'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <a
          className="App-link"
          href="https://www.tesla.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Tesla
        </a>
      </header>
      <Tesla />
      <Chevy />
      <Maserati />
    </div>
  );
}

export default App;
