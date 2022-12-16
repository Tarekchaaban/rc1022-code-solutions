import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input name='username' type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
          <label>Password: </label>
          <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
