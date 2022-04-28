import React, { Component } from 'react';

class LoginDemo extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Login</h1>

        <div className='container'>  <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"></input>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="text" className="form-control" id="password" placeholder="Enter password"></input>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form></div>
      </div>
    );
  }
}

export default LoginDemo;