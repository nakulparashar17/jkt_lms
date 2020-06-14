import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        axios.get("/managers").then((res) => {
            this.setState({ employees: res.data });
            console.log(this.state.employees);
        });
    }

    render() {
        return ( <
            div className = "container" >
            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading" >
            <
            center > < h2 className = "panel-title" > MANAGERS LIST < /h2></center > { " " } <
            /div>{" "} <
            div className = "panel-body" >
            <
            h4 >
            <
            Link to = "/list" >
            <
            span className = "glyphicon glyphicon-plus-sign" > < /span>{" "}
            Employees List { " " } <
            /Link>{" "} <
            /h4>{" "} <
            table className = "table table-stripe" >
            <
            thead >
            <
            tr >
            <
            th > ID < /th> <th> NAME </th > < th > EMAIL < /th>{" "} <
            th > EARNED LEAVES < /th>{" "} <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { " " } {
                this.state.employees.map((c) => ( <
                    tr >
                    <
                    td > { c.id } < /td>{" "} <
                    td >
                    <
                    Link to = { `/show/${c.id}` } > { c.name } < /Link>{" "} <
                    /td>{" "} <
                    td > { c.email } < /td> <td> {c.earnedleaves} </td > { " " } <
                    /tr>
                ))
            } { " " } <
            /tbody>{" "} <
            /table>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default Manager;