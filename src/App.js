import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  let style = {
    height: '490px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img style={style} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsss</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{props.text}
        </a>
      </header>
    </div>
  );
}

export default App;
