import React from "react";

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "test" }
    }

    render() {
        return (
            <div>
                <h2>AddTodo</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} onChange={this.handleChange} />
                    <input type="submit" value="Add to todo list" />
                </form>
            </div>
        );
    }

    handleChange = event => {
        const title = event.target.value;
        console.log(title);

        this.setState({ title: title });
    };

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state.title);
    }
}