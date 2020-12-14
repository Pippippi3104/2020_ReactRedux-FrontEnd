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
          {member.name} {member.age}
          aaa
        </li>
      );
    });
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
    /* const url = "https://jsonplaceholder.typicode.com/todos";

    axios.get(url).then(res => {
      console.log(res.data[0]);
      const array = {member: res.data};
      this.setState(array);
    }); */

    var array = require( "./data.json" );
    console.log(array);
    this.setState(array);
  }
}

render(<App />, document.getElementById("root"));

