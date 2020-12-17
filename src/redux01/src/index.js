import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import reducer from "./reducers/reducer";

import { Provider } from "react-redux";

import App from "./containers/App";

const store = createStore(reducer);

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));

