import "../scss/style.scss"
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MainPage} from "./Components/mainPage";
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import {PlayerCard} from "./Components/PlayerCard";
import {ServerError} from "./Components/ServerError";

const App = () => {
    return (
        <HashRouter>
            <>
                <Route exact path='/' component={MainPage}/>
                <Route path='/summoner' component={PlayerCard}/>
                <Route path='/error' component={ServerError}/>
            </>

        </HashRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));