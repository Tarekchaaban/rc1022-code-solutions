import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const containers = document.querySelector('#root');
const root = ReactDOM.createRoot(containers);

root.render(<CustomButton />);
