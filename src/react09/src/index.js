import React from 'react';
import { render } from 'react-dom';

class Human extends React.Component{
  constructor(props) {
    super(props)
    this.state = { name:"Nakanishi" };
  }

  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {this.state.name}{this.props.age}
      </h2>
    );
  }

  onButtonClick = () => {
    this.setState({ name: this.state.name + "san" });
  }
}

render(<Human age="30" />, document.getElementById("root"));

