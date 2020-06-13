import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Input, Button, Label, FormGroup, Form } from "reactstrap";
class EmpLogin extends Component {
    emptyItem = {
        email: "",
        password: "",
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

        await fetch(`/emplogin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/dashboard");
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
        const title = < h3 > Login < /h3>;
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
            for = "email" > UserEmail < /Label>{" "} <
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
            FormGroup >
            <
            Button color = "primary"
            type = "submit" >
            login { " " } <
            /Button>{" "} <
            Button color = "secondary"
            tag = { Link }
            to = "/login" >
            Cancel { " " } <
            /Button>{" "} <
            /FormGroup>{" "} <
            /Form>{" "} <
            /Container>{" "} <
            /div>
        );
    }
}

export default EmpLogin;