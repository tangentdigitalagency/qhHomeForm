import React, { Component } from 'react';
import { Form, Input,Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
const {Option}=Select;

class S10Personalnfo extends Component {
    state={

    }

    moveNext=()=>{
        this.props.nextStep();
    }

    handleChangeCity = (value) => {
        this.props.setCity(value);
    }
    handleChangeCraditRating = (value) => {
        this.props.setCraditRating(value);
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
                                    Confirm Submission
                                </h3><br />
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    City
                                </h5>  
                                <Input onChange={this.handleChangeCity} size="large" placeholder="City" /> 
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Credit Rating       
                                </h5>
                                <Select onChange={this.handleChangeCraditRating} size="large" placeholder="Credit Rating">
                                    <Option value="average" >Average</Option>
                                    <Option value="poor" >Poor</Option>
                                    <Option value="Good" >Good</Option>
                                    <Option value="excellent" >Excellent</Option>
                                </Select>
                            </Form.Item>
                            
                            <Form.Item>
                                <p className="text-justify" style={{color:"#777777", fontSize:"12px"}}>
                                    By clicking "Get My Quote" I provide my electronic signature and express
                                    written consent to telemarketing calls, text messages, emails, and postal
                                    mail from this Web site
                                    our marketing and re-marketing network, and up to eight insurance companies
                                    or their affiliates or representatives at the phone number (including wireless number),
                                    email address, and postal address provided by me. I consent to calls and text messages
                                    transmitting insurance quotes, or seeking related additional information from me,
                                    using an Automatic Telephone Dialing System or prerecorded or artificial voices.
                                    I consent that my signature is not a condition of purchasing any property, goods,
                                    or services and that I may revoke my consent at any time.
                                </p>
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={() => { this.moveNext() }} type="primary" htmlType="submit" block size="large">
                                    Get My Quote!
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default S10Personalnfo;