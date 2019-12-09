import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';

class Create extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.serverUrl = "http://localhost:9000/api/proposal";
        this.username = localStorage.getItem('name');
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    // send Proposal Data to the server via Post Request
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var sendData = {
            user_name: data.get('user_name'),
            company_id: data.get('company'),
            price: data.get('price'),
            description: data.get('description')
        };
        
        fetch(this.serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.msg);
            window.location.reload();
        });
    }

    render() {
        return (
        <div className="animated fadeIn">
            <Row className="justify-content-md-center">
                <Col xs="12" md="12" className="proposal-title">
                    Create A Job Proposal
                </Col>
                <Col xs="12" md="12" className="proposal-wrapper">
                    <Form onSubmit={this.handleSubmit}>
                        <Card>
                            <CardBody>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="select">Company</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                    <Input type="select" name="company">
                                        <option value="0">Company_A</option>
                                        <option value="1">Company_B</option>
                                        <option value="2">Company_C</option>
                                    </Input>
                                    <Input type="hidden" name="user_name" value={this.username}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="text-input">Price</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="number" name="price" placeholder="Price" required/>
                                        <FormText color="muted">Please enter price</FormText>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="textarea-input">Description</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="textarea" name="description" rows="9" placeholder="Content..." required/>
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary" className="submit-btn"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            </CardFooter>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Create;
