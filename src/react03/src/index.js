import React from 'react';
import ReactDOM, { render } from 'react-dom';

const returnReactElement = () => {
  return <h2>text</h2>
}

const returnReactElement2 = () => <h2>text2</h2>

const returnReactElement3 = (hello) => <h2>{hello}</h2>

const returnReactElement4 = (no, name) => {
  const newStrings = name + "'s number is" + no + "."
  return <h2>{newStrings}</h2>
}

render(returnReactElement4("#1", "nakanishi"), document.getElementById("root"));
