import React, { Component } from 'react'

class Login extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // this.props.onSubmit(this.state)
    console.log(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="register">
        <div className="wrapper">
          <header className="login-header">          
            <h1 className="login-title">Fantasy Golf</h1>
            <svg className="icon icon-golf"><use xlinkHref='#icon-golf' /></svg>
          </header>

          <form>
            <h2>Register </h2>
            <div className="firstname field">  
              <label>First Name</label>
              <input 
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                type="text" 
                name="firstName" 
              />
            </div>
            {/* ----------------- */}
            <div className="lastname field">  
              <label>Last Name</label>
              <input 
                value={this.state.lastName} 
                onChange={e => this.change(e)}
                type="text" 
                name="lastName" 
              />
            </div>
            {/* ----------------- */}
            <div className="email field">  
              <label>Email</label>
              <input 
                value={this.state.email} 
                onChange={e => this.change(e)}
                type="text" 
                name="email" 
              />
            </div>
            {/* ----------------- */}
            <div className="username field">  
              <label>Username</label>
              <input 
                value={this.state.username} 
                onChange={e => this.change(e)} 
                type="text" 
                name="username" 
              />
            </div>
            {/* ----------------- */}
            <div className="password field">
              <label>Password</label>
              <input 
                value={this.state.password}
                onChange={e => this.change(e)}
                type="password" 
                name="password" 
              />
            </div>
            <input onClick={e => this.onSubmit(e)} type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Login