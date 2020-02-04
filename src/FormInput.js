import React, { Component } from "react";

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your pasword"
            value={password}
            onChange={this.handleChange}
          />

          <button type="button">Login</button>
        </form>
      </div>
    );
  }
}
