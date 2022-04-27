import React from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const Title = styled.h1`
    background-color: rgb(112, 76, 182, .9);
    color: #fff;
    padding: 5px 15px;
    border-radius: 10px;
  `

  return (
    <div className="App">
      <header className="App-header">
        <Title>Redux template: Jest & Cypress</Title>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
