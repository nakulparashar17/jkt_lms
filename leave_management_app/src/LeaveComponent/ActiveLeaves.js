import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ActiveLeaves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaves: [],
        };
    }
    componentDidMount() {
        axios.get("/leaves/active").then((res) => {
            this.setState({ leaves: res.data });
            console.log(this.state.leaves);
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
            h3 className = "panel-title" > Active leaves < /h3>{" "} <
            h5 >
            <
            Link to = "/approved" >
            <
            span className = "glyphicon glyphicon-plus-sign" > < /span>{" "}
            Approved Leaves { " " } <
            /Link>{" "} <
            /h5>{" "} <
            h5 >
            <
            Link to = "/rejected" >
            <
            span className = "glyphicon glyphicon-plus-sign" > < /span>{" "}
            Rejected Leaves { " " } <
            /Link>{" "} <
            /h5>{" "} <
            h4 >
            <
            Link to = "/" >
            <
            span className = "glyphicon glyphicon-plus-sign" > < /span>{" "}
            Employees List { " " } <
            /Link>{" "} <
            /h4>{" "} <
            /div>{" "} <
            div className = "panel-body" >
            <
            table className = "table table-stripe" >
            <
            thead >
            <
            tr >
            <
            th > ID < /th> <th> Type </th > < th > REASON < /th>{" "} <
            th > FROM DATE < /th> <th> TO DATE </th > < th > DURATION < /th>{" "} <
            th > EMPLOYEE ID < /th>{" "} <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { " " } {
                this.state.leaves.map((c) => ( <
                    tr >
                    <
                    td > { c.id } < /td>{" "} <
                    td >
                    <
                    Link to = { `/showleave/${c.id}` } > { c.type } < /Link>{" "} <
                    /td>{" "} <
                    td > { c.reason } < /td> <td> {c.fromDate} </td > { " " } <
                    td > { c.toDate } < /td> <td> {c.duration} </td > { " " } <
                    td > { c.employee_id } < /td>{" "} <
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

export default ActiveLeaves;