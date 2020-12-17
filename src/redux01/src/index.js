import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import rootReducer from "./reducers";

import { Provider } from "react-redux";

import App from "./containers/App";

const store = createStore(rootReducer);

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));

