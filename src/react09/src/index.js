import React from 'react';
import { render } from 'react-dom';

class Human extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return <h2>test</h2>;
  }
}

render(<Human />, document.getElementById("root"));

