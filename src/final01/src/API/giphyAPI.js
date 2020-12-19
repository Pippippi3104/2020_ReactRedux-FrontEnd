import axios from "axios";

const giphyAPI = word => {
    const search = word;
    const key = "ssCR8wE0aNO91sTn6xbsvCjkOplTab6M";
    const limit = 10;
    const url = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key="+ key +"&limit=$"+ limit;

    return axios.get(url)
  };

  export default giphyAPI;