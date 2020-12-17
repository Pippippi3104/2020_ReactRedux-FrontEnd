import App from "../components/App";
import { connect } from "react-redux";

import { minus, plus } from "../actions/index";

const mapStateToProps = state => {
    return {
      number: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      plus: num => {
        dispatch(plus(num));
      },
      minus: num => {
        dispatch(minus(num));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);