import React, { Component } from 'react'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <div className="login">
        <div className="wrapper">
          <header className="login-header">          
            <h1 className="login-title">Fantasy Golf</h1>
            <svg className="icon icon-golf"><use xlinkHref='#icon-golf' /></svg>
          </header>      
          <form>
            <h2>Login</h2>
            <div className="username">  
              <label>Username</label>
              <input type="text" name="username"></input>
            </div>
            <div className="password">
              <label>Password</label>
              <input type="text" name="password"></input>
            </div>
            <input type="submit"></input>
          </form>
        </div>
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

console.log(golfer)

export default Login