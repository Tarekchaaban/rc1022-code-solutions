import React from 'react';
/* export default class Accordion extends React.Component {
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
} */

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: null
    };
    this.setVisible = this.setVisible.bind(this);
    this.props.topics = [
      { topic: 'HTML', notes: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique ab aperiam. Illum, earum. Ab alias eveniet quia earum labore, mollitia autem? Reprehenderit, tempore autem.' },
      { topic: 'CSS', notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio? Voluptatem quia omnis animi. Ducimus, aperiam? Illum quae eaque tempora, minima dolorum omnis explicabo numquam.' },
      { topic: 'JavaScript', notes: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic cum illum totam, architecto, amet quo distinctio temporibus delectus dolorum excepturi commodi perferendis deserunt aperiam.' }

    ];
  }

  setVisible(index) {
    if (this.state.visible === null) {
      this.setState({ visible: index });
    } else if (this.state.visible === index) {
      this.setState({ visible: null });
    } else {
      this.setState({ visible: index });
    }
  }

  render() {
    return (
      <div>
        {this.props.topics.map((topic, index) => (
          <div key={topic.topic}>
            <div className="border" onClick={() => this.setVisible(index)}>
              <h1 className="center">{topic.topic}</h1>
            </div>
            {index === this.state.visible && <div className='border center'>{topic.notes}</div>}
          </div>
        ))}
      </div>
    );
  }
}
