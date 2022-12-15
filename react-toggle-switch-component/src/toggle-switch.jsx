import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false });
    } else {
      this.setState({ isToggled: true });
    }
  }

  render() {
    if (this.state.isToggled) {
      return (
        <div>
          <button className='on relative' onClick={this.handleToggle}>
            <button className='on-two' onClick={this.handleToggle}></button>
          </button>
          <p className='on-label'>ON</p>
        </div>
      );
    } else {
      return (
        <div>
          <button className='off relative' onClick={this.handleToggle}>
            <button className='off-two' onClick={this.handleToggle}></button>
          </button>
          <p className='off-label'>OFF</p>
        </div>
      );
    }
  }
}
