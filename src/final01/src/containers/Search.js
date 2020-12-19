import Search from "../components/Search";
import { connect } from "react-redux";

import getUrls from "../actions/getUrls";

const mapDispatchToProps = dispatch => {
    return {
        getUrls: word => {
            dispatch(getUrls(word));
        }
    };
}

export default connect(null, mapDispatchToProps)(Search);

