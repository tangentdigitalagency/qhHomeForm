import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
import {Heading} from './CommonComponents';
const {Option} = Select;
class S1OwnOrRent extends Component {
    constructor(props) {
        super(props);
        this.state={
            val:""
        };
    }
    
    
    
    onFinish = () => {
        this.props.nextStep()
    };

    handleChange=(value)=>{ 
        this.props.setOwnOrRent(value); 
    }

    render() {
        return (
            <div className="card shadow-lg  " style={{ minHeight: "80vh" }}>
              <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                
                <div className=" d-flex" style={{ minHeight: "70vh" }} > 
                    <div className="card-body d-flex justify-content-center align-items-center" align="center">
                        <Form className="mywidth" onFinish={this.onFinish}>
                            <h3>Do You Own Or Rent</h3><br />
                            <Form.Item>
                                <Select 
                                    placeholder="Select An Option"  
                                    onChange={this.handleChange} 
                                    size="large" 
                                >
                                    <Option value="i-own">I Own</Option>
                                    <Option value="i-rent">I Rent</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item >  
                                <Button type="primary" htmlType="submit" block size="large">
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

export default S1OwnOrRent;