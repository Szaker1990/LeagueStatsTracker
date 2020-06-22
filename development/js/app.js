import "../scss/style.scss"
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MainPage} from "./mainPage";

const App = () => <MainPage/>


ReactDOM.render(<App/>, document.getElementById("app"));