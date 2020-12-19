import giphyAPI from "../API/giphyAPI";

const receiveData = data => {
    return {
        type: "RECEIVE_DATA",
        payload: data
    };
};

const getUrls = word => {
    return dispatch => {
        giphyAPI(word).then(res => {
            const data = res.data.data;
            const imageUrlList = data.map(item => item.images.downsized.url);
            console.log(imageUrlList);
            dispatch(receiveData(imageUrlList));
        })
    };
};

export default getUrls;