import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import MenuComponent from "./MenuComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Home from "./Home.";
import Appp from "../EmpComponents/Appp";
import Edit from "../EmpComponents/Edit";
import Create from "../EmpComponents/Create";
import Show from "../EmpComponents/Show";
import ApplyLeave from "../LeaveComponent/ApplyLeave";
import ActiveLeaves from "../LeaveComponent/ActiveLeaves";
import ShowLeave from "../LeaveComponent/ShowLeave";
import Approved from "../LeaveComponent/Approved";
import Rejected from "../LeaveComponent/Rejected";
import Manager from "../EmpComponents/Manager";
class InstructorApp extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <MenuComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <Route exact path="/list" component={Appp} />{" "}
              <Route path="/edit/:id" component={Edit} />{" "}
              <Route path="/create" component={Create} />{" "}
              <Route path="/show/:id" component={Show} />{" "}
              <Route path="/showleave/:id" component={ShowLeave} />{" "}
              <Route path="/apply/:id" component={ApplyLeave} />{" "}
              <Route path="/activeleaves" component={ActiveLeaves} />{" "}
              <Route path="/approved" component={Approved} />{" "}
              <Route path="/rejected" component={Rejected} />{" "}
              <Route path="/allmanager" component={Manager} />{" "}
              <AuthenticatedRoute
                path="/logout"
                exact
                component={LogoutComponent}
              />
              <AuthenticatedRoute path="/home" exact component={Home} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}
export default InstructorApp;
