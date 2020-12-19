const initialState = "Find your GIFs";

const imageUrls = (state = initialState, action) => {
    switch (action.type) {
        case "START_REQUEST":
            return "Wait...";

        case "RECEIVE_DATA":
            return initialState;

        default:
            return state;
    }
};

export default imageUrls;

