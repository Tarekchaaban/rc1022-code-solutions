import React from 'react';
export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      password: ''
    };
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.password.length === 0) {
      return (
        <div>
          <form>
            <label className="block">Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
            <i className="fa-solid fa-xmark"></i>
            <p className="required-text">A password is required.</p>
          </form>
        </div>
      );

    } else if (this.state.password.length < 8) {
      return (
        <div>
          <form>
            <label className="block">Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
            <i className="fa-solid fa-xmark"></i>
            <p className="required-text">Your password is too short.</p>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form>
            <label className="block">Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
            <i className="fa-solid fa-check"></i>
          </form>
        </div>
      );
    }
  }
}
