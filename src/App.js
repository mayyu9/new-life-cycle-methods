import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycleWithout from './LifeCycleWithout';
import LifeCycleWithNewLifeCycle from './LifeCycleWithNewLifeCycle';

class App extends Component {
  render() {
    let maxCount=4;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 16 life cycle methods</h1>
        </header>
        <div className="l-without">
        <LifeCycleWithNewLifeCycle maxCount={maxCount} />
        </div>
      </div>
    );
  }
}

export default App;
