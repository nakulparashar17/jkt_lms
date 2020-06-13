import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
        };
    }

    componentDidMount() {
        axios.get("/employees/" + this.props.match.params.id).then((res) => {
            this.setState({ employee: res.data });
            console.log(this.state.employee);
        });
    }

    onChange = (e) => {
        const state = this.state.employee;
        state[e.target.name] = e.target.value;
        this.setState({ employee: state });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, earnedleaves } = this.state.employee;

        axios
            .put("/employees/" + this.props.match.params.id, {
                name,
                email,
                password,
                earnedleaves,
            })
            .then((result) => {
                this.props.history.push("/show/" + this.props.match.params.id);
            });
    };

    render() {
        return ( <
            div className = "container" >
            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading" >
            <
            h3 className = "panel-title" > EDIT Employee < /h3>{" "} <
            /div>{" "} <
            div className = "panel-body" >
            <
            h4 >
            <
            Link to = { `/show/${this.state.employee.id}` } >
            <
            span className = "glyphicon glyphicon-eye-open" / >
            Employees List { " " } <
            /Link>{" "} <
            /h4>{" "} <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label
            for = "name" > Name: < /label>{" "} <
            input type = "text"
            className = "form-control"
            name = "name"
            value = { this.state.employee.name }
            onChange = { this.onChange }
            placeholder = "Name" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label
            for = "title" > Email: < /label>{" "} <
            input type = "email"
            className = "form-control"
            name = "email"
            value = { this.state.employee.email }
            onChange = { this.onChange }
            placeholder = "Email" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label
            for = "title" > Password: < /label>{" "} <
            input type = "password"
            className = "form-control"
            name = "password"
            value = { this.state.employee.password }
            onChange = { this.onChange }
            placeholder = "Password" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label
            for = "title" > Earned Leaves: < /label>{" "} <
            input type = "number"
            className = "form-control"
            name = "earnedleaves"
            value = { this.state.employee.earnedleaves }
            onChange = { this.onChange }
            placeholder = "Earned Leaves" /
            >
            <
            /div>{" "} <
            button type = "submit"
            className = "btn btn-success" >
            Update { " " } <
            /button>{" "} <
            /form>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default Edit;