import React, { Component } from 'react';
import { Badge, Card, CardBody, Col, Row, Table, Button } from 'reactstrap';

class View extends Component {
    constructor(props) {
        super(props);
        this.serverUrl = "http://localhost:9000/restAPI/";

        this.state = {proposalList: []};
        this.getProposals();
    }

    // Get Proposals from the server by Logged-In Company
    getProposals() {
        fetch(this.serverUrl + "getData?company_id=" + localStorage.getItem("role"), {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            this.setState({proposalList: data});
        });
    }

    // Processing Accept or Reject: 1: accept, 2: reject
    process = (id, kind) => {
        var that = this;

        fetch(this.serverUrl + "updateStatus?id=" + id + "&status=" + kind, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Something went wrong, Please try again later.");
            } else {
                that.setState({
                    proposalList: that.state.proposalList.map(el => (el._id === id ? Object.assign(el, { status: kind }) : el))
                });
            }
        });
    }

    render() {
        var items = this.state.proposalList.map((row, key) => {
            if (row.status == 0) {
                return (
                    <tr key={key}>
                        <td>{row.user_name}</td>
                        <td>{row.price}</td>
                        <td>{row.description}</td>
                        <td>{row.created_at}</td>
                        <td width="20%">
                            <Button block color="success" className="action-btn" onClick={() => this.process(row._id, 1)}>Accept</Button>
                            <Button block color="danger" className="action-btn" onClick={() => this.process(row._id, 2)}>Reject</Button>
                        </td>
                    </tr>
                );
            } else if (row.status == 1){
                return (
                    <tr key={key}>
                        <td>{row.user_name}</td>
                        <td>{row.price}</td>
                        <td>{row.description}</td>
                        <td>{row.created_at}</td>
                        <td><Badge color="success">Accepted</Badge></td>
                    </tr>
                );
            } else if (row.status == 2) {
                return (
                    <tr key={key}>
                        <td>{row.user_name}</td>
                        <td>{row.price}</td>
                        <td>{row.description}</td>
                        <td>{row.created_at}</td>
                        <td><Badge color="danger">Rejected</Badge></td>
                    </tr>
                );
            }
        });

        return (
            <div className="animated fadeIn">
                <Row className="justify-content-md-center">
                    <Col xs="12" md="12" className="proposal-title">
                        Proposals
                    </Col>
                    <Col xs="12" md="12" className="proposal-wrapper">
                        <Card>
                            <CardBody>
                                <Table responsive bordered>
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Created</th>
                                            <th>Status/Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default View;
