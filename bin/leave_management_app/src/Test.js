import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllEmployees from "./component/AllEmployees";
import AllLeaves from "./component/AllLeaves";
import AddEmployee from "./component/AddEmployee";
import AddLeave from "./component/AddLeave";
import EditEmployee from "./component/EditEmployee";
import EmployeeEdit from "./component/EmployeeEdit";

export default function Test() {
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
        Link to = "/" > Home < /Link>{" "} <
        /li>{" "} <
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
        Route path = "/editemployees/:id" >
        <
        EmployeeEdit / >
        <
        /Route>{" "} <
        Route path = "/" >
        <
        Test / >
        <
        /Route>{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /Router>
    );
}