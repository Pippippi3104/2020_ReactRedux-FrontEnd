import React from 'react';
import { render } from 'react-dom';

import axios from "axios";

class App extends React.Component {
  render() {
    return <button onClick={this.handleDo}>
      Do
    </button>;
  }

  handleDo = () => {
    const url = "https://developer.mozilla.org/en-US/docs/Web/HTML"

    axios.get(url).then(res => {
      console.log(res.data);
      document.body.innerHTML = res.data;
    });
  };
}

render(<App />, document.getElementById("root"));


