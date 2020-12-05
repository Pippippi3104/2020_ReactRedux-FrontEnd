import React from 'react';
import { render } from 'react-dom';

const todos = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
  { id: 3, title: "title3" },
  { id: 4, title: "title4" }, 
]

const deleteTargetId = 4;

const deletedArray = todos.filter(todo => (todo.id !== deleteTargetId));

console.log(deletedArray);

const Todos = () => {
  return <h2>todo</h2>
};

render(<Todos todos={todos} />, document.getElementById("root"));


