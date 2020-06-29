import "../scss/style.scss"
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MainPage} from "./Components/mainPage";

const App = () => {
    return(
        <MainPage/>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));