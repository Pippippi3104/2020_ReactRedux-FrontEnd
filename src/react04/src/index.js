import React from 'react';
import ReactDOM, { render } from 'react-dom';

const ReturnReactElement = (props) => {
  console.log(props);
  return <h2>{props.name} love {props.music}</h2>;
}

render(<ReturnReactElement name="nakanishi" music="JAZZ" />, document.getElementById("root")); 
