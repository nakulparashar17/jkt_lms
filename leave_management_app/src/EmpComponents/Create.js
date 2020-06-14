import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            earnedleaves: 0,
        };
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, earnedleaves } = this.state;

        axios
            .post("/employees", { name, email, password, earnedleaves })
            .then((result) => {
                this.props.history.push("/activeleaves");
            });
    };

    render() {
        const { name, email, password, earnedleaves } = this.state;
        return ( <
            div className = "container" >
            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading" >
            <
            center > < h2 className = "panel-title" > ADD EMPLOYEE < /h2></center > { " " } <
            /div>{" "} <
            div className = "panel-body" >
            <
            h4 > { " " } <
            Link to = "/list" > { " " } <
            span className = "glyphicon glyphicon-th-list" > < /span> Employees
            List { " " } <
            /Link>{" "} <
            /h4>{" "} <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label
            for = "isbn" > Name: < /label>{" "} <
            input type = "text"
            className = "form-control"
            name = "name"
            value = { name }
            onChange = { this.onChange }
            placeholder = "Name" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label
            for = "publisher" > Email: < /label>{" "} <
            input type = "email"
            className = "form-control"
            name = "email"
            value = { email }
            onChange = { this.onChange }
            placeholder = "Email Address" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label
            for = "password" > Password: < /label>{" "} <
            input type = "password"
            className = "form-control"
            name = "password"
            value = { password }
            onChange = { this.onChange }
            placeholder = "Password" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label
            for = "published_date" > Earned Leaves: < /label>{" "} <
            input type = "number"
            className = "form-control"
            name = "earnedleaves"
            value = { earnedleaves }
            onChange = { this.onChange }
            placeholder = "Earned Leaves" /
            >
            <
            /div>{" "} <
            button type = "submit"
            className = "btn btn-secondary" > { " " }
            Submit { " " } <
            /button>{" "} <
            /form>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default Create;