import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const topics = [
  { topic: 'HTML', notes: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique ab aperiam. Illum, earum. Ab alias eveniet quia earum labore, mollitia autem? Reprehenderit, tempore autem.' },
  { topic: 'CSS', notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio? Voluptatem quia omnis animi. Ducimus, aperiam? Illum quae eaque tempora, minima dolorum omnis explicabo numquam.' },
  { topic: 'JavaScript', notes: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic cum illum totam, architecto, amet quo distinctio temporibus delectus dolorum excepturi commodi perferendis deserunt aperiam.' }

];

root.render(<Accordion topics={topics}/>);
