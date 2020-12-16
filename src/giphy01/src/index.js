import axios from "axios";

const search = "cat";
const key = "ssCR8wE0aNO91sTn6xbsvCjkOplTab6M";
const limit = 3;

const url = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key="+ key +"&limit=$"+ limit;

axios.get(url).then(res => {
  console.log(res.data);

  const data = res.data.data;
  const imageUrl = data[0].images.downsized.url;
  console.log(imageUrl)

  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});


