import React from 'react';
import ReactDOM, { render } from 'react-dom';

const ReturnReactElement = ({name, music}) => {
  return <h2>{name} love {music}</h2>;
}

render(<ReturnReactElement name="nakanishi" music="JAZZ" />, document.getElementById("root")); 
