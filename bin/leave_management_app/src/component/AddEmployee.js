import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Input, Button, Label, FormGroup, Form } from "reactstrap";

class AddEmployee extends Component {
    emptyItem = {
        name: "",
        email: "",
        password: "",
        earnedleaves: 0,
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            Employees: [],
            item: this.emptyItem,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        const item = this.state.item;

        await fetch(`/employees`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/employees");
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item };
        item[name] = value;
        this.setState({ item });
        console.log(item);
    }
    render() {
        const title = < h3 > Add Employee < /h3>;
            //const {Categories} =this.state;
        return ( <
            div >
            <
            Container > { " " } { title } { " " } <
            Form onSubmit = { this.handleSubmit } >
            <
            div className = "row" >
            <
            FormGroup className = "col-md-4 mb-3" >
            <
            Label
            for = "name" > Employee Name < /Label>{" "} <
            Input type = "text"
            name = "name"
            id = "name"
            onChange = { this.handleChange }
            autoComplete = "name" >
            < /Input>{" "} <
            /FormGroup>{" "} <
            /div>{" "} <
            div className = "row" >
            <
            FormGroup className = "col-md-4 mb-3" >
            <
            Label
            for = "email" > Employee Email < /Label>{" "} <
            Input type = "email"
            name = "email"
            id = "email"
            onChange = { this.handleChange } >
            < /Input>{" "} <
            /FormGroup>{" "} <
            /div>{" "} <
            div className = "row" >
            <
            FormGroup className = "col-md-4 mb-3" >
            <
            Label
            for = "password" > Password < /Label>{" "} <
            Input type = "password"
            name = "password"
            id = "password"
            onChange = { this.handleChange } >
            < /Input>{" "} <
            /FormGroup>{" "} <
            /div>{" "} <
            div className = "row" >
            <
            FormGroup className = "col-md-4 mb-3" >
            <
            Label
            for = "earnedleaves" > Employee Earned Leaves < /Label>{" "} <
            Input type = "number"
            name = "earnedleaves"
            id = "earnedleaves"
            onChange = { this.handleChange } >
            < /Input>{" "} <
            /FormGroup>{" "} <
            /div>{" "} <
            FormGroup >
            <
            Button color = "primary"
            type = "submit" >
            Save { " " } <
            /Button>{" "} <
            Button color = "secondary"
            tag = { Link }
            to = "/addemployees" >
            Cancel { " " } <
            /Button>{" "} <
            /FormGroup>{" "} <
            /Form>{" "} <
            /Container>{" "} <
            /div>
        );
    }
}
export default AddEmployee;