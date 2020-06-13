import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import EmployeeLogin from "./component/EmployeeLogin";
import EmpLogin from "./component/EmpLogin";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";
import {
    getToken,
    removeUserSession,
    setUserSession,
} from "./component/Common";
import axios from "axios";

function App() {
    const [authLoading, setAuthLoading] = useState(true);
    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }
        axios
            .get(`http://localhost:8000/verifyToken?token=${token}`)
            .then((response) => {
                setUserSession(response.data.token, response.data.user);
                setAuthLoading(false);
            })
            .catch((error) => {
                removeUserSession();
                setAuthLoading(false);
            });
    }, []);

    if (authLoading && getToken()) {
        return <div className = "content" > Checking Authentication... < /div>;
    }

    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        div >
        <
        div className = "header" >
        <
        NavLink exact activeClassName = "active"
        to = "/" >
        Home { " " } <
        /NavLink>{" "} <
        NavLink activeClassName = "active"
        to = "/login" >
        Login { " " } <
        /NavLink>{" "} <
        small > < /small>{" "} <
        NavLink activeClassName = "active"
        to = "/dashboard" >
        Dashboard { " " } <
        /NavLink>{" "} <
        small > < /small>{" "} <
        /div>{" "} <
        div className = "content" >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        />{" "} <
        PublicRoute path = "/login"
        component = { EmpLogin }
        />{" "} <
        PrivateRoute path = "/dashboard"
        component = { Dashboard }
        />{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /div>{" "} <
        /BrowserRouter>{" "} <
        /div>
    );
}

export default App;