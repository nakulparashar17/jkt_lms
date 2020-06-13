import React, { Component } from "react";
import "../App.css";
import { Table, Container, Button } from "reactstrap";

class AllLeaves extends Component {
    state = {
        isLoading: true,
        Leaves: [],
    };
    async componentDidMount() {
        const responseExp = await fetch("/leaves");
        const bodyExp = await responseExp.json();
        this.setState({ Leaves: bodyExp, isLoading: false });
        console.log(bodyExp);
    }
    render() {
        const { Leaves, isLoading } = this.state;
        if (isLoading) return <div > Loading... < /div>;
        let rows = Leaves.map((leave) => ( <
            tr >
            <
            td > { leave.id } < /td> <td> {leave.type} </td > < td > { leave.reason } < /td>{" "} <
            td > { leave.fromDate } < /td> <td> {leave.toDate} </td > { " " } <
            td > { leave.duration } < /td>{" "} <
            td >
            <
            Button size = "sm"
            color = "danger"
            onClick = {
                () => this.save(leave.id) } >
            Reject { " " } <
            /Button>{" "} <
            /td>{" "} <
            td >
            <
            Button size = "sm"
            color = "primary"
            onClick = {
                () => this } >
            Approved { " " } <
            /Button>{" "} <
            /td>{" "} <
            /tr>
        ));

        return ( <
            Container >
            <
            h3 > Active Leaves List < /h3>{" "} <
            Table className = "mt-4" >
            <
            thead >
            <
            tr >
            <
            th > Id < /th> <th width="20%"> Type </th > { " " } <
            th width = "20%" > Reason < /th> <th> FromDate </th > { " " } <
            th > toDate < /th> <th> Duration </th > < th > Accepted < /th>{" "} <
            th > Rejected < /th>{" "} <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { rows } < /tbody>{" "} <
            /Table>{" "} <
            /Container>
        );
    }
}

export default AllLeaves;