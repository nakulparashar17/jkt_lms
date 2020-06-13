import React, { Component } from "react";
import "../App.css";
import { Link, Redirect } from "react-router-dom";
import Test from "../Test";
import { Container, Input, Button, Label, FormGroup, Form } from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false;
        this.state = {
            email: "",
            password: "",
            loggedIn,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;

        if (email === "nakul@jktech.com" && password === "abc") {
            this.setState({
                loggedIn: true,
            });
        }
    }

    render() {
        const title = < h3 > Login Page < /h3>;

        if (this.state.loggedIn) {
            return <Redirect to = "/" / > ;
        }
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
            for = "email" > Username < /Label>{" "} <
            Input type = "email"
            name = "email"
            id = "email"
            value = { this.state.email }
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
            value = { this.state.password }
            id = "password"
            onChange = { this.handleChange } >
            < /Input>{" "} <
            /FormGroup>{" "} <
            /div>{" "} <
            FormGroup >
            <
            Button color = "primary"
            type = "submit" >
            Login { " " } <
            /Button>{" "} <
            Link to = "/addemployees"
            className = "btn btn-primary" > { " " }
            Register { " " } <
            /Link>{" "} <
            /FormGroup>{" "} <
            a href = "/forgot" > forgot password ? < /a>{" "} <
            /Form>{" "} <
            /Container>{" "} <
            /div>
        );
    }
}

export default Login;