import React from "react";
import { render } from "react-dom";

import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h2>App</h2>
  }

  getJson = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    axios.get(url).then(res => {
      console.log(res.data);
    });
  }
}

render(<App />, document.getElementById("root"));

