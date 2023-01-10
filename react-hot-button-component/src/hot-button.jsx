import React from 'react';
export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    if (this.state.counter <= 3) {
      return <button className='three' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 6) {
      return <button className='six' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 9) {
      return <button className='nine' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 12) {
      return <button className='twelve' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 15) {
      return <button className='fifteen' onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className='eighteen' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
