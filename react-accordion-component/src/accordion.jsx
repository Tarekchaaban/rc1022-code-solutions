import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      clicked: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.props.topics = [
      { topic: 'HTML', notes: 'blahblahblah' },
      { topic: 'CSS', notes: 'blahblahblah' },
      { topic: 'JavaScript', notes: 'blahblahblah' }

    ];
  }

  handleClick(event) {
    this.setState({ isClicked: true });
    const index = event.target.key;
    this.setState({ clicked: index });
  }

  render() {
    if (!this.state.isClicked) {
      return this.props.topics.map((item, index) => {
        return (
          <div key={index}>
            <div className="border" onClick={this.handleClick}>
              <h1 className="center">{item.topic}</h1>
            </div>
            <div className="border">
              <p className="center">{item.notes}</p>
            </div>
          </div>
        );
      });
    }
  }
}
