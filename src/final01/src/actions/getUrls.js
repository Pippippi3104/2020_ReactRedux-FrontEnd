import giphyAPI from "../API/giphyAPI";

const startRequest = () => {
    return {
        type: "START_REQUEST",
    };
};

const receiveData = data => {
    return {
        type: "RECEIVE_DATA",
        payload: data
    };
};

const getUrls = word => {
    return dispatch => {
        dispatch(startRequest());
        giphyAPI(word).then(res => {
            const data = res.data.data;
            const imageUrlList = data.map(item => item.images.downsized.url);
            console.log(imageUrlList);
            dispatch(receiveData(imageUrlList));
        })
    };
};

export default getUrls;