import React from "react";

import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 0, title: "title0" },
                { id: 1, title: "title1" },
                { id: 2, title: "title2" },
                { id: 3, title: "title3" },
                { id: 4, title: "title4" },
            ],
            nextId: 0,
        }
    }

    render() {
        return (
            <div>
                <h2>TodoApp</h2>
                <AddTodo addTodo={this.addTodo}/>
                <List deleteTodo={this.deleteTodo} todos={this.state.todos} />
            </div>
        );
    }

    addTodo =title => {
        this.setState({ 
            todos: [...this.state.todos, { id: this.state.nextId + 1, title: title }] ,
            nextId: this.state.nextId + 1
        });
    };

    deleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo=>{
                return todo.id !== id
        })})
    }
}