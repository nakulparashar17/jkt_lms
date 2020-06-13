import React, { Component } from "react";
import ApiService from "../service/ApiService";

class EmployeeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            earnedleaves: 0,
        };
        this.saveEmployee = this.saveEmployee.bind(this);
        this.loadEmployee = this.loadEmployee.bind(this);
    }

    componentDidMount() {
        this.loadEmployee();
    }

    loadEmployee() {
        ApiService.fetchEmployeeById(window.localStorage.getItem("id")).then(
            (res) => {
                let employee = res.data.result;
                this.setState({
                    id: employee.id,
                    name: employee.name,
                    email: employee.email,
                    earnedleaves: employee.earnedleaves,
                });
            }
        );
    }

    onChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value,
        });

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            earnedleaves: this.state.earnedleaves,
        };
        ApiService.editEmployee(employee).then((res) => {
            this.setState({ message: "User added successfully." });
            this.props.history.push("/employees");
        });
    };
    render() {
        return ( <
            div >
            <
            h2 className = "text-center" > Edit Employee < /h2>{" "} <
            form >
            <
            div className = "form-group" >
            <
            label > UserId: < /label>{" "} <
            input type = "text"
            placeholder = "id"
            name = "id"
            className = "form-control"
            readonly = "true"
            defaultValue = { this.state.id }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label > Employee Name: < /label>{" "} <
            input type = "text"
            placeholder = "name"
            name = "name"
            className = "form-control"
            value = { this.state.name }
            onChange = { this.onChange }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label > Employee Email: < /label>{" "} <
            input type = "email"
            placeholder = "email"
            name = "email"
            className = "form-control"
            value = { this.state.email }
            onChange = { this.onChange }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label > Earned Leaves: < /label>{" "} <
            input type = "number"
            placeholder = "earnedleaves"
            name = "earnedleaves"
            className = "form-control"
            value = { this.state.earnedleaves }
            onChange = { this.onChange }
            />{" "} <
            /div>{" "} <
            button className = "btn btn-success"
            onClick = { this.saveEmployee } > { " " }
            Save { " " } <
            /button>{" "} <
            /form>{" "} <
            /div>
        );
    }
}

export default EmployeeEdit;