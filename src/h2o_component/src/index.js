import React from 'react';
import { render } from 'react-dom';

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  render() {
    return (
      <div>
        <h2>{ this.state.temp }</h2>
      </div>
    );
  }
}

render(<H2O />, document.getElementById("root"));

