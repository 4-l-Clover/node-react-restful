import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedUser: "0"};
    }

    // After login via Facebook account, get User Information and store some of them into LocalStorage
    responseFacebook = (res) => {
        localStorage.setItem('role', this.state.selectedUser);

        if (res['name'] && res['picture']) {

            localStorage.setItem('name', res['name']);
            if (res['picture']['data'] && res['picture']['data']['url'])
                localStorage.setItem('avatar', res['picture']['data']['url']);
            else
                localStorage.setItem('avatar', '');

                window.location.href = '/';

        } else {
            alert("Something went wrong on Facebook, Please try again later!");
        }
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="5">
                            <CardGroup>
                                <Card className="p-4 login-card login-card-title text-center">
                                    NJORD
                                </Card>
                            </CardGroup>
                            <CardGroup>
                                <Card className="p-4 login-card">
                                    <CardBody>
                                        <Form>
                                            <h1 className="text-center login-title">Company Login</h1>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="select" name="select" onChange={(e) => this.setState({ selectedUser: e.target.value })}>
                                                    <option value="0">Company_A</option>
                                                    <option value="1">Company_B</option>
                                                    <option value="2">Company_C</option>
                                                    <option value="3">User</option>
                                                </Input>
                                            </InputGroup>
                                            <Row>
                                                <Col xs="8">
                                                    <FacebookLogin
                                                        cssClass="px-4 fb-btn"
                                                        appId="963787967338652"
                                                        autoLoad={true}
                                                        fields="name,email,picture"
                                                        scope="public_profile"
                                                        callback={this.responseFacebook}
                                                    />
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
