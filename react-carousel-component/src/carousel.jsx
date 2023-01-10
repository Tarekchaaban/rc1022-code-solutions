import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '', currentIndex: -1, interval: '' };
    this.handleImage = this.handleImage.bind(this);
    this.handleDots = this.handleDots.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
  }

  handleImage() {
    const image = this.props.images[this.state.currentIndex];
    if (this.state.currentIndex === this.props.images.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ image, currentIndex: this.state.currentIndex + 1 });
    }
  }

  handleDots(img, index) {
    if (index === this.state.currentIndex) {
      return <i className="fa-solid fa-circle circle zero" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    } else {
      return <i className="fa-regular fa-circle circle zero" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    }
  }

  changeSlide(event, index) {
    clearInterval(this.state.interval);
    this.setState({ currentIndex: index, interval: setInterval(this.handleImage, 3000) });
    if (index) {
      return <i className="fa-solid fa-circle circle zero" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    } else {
      return <i className="fa-regular fa-circle circle zero" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    }
  }

  handleRight() {
    clearInterval(this.state.interval);
    if (this.state.currentIndex === this.props.images.length - 1) {
      this.setState({ currentIndex: 0, interval: setInterval(this.handleImage, 3000) });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1, interval: setInterval(this.handleImage, 3000) });

    }
  }

  handleLeft() {
    clearInterval(this.state.interval);
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.props.images.length - 1, interval: setInterval(this.handleImage, 3000) });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1, interval: setInterval(this.handleImage, 3000) });

    }
  }

  render() {
    const image = this.props.images[this.state.currentIndex];
    const dots = this.props.images.map(this.handleDots);
    if (this.state.image === '') {
      this.setState({ image, currentIndex: this.state.currentIndex + 1 });
      this.setState({ interval: setInterval(this.handleImage, 3000) });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="column-fourth">
            <i className="fa-solid fa-chevron-left chevron" onClick={this.handleLeft}></i>
          </div>
          <div className="column-half">
            <img className="display-image" src={image}></img>
          </div>
          <div className="column-fourth">
            <i className="fa-solid fa-chevron-right chevron" onClick={this.handleRight}></i>
          </div>
        </div>
        <div className="row circles">
          <div className="column-full">
            {dots}
          </div>
        </div>
      </div>
    );

  }
}
