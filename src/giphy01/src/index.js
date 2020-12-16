import axios from "axios";

const search = "cat";
const key = "ssCR8wE0aNO91sTn6xbsvCjkOplTab6M";
const limit = 3;

const url = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key="+ key +"&limit=$"+ limit;

axios.get(url).then(res => {
  console.log(res.data);
});


