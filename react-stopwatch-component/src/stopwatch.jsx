import React from 'react';
export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounting: false,
      counter: 0,
      intervalId: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleWatchClick = this.handleWatchClick.bind(this);
  }

  handleButtonClick() {
    if (!this.state.isCounting) {
      this.setState({ isCounting: true });
      this.setState({
        intervalId: setInterval(() => {
          this.setState({ counter: this.state.counter + 1 });
        }, 1000)
      });
    } else {
      this.setState({ isCounting: false });
      clearInterval(this.state.intervalId);
    }
  }

  handleWatchClick() {
    if (!this.state.isCounting) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    if (this.state.isCounting) {
      return (
        <div>
          <div className="circle" onClick={this.handleWatchClick}>
            <p className="counter">{this.state.counter}</p>
          </div>
          <i className="fa-solid fa-pause" onClick={this.handleButtonClick}></i>
        </div>
      );
    } else {
      return (
        <div>
          <div className="circle" onClick={this.handleWatchClick}>
            <p className="counter">{this.state.counter}</p>
          </div>
          <i className="fa-solid fa-play" onClick={this.handleButtonClick}></i>
        </div>
      );
    }
  }
}
