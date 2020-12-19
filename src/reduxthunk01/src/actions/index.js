import axios from "axios";


export const plus = num => {
    return { type: "PLUS", payload: { num: num }};
};

export const minus = num => {
    return { type: "MINUS", payload: { num: num }};
};

export const asyncMinus = num => {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: "MINUS", payload: { num: num }});
        }, 1000);
    };
};

export const getJson = () => {
    return dispatch => {
        const url = "https://jsondata.okiba.me/v1/json/lXGHM201219023806";

        axios.get(url).then(res => {
            console.log(res.data);
        });
    };
};



