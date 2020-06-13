import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeesDataService from "../service/Employees.service";
export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchId = this.onChangeSearchId.bind(this);
        this.retrieveEmployees = this.retrieveEmployees.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveEmployee = this.setActiveEmployee.bind(this);

        this.searchId = this.searchId.bind(this);

        this.state = {
            employees: [],
            currentEmployee: null,
            currentIndex: -1,
            searchId: "",
        };
    }

    componentDidMount() {
        this.retrieveEmployees();
    }

    onChangeSearchId(e) {
        const searchId = e.target.value;

        this.setState({
            searchId: searchId,
        });
    }

    retrieveEmployees() {
        EmployeesDataService.getAll()
            .then((response) => {
                this.setState({
                    employees: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveEmployees();
        this.setState({
            currentEmployee: null,
            currentIndex: -1,
        });
    }

    setActiveEmployee(employee, index) {
        this.setState({
            currentEmployee: employee,
            currentIndex: index,
        });
    }

    searchId() {
        EmployeesDataService.get(this.state.searchId)
            .then((response) => {
                this.setState({
                    employees: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { searchId, employees, currentEmployee, currentIndex } = this.state;

        return ( <
            div className = "list row" >
            <
            div className = "col-md-8" >
            <
            div className = "input-group mb-3" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "Search by Employee Id"
            value = { searchId }
            onChange = { this.onChangeSearchId }
            />{" "} <
            div className = "input-group-append" >
            <
            button className = "btn btn-outline-secondary"
            type = "button"
            onClick = { this.searchId } >
            Search { " " } <
            /button>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            div className = "col-md-6" >
            <
            h4 > Employees List < /h4>{" "} <
            ul className = "list-group" > { " " } {
                employees &&
                    employees.map((employee, index) => ( <
                        li className = {
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                        }
                        onClick = {
                            () => this.setActiveEmployee(employee, index) }
                        key = { index } >
                        { employee.id } { " " } <
                        /li>
                    ))
            } { " " } <
            /ul>{" "} <
            /div>{" "} <
            div className = "col-md-6" > { " " } {
                currentEmployee ? ( <
                    div >
                    <
                    h4 > Employee < /h4>{" "} <
                    div >
                    <
                    label >
                    <
                    strong > Name: < /strong>{" "} <
                    /label>{" "} { currentEmployee.empName } { " " } <
                    /div>{" "} <
                    div >
                    <
                    label >
                    <
                    strong > Email: < /strong>{" "} <
                    /label>{" "} { currentEmployee.empEmailId } { " " } <
                    /div>{" "} <
                    div >
                    <
                    label >
                    <
                    strong > Earned Leaves: < /strong>{" "} <
                    /label>{" "} { currentEmployee.empLeaveEarned ? "approved" : "rejected" } { " " } <
                    /div>{" "} <
                    Link to = { "/employeess/" + currentEmployee.id }
                    className = "badge badge-warning" >
                    Edit { " " } <
                    /Link>{" "} <
                    /div>
                ) : ( <
                    div >
                    <
                    br / >
                    <
                    p > Please click on a Employee... < /p>{" "} <
                    /div>
                )
            } { " " } <
            /div>{" "} <
            /div>
        );
    }
}