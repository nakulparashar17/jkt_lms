import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

class EditEmployee extends Component {
    emptyItem = {
        name: "",
        email: "",
        earnedleaves: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== "new") {
            const group = await (
                await fetch(`/employees/${this.props.match.params.id}`)
            ).json();
            this.setState({ item: group });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch(`/employees/${this.props.match.params.id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });
        this.props.history.push(`/employees/${this.props.match.params.id}`);
    }

    render() {
        const { item } = this.state;
        const title = < h2 > { item.id ? "Edit Employee" : "Add Employee" } < /h2>;

        return ( <
            div >
            <
            Container > { " " } { title } { " " } <
            Form onSubmit = { this.handleSubmit } >
            <
            FormGroup >
            <
            Label
            for = "name" > Name < /Label>{" "} <
            Input type = "text"
            name = "name"
            id = "name"
            value = { item.name || "" }
            onChange = { this.handleChange }
            autoComplete = "name" /
            >
            <
            /FormGroup>{" "} <
            FormGroup >
            <
            Label
            for = "email" > Email < /Label>{" "} <
            Input type = "eamil"
            name = "email"
            id = "email"
            value = { item.email || "" }
            onChange = { this.handleChange }
            autoComplete = "email" /
            >
            <
            /FormGroup>{" "} <
            FormGroup >
            <
            Label
            for = "earnedleaves" > Earned Leaves < /Label>{" "} <
            Input type = "number"
            name = "earnedleaves"
            id = "earnedleaves"
            value = { item.earnedleaves || "" }
            onChange = { this.handleChange }
            />{" "} <
            /FormGroup>{" "} <
            FormGroup >
            <
            Button color = "primary"
            type = "submit" > { " " }
            Save { " " } <
            /Button>{" "} <
            Button color = "secondary"
            tag = { Link }
            to = "/employees" > { " " }
            Cancel { " " } <
            /Button>{" "} <
            /FormGroup>{" "} <
            /Form>{" "} <
            /Container>{" "} <
            /div>
        );
    }
}
export default withRouter(EditEmployee);