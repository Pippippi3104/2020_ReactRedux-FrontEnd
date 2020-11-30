import React from "react";
import { render } from "react-dom";

const title = "Hello World."
const body = "This is body text."

const returnStrings = () => {
    return "return Strings."
}

var reactElement = (
    <div>
        <p>{returnStrings()}</p>
        <p>{Math.random()}</p>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
)

render(reactElement, document.getElementById("root"));