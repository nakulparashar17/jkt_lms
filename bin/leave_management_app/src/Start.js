import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";

class Start extends Component {
    state = {};
    render() {
        return ( <
            Router >
            <
            div >
            <
            nav >
            <
            h1 > Leave Management Application < /h1>{" "} <
            ul >
            <
            li >
            <
            Link to = "/login" > Login < /Link>{" "} <
            /li>{" "} <
            /ul>{" "} <
            /nav>{" "} <
            /div>{" "} <
            Switch >
            <
            Route path = "/login" >
            <
            Login / >
            <
            /Route>{" "} <
            /Switch>{" "} <
            /Router>
        );
    }
}

export default Start;