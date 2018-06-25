import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Fantasy Golf</h1>
          <svg className="icon icon-golf"><use xlinkHref='#icon-golf' /></svg>
        </header>
      </div>
    );
  }
}

export default App;
