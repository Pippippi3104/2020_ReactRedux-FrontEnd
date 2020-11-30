import React from 'react';
import ReactDOM, { render } from 'react-dom';

const returnReactElement = () => {
  return <h2>text</h2>
}

render(returnReactElement(), document.getElementById("root"));
