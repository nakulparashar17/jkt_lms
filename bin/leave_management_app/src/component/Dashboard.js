import React from "react";
import { getUser, removeUserSession } from "./Common";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllEmployees from "./AllEmployees";
import AllLeaves from "./AllLeaves";
import AddLeave from "./AddLeave";
import EmployeeEdit from "./EmployeeEdit";
import AddEmployee from "./AddEmployee";

function Dashboard(props) {
    const user = getUser();
    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push("/login");
    };

    return ( <
        Router >
        <
        div >
        <
        input type = "button"
        onClick = { handleLogout }
        value = "Logout" / >
        <
        /div>{" "} <
        div >
        <
        nav >
        <
        h1 > Leave Management Application < /h1>{" "} <
        ul >
        <
        li >
        <
        Link to = "/employees" > Employees < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/leaves" > Leaves < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/addemployees" > Add Employees < /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /nav>{" "} {
            /* A <Switch> looks through its children <Route>s and
                                              renders the first one that matches the current URL. */
        } { " " } <
        Switch >
        <
        Route path = "/employees" >
        <
        AllEmployees / >
        <
        /Route>{" "} <
        Route path = "/leaves" >
        <
        AllLeaves / >
        <
        /Route>{" "} <
        Route path = "/addleaves" >
        <
        AddLeave / >
        <
        /Route>{" "} <
        Route path = "/addemployees" >
        <
        AddEmployee / >
        <
        /Route>{" "} <
        Route path = "/editemployees" >
        <
        EmployeeEdit / >
        <
        /Route>{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /Router>
    );
}

export default Dashboard;