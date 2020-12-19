import React from "react";
import { render } from "react-dom";

import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {member: []}
  }

  memberList(list) {
    const memberList = list.map((member, index) => {
      console.log(index);
      console.log(member.name);
      console.log(member.age);
      return (
        <li>
          {index} {member.name} {member.age}
        </li>
      );
    });
    return <ul>{memberList}</ul>;
  }

  render() {
    console.log(this.state.member);
    return (
      <div>
        <button onClick={this.getJson}>Get Json</button>
        {this.memberList(this.state.member)}
      </div>
    )
  }

  getJson = () => {
    const url = "https://jsondata.okiba.me/v1/json/lXGHM201219023806";

    axios.get(url).then(res => {
      console.log(res.data);
      const array = (res.data);
      this.setState(array);
    });

    /* var array = require( "./data.json" );
    console.log(array);
    this.setState(array); */
  }
}

render(<App />, document.getElementById("root"));

