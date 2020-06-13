import React, { Component } from "react";
import { Table, Container, Button } from "reactstrap";
import "../App.css";
import { Link, withRouter } from "react-router-dom";
import EmployeeEdit from "./EmployeeEdit";

class AllEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Employees: [],
            message: null,
        }

        this.editEmployee = this.editEmployee.bind(this);
    }

    editEmployee(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push("/editemployees");
    }


    async componentDidMount() {
        const responseExp = await fetch("/employees");
        const bodyExp = await responseExp.json();
        this.setState({ Employees: bodyExp, isLoading: false });
        console.log(bodyExp);
    }
    async remove(id) {
        await fetch(`/employees/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(() => {
            let updatedEmployees = [...this.state.Employees].filter(
                (i) => i.id !== id
            );
            this.setState({ Employees: updatedEmployees });
        });
    }

    render() {
        const { Employees, isLoading } = this.state;
        if (isLoading) return <div > Loading... < /div>;
        let rows = Employees.map((employee) => ( <
            tr >
            <
            td > { employee.id } < /td> <td> {employee.name} </td > { " " } <
            td > { employee.email } < /td> <td> {employee.earnedleaves} </td > { " " } <
            td >
            <
            Button size = "sm"
            color = "danger"
            onClick = {
                () => this.remove(employee.id) } >
            Delete { " " } <
            /Button>{" "} <
            /td>{" "} <
            td >
            <
            button className = "btn btn-success"
            onClick = {
                () => this.editEmployee(employee.id) } >
            { " " }
            Edit <
            /button> <
            /td>{" "} <
            td >
            <
            Link to = "/addleaves"
            className = "btn btn-primary" > { " " }
            Apply { " " } <
            /Link>{" "} <
            /td>{" "} <
            /tr>
        ));
        return ( <
            Container >
            <
            h3 > Employee List < /h3>{" "} <
            Table className = "mt-4" >
            <
            thead >
            <
            tr >
            <
            th > Id < /th> <th width="20%"> Name </th > { " " } <
            th width = "30%" > Email < /th> <th> Earned Leaves </th > { " " } <
            th > Action < /th> <th> Edit </th > < th > Apply Leaves < /th>{" "} <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { rows } < /tbody>{" "} <
            /Table>{" "} <
            /Container>
        );
    }
}

export default withRouter(AllEmployees);