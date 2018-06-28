import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Fantasy Golf</h1>
          <svg className="icon icon-golf"><use xlinkHref='#icon-golf' /></svg>
        </header>      
        <p>Test</p>
      </div>
    )
  }
}

const golfer = [
  { name: 'Dustin Johnson', strokes: 67 },
  { name: 'Rory McIlroy', strokes: 66 },
  { name: 'Bubba Watson', strokes: 68 },
  { name: 'Justin Rose', strokes: 69 },
  { name: 'Rickie Fowler', strokes: 70 },
  { name: 'Phil Mickelson', strokes: 64 }
]

console.log(golfer);

export default Login