import { combineReducers } from "redux";

import number from "./number";
import title from "./titile";
import day from "./day";

export default combineReducers({
    number,
    title,
    day,
});



