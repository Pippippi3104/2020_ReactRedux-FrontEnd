import React from "react";
import { render } from "react-dom";

import axios from "axios";

const search = "cat";
const key = "ssCR8wE0aNO91sTn6xbsvCjkOplTab6M";
const limit = 3;

const url = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key="+ key +"&limit=$"+ limit;

class App extends React.Component {
  constructor() {
    super();
    this.state = {giphyList: []};
  }

  componentDidMount() {
    this.giphyApi();
  }

  render() {
    console.log(this.state.giphyList);
    return <div>app</div>
  }

  giphyApi() {
    axios.get(url).then(res => {
      console.log(res.data);
    
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      console.log(imageUrlList)

      this.setState({ giphyList: imageUrlList});
    });
  }
}

render(<App />, document.getElementById("root"));

