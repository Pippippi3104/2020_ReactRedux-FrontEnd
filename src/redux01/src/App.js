import React from "react";
import { connect } from "react-redux";

const App = ({ number, plus, minus }) =>
  <h2 onClick={() => {
    plus(10);
  }}>
    App{number}
  </h2>;

const mapStateToProps = state => {
  return {
    number: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch({ type: "PLUS", payload: {num: num }});
    },
    minus: num => {
      dispatch({ type: "MINUS", payload: {num: num }});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

