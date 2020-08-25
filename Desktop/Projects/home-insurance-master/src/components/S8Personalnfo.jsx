import React, { Component } from 'react';
import moment from 'moment';
import { Form,  Button, Select,DatePicker, Space } from 'antd';
import CommonComponents from './CommonComponents'; 
const dateFormat = 'MM/DD/YYYY';  
const { Option } = Select; 
class S8Personalnfo extends Component {
    state = {

    }

    CreateDateOfBirthSelect = () => {
        return (
            <Space className="w-100 text-center" direction="vertical" size={12} >
                <DatePicker onChange={this.handleChangeDOB} className="w-100 text-center"  align="center" size="large" defaultValue={moment('08/01/2020', dateFormat)} format={dateFormat} />  
            </Space>
        );
    }

    moveNext = () => {
        this.props.nextStep();
    }

    handleChangeDOB = (value) => {
        this.props.setDateOfBirth(value);
    }
    handleChangeGender = (value) => {
        this.props.setGender(value);
    }

    render() {
        return (
            <div className="card shadow-lg" style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{ minHeight: "70vh" }}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center" >
                        <Form className="mywidth" >
                            <Form.Item>
                                <h3>
                                    Personal Info
                                </h3><br />
                                <h5>
                                    Date Of Birth
                                </h5>
                                {this.CreateDateOfBirthSelect()}
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Gender
                                </h5>

                                <Select onChange={this.handleChangeGender} size="large" placeholder="Select An Option"  >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option  value="non-binary">Non Binary</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={() => { this.moveNext() }} type="primary" htmlType="submit" block size="large">
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

export default S8Personalnfo;