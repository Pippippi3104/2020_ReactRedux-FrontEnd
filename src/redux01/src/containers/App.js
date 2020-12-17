import App from "../components/App";
import { connect } from "react-redux";

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