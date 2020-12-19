const initialState = [1, 2, 3, 4, 5];

const imageUrls = (state = initialState, actioin) => {
    switch (actioin.type) {
        case "RECIEVE_DATA":
            return "data";
        default:
            return state;
    }
};

export default imageUrls;

