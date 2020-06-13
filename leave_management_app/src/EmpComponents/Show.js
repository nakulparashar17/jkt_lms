import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Show extends Component {
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

    delete(id) {
        console.log(id);
        axios.delete("/employees/" + id).then((result) => {
            this.props.history.push("/");
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
            h3 className = "panel-title" > Employee Details < /h3>{" "} <
            /div>{" "} <
            div className = "panel-body" >
            <
            h4 > { " " } <
            Link to = "/" > { " " } <
            span className = "glyphicon glyphicon-th-list" > < /span> Employees
            List { " " } <
            /Link>{" "} <
            /h4>{" "} <
            dl >
            <
            dt > ID: < /dt> <dd> {this.state.employee.id} </dd > { " " } <
            dt > Name: < /dt> <dd> {this.state.employee.name} </dd > { " " } <
            dt > Email: < /dt> <dd> {this.state.employee.email} </dd > { " " } <
            dt > Earned Leaves: < /dt>{" "} <
            dd > { this.state.employee.earnedleaves } < /dd>{" "} <
            /dl>{" "} <
            Link to = { `/edit/${this.state.employee.id}` }
            className = "btn btn-success" >
            { " " }
            Edit { " " } <
            /Link>{" "} <
            Link to = { `/apply/${this.state.employee.id}` }
            className = "btn btn-primary" >
            { " " }
            Apply Leave { " " } <
            /Link>{" "} <
            button onClick = { this.delete.bind(this, this.state.employee.id) }
            className = "btn btn-danger" >
            { " " }
            Delete { " " } <
            /button>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}
export default Show;