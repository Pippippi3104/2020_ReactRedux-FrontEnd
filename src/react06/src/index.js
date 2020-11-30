import React from 'react';
import { render } from 'react-dom';

//patarns of export default
import ClassComponent1 from "./ClassComponent1";
import ClassComponent2 from "./ClassComponent2";

//patarns of not export default
import { ClassComponent3 } from "./ClassComponent3";

render(
  <div>
    <ClassComponent1 />
    <ClassComponent2 />
    <ClassComponent3 />
  </div>,
  document.getElementById("root")
);

