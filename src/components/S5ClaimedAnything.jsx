import React, { Component } from 'react';
import { Form, Select, Button} from 'antd';
import CommonComponents from './CommonComponents';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
const {Option}=Select;
class S5ClaimedAnything extends Component {
    state={

    }

    CreateHowManySelect=()=>{
        let i=0;
        const arr= [];
        for(i=1;i<=6;i++){
            arr.push(
                <Option className="p-0 text-center" key={i} value={i}>
                    {i}
                </Option>
            )
        }
        return arr;
    }

    moveNext=()=>{
        this.props.nextStep();
    }

    handleChangeClaimedAnything = (value) => {
        this.props.setclaimedAnything(value);
    }
    handleChangeHowMany = (value) => {
        this.props.sethowMany(value);
    }
    
    render() {
        return (
            <div className="card shadow-lg" style={{minHeight:"80vh"}}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{minHeight: "70vh"}}>
                    <div className="card-body d-xl-flex justify-content-center align-items-center" align="center" >
                        <Form className="mywidth">
                            <Form.Item>
                                <h3>
                                    Almost There!
                                </h3><br />
                                <h5>
                                    have You Claimed Anything Over The Past 3 years
                                </h5> 
                                <div className="row d-flex justify-content-center align-items-center" align="center">
                                    
                                <BootstrapSwitchButton
                                        checked={this.props.claimedAnything}
                                        onlabel='Yes'
                                        onstyle='ant-btn ant-btn-primary'
                                        offlabel='No'
                                        offstyle='secondary'
                                        style='ant-btn-lg ant-btn-block mx-3 '
                                        onChange={this.handleChangeClaimedAnything}
                                    /><br />
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    If so, how many?         
                                </h5>
                                <Select 
                                    size="large"
                                    placeholder="Select An Option"
                                    onChange={this.handleChangeHowMany}
                                    optionFilterProp="children"
                                    filterOption={ (input,option) => option.children.toLowerCase.indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {this.CreateHowManySelect()}
                                </Select>
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

export default S5ClaimedAnything;