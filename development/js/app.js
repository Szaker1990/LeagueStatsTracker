import "../scss/style.scss"
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MainPage} from "./Components/mainPage";

const App = () => <MainPage/>


ReactDOM.render(<App/>, document.getElementById("app"));