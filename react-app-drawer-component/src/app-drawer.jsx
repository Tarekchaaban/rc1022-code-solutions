import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  }

  render() {
    if (!this.state.isOpen) {
      return <button onClick={this.handleClick}><i className="fa-solid fa-bars"></i></button>;
    } else {
      return (
        <div className="row">
          <div className="column-fifth">
            <h3 onClick={this.handleClick}>Menu</h3>
            <p onClick={this.handleClick}>About</p>
            <p onClick={this.handleClick}>Get Started</p>
            <p onClick={this.handleClick}>Sign In</p>
          </div>
          <div className="column-four-fifth" onClick={this.handleClick}></div>
        </div>

      );
    }
  }
}
