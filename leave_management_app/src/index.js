import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Appp from "./EmpComponents/Appp";
import "./App.css";
import Edit from "./EmpComponents/Edit";
import Create from "./EmpComponents/Create";
import Show from "./EmpComponents/Show";
import ApplyLeave from "./LeaveComponent/ApplyLeave";
import ActiveLeaves from "./LeaveComponent/ActiveLeaves";
import ShowLeave from "./LeaveComponent/ShowLeave";
import Approved from "./LeaveComponent/Approved";
import Rejected from "./LeaveComponent/Rejected";

ReactDOM.render( <
    Router >
    <
    div >
    <
    Route exact path = "/"
    component = { Appp }
    />{" "} <
    Route path = "/edit/:id"
    component = { Edit }
    />{" "} <
    Route path = "/create"
    component = { Create }
    />{" "} <
    Route path = "/show/:id"
    component = { Show }
    />{" "} <
    Route path = "/showleave/:id"
    component = { ShowLeave }
    />{" "} <
    Route path = "/apply/:id"
    component = { ApplyLeave }
    />{" "} <
    Route path = "/activeleaves"
    component = { ActiveLeaves }
    />{" "} <
    Route path = "/approved"
    component = { Approved }
    />{" "} <
    Route path = "/rejected"
    component = { Rejected }
    />{" "} <
    /div>{" "} <
    /Router>,
    document.getElementById("root")
);