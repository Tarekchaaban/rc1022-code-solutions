import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    /* const topics = [
      { topic: 'HTML', notes: 'blahblahblah' },
      { topic: 'CSS', notes: 'blahblahblah' },
      { topic: 'JavaScript', notes: 'blahblahblah' }

    ]; */
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (!this.state.isClicked) {
      return this.props.topics.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.topic}</h1>
            <p>{item.notes}</p>
          </div>
        );
      });
    }
  }
}
