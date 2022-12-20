import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = [
  '../images/angrycat.png',
  '../images/elfchild.png',
  '../images/patrick.png',
  '../images/pikachu.png',
  '../images/spongebob.png'
];

root.render(<Carousel images={images}/>);
