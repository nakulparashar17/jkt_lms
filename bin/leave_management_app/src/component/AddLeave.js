import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Input, Button, Label, FormGroup, Form } from "reactstrap";

class AddLeave extends Component {
    emptyItem = {
        type: "",
        reason: "",
        fromDate: new Date(),
        toDate: new Date(),
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            Leaves: [],
            item: this.emptyItem,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChangefrom = this.handleDateChangefrom.bind(this);
        this.handleDateChangeto = this.handleDateChangeto.bind(this);
    }

    async handleSubmit(event) {
        const item = this.state.item;

        await fetch(`/leaves`, {
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

    handleDateChangefrom(date) {
        this.setState({
            fromDate: date,
        });
    }
    handleDateChangeto(date) {
        this.setState({
            toDate: date,
        });
    }

    render() {
        const title = < h3 > Add Leaves < /h3>;

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
            for = "type" > Leave Type < /Label>{" "} <
            Input type = "text"
            name = "type"
            id = "type"
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
            for = "reason" > Reason < /Label>{" "} <
            Input type = "text"
            name = "reason"
            id = "reason"
            onChange = { this.handleChange } >
            < /Input>{" "} <
            /FormGroup>{" "} <
            /div>{" "} <
            div className = "row" >
            <
            FormGroup className = "col-md-4 mb-3" >
            <
            Label
            for = "fromDate" > FormDate < /Label>{" "} <
            DatePicker selected = { this.state.fromDate }
            onChange = { this.handleDateChangefrom }
            name = "fromDate"
            dateFormat = "MM/dd/yyyy" /
            >
            <
            /FormGroup>{" "} <
            /div>{" "} <
            div className = "row" >
            <
            FormGroup className = "col-md-4 mb-3" >
            <
            Label
            for = "toDate" > toDate < /Label>{" "} <
            DatePicker selected = { this.state.toDate }
            onChange = { this.handleDateChangeto }
            name = "toDate"
            dateFormat = "MM/dd/yyyy" /
            >
            <
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
            to = "/addleaves" >
            Cancel { " " } <
            /Button>{" "} <
            /FormGroup>{" "} <
            /Form>{" "} <
            /Container>{" "} <
            /div>
        );
    }
}

export default AddLeave;