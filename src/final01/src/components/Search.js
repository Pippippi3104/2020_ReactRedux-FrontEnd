import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "test" }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} onChange={this.handleChange} />
                    <input type="submit" value="Find your GIFs" />
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
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }
}

export default Search;