import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Appp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        axios.get("/employees").then((res) => {
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
            h3 className = "panel-title" > EMPLOYEES LIST < /h3>{" "} <
            /div>{" "} <
            div className = "panel-body" >
            <
            h4 >
            <
            Link to = "/create" >
            <
            span className = "glyphicon glyphicon-plus-sign" > < /span> Add
            Employee { " " } <
            /Link>{" "} <
            /h4>{" "} <
            h4 >
            <
            Link to = "/activeleaves" >
            <
            span className = "glyphicon glyphicon-plus-sign" > < /span> Active
            Leaves { " " } <
            /Link>{" "} <
            /h4>{" "} <
            table className = "table table-stripe" >
            <
            thead >
            <
            tr >
            <
            th > ID < /th> <th> NAME </th > < th > EMAIL < /th>{" "} <
            th > EARNED LEAVES < /th> <th> MANAGER ID </th > { " " } <
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
                    td > { c.manager_id } < /td>{" "} <
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

export default Appp;