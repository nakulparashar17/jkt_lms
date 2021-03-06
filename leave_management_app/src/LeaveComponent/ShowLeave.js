import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ShowLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leave: {},
            action1: "success",
            action2: "reject",
        };
    }

    componentDidMount() {
        axios.get("/leaves/" + this.props.match.params.id).then((res) => {
            this.setState({ leave: res.data });
            console.log(this.state.leave);
        });
    }

    approved(id) {
        console.log(id);
        const { type, reason, fromDate, toDate, duration } = this.state.leave;
        axios
            .put("/leaves/" + id + "/acceptreject/" + this.state.action1, {
                type,
                reason,
                fromDate,
                toDate,
                duration,
            })
            .then((result) => {
                this.props.history.push("/activeleaves");
            });
    }

    reject(id) {
        console.log(id);
        const { type, reason, fromDate, toDate, duration } = this.state.leave;
        axios
            .put("/leaves/" + id + "/acceptreject/" + this.state.action2, {
                type,
                reason,
                fromDate,
                toDate,
                duration,
            })
            .then((result) => {
                this.props.history.push("/activeleaves");
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
            h3 className = "panel-title" > Leave Details < /h3>{" "} <
            /div>{" "} <
            div className = "panel-body" >
            <
            h4 > { " " } <
            Link to = "/activeleaves" > { " " } <
            span className = "glyphicon glyphicon-th-list" > < /span> Leaves
            List { " " } <
            /Link>{" "} <
            /h4>{" "} <
            dl >
            <
            dt > ID: < /dt> <dd> {this.state.leave.id} </dd > < dt > TYPE: < /dt>{" "} <
            dd > { this.state.leave.type } < /dd> <dt> REASON: </dt > { " " } <
            dd > { this.state.leave.reason } < /dd> <dt> FROM DATE: </dt > { " " } <
            dd > { this.state.leave.fromDate } < /dd> <dt> TO DATE: </dt > { " " } <
            dd > { this.state.leave.toDate } < /dd> <dt> DURATION: </dt > { " " } <
            dd > { this.state.leave.duration } < /dd>{" "} <
            /dl>{" "} <
            button onClick = { this.approved.bind(this, this.state.leave.id) }
            className = "btn btn-success" >
            { " " }
            Approved { " " } <
            /button>{" "} <
            button onClick = { this.reject.bind(this, this.state.leave.id) }
            className = "btn btn-danger" >
            { " " }
            Rejected { " " } <
            /button>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default ShowLeave;