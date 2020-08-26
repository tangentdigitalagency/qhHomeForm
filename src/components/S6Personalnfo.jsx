import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import CommonComponents from './CommonComponents';

class S6Personalnfo extends Component {
    state={

    }

    moveNext=()=>{
        this.props.nextStep();
    }

    handleChangeFirstName = (value) => {
        this.props.setFirstName(value);
    }
    handleChangeLastName = (value) => {
        this.props.setLastName(value);
    }

    render() {
        return (
            <div className="card shadow-lg" style={{minHeight:"80vh"}}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{minHeight: "70vh"}}>
                    <div className="card-body d-xl-flex justify-content-center align-items-center" align="center" >
                        <Form className="mywidth" >
                            <Form.Item>
                                <h3>
                                    Personal Info
                                </h3><br />
                                <h5>
                                    First Name
                                </h5>  
                                <Input onChange={this.handleChangeFirstName} size="large" placeholder="First Name" /> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Last Name       
                                </h5>
                                
                                <Input onChange={this.handleChangeLastName} size="large" placeholder="Last Name"  />
                            </Form.Item>
                            <Form.Item>
                                    <Button onClick={()=>{this.moveNext()}} type="primary" htmlType="submit" block size="large">
                                        Next
                                    </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default S6Personalnfo;