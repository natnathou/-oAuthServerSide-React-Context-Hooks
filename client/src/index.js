import React from "react"
import ReactDOM from "react-dom"
import { StateContext } from "./state/StateContext"
import App from "./components/App"


ReactDOM.render(
    <StateContext>
        <App/>
    </StateContext>,
    document.getElementById("root")
);