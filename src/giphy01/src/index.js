import React from "react";
import { render } from "react-dom";

import axios from "axios";

import { Search } from "./component/Search"

const search = "cat";
const key = "ssCR8wE0aNO91sTn6xbsvCjkOplTab6M";
const limit = 10;

const url = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key="+ key +"&limit=$"+ limit;

class App extends React.Component {
  constructor() {
    super();
    this.state = {giphyList: []};
  }

  renderImageList(list) {
    const imageList = list.map(url => {
      return (
        <li>
          <img src={url} />
        </li>);
    });

    return <ul>{imageList}</ul>;
  }

  componentDidMount() {
    this.giphyApi();
  }

  render() {
    console.log(this.state.giphyList);
    return (
      <div>
        <Search />
        {this.renderImageList(this.state.giphyList)}
      </div>);
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

