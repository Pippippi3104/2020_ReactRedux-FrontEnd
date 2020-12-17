import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => <h2>App</h2>;

render(<App />, document.getElementById("root"));

