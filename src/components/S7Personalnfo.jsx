import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import CommonComponents from './CommonComponents';

class S7Personalnfo extends Component {
    state={

    }

    moveNext=()=>{
        this.props.nextStep();
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
                                    Phone Number
                                </h5>  
                                <Input onChange={(value)=>{this.props.onChange(value,"")}} size="large" placeholder="123-456-7890" /> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Email       
                                </h5>
                                
                                <Input onChange={(value)=>{this.props.onChange("",value)}} size="large" placeholder="abc@email.com"  />
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

export default S7Personalnfo;