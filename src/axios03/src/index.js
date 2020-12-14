import React from "react";
import { render } from "react-dom";

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

axios.get(url).then(res => {
  console.log(res.data);
});

const App = () => <h2>App</h2>

render(<App />, document.getElementById("root"));

