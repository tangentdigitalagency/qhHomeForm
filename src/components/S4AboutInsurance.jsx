import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';
import CommonComponents from './CommonComponents'; 
import BootstrapSwitchButton from 'bootstrap-switch-button-react' 
const { Option } = Select;

class S4AboutInsurance extends Component {
    state = {

    }

    CreateCompanyNameSelect = () => {
        let i = 0;
        const companyName = [
            "Company Not Listed",
            "State Farm Insurance",
            "21st Century Insurance",
            "AAA Insurance Co.",
            "AIG",
            "AIU Insurance",
            "Alfa",
            "Allied",
            "Allstate Insurance",
            "Amco Ins Co",
            "American Alliance Ins Co",
            "American Automobile Insurance",
            "American Direct Business Insurance", 
            "American Economy Ins Co" ,
            "American Empire Insurance",
            "American Family Insurance ",
            "American Financial ",
            "American Home Assurance ",
            "American Insurance ",
            "Ins American International Ins ",
            "American International Pacific",
        ];
        const arr = [];
        for (i = 0; i < companyName.length ; i++) {
            arr.push(
                <Option className="p-0 text-center" key={companyName[i]} value={companyName[i]}>
                    {companyName[i]}
                </Option>
            );
        }
        return arr;
    }

    moveNext = () => {
        this.props.nextStep();
    }

    handleChangeInsured = (value) => {
        this.props.setInsuredOrNot(value);
    }
    handleChangeCompany = (value) => {
        this.props.setcurrentInsuranceCompany(value);
    }

    render() {
        return (
            <div className="card shadow-lg" style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className=" d-xl-flex d-sm-flex" style={{ minHeight: "70vh" }}>
                    <div className=" card-body d-xl-flex justify-content-center align-items-center" align="center">
                        <Form className="mywidth">
                            <Form.Item>
                                <h3>
                                    Tell Me a Little Bit About Your Home Insurance
                                </h3>
                                <br />
                                <h5>
                                    Are You Currently Insured?
                                </h5>
                                <div className="row d-flex justify-content-center align-items-center" align="center">
                                    
                                    <BootstrapSwitchButton
                                        checked={this.props.insuredOrNot}
                                        onlabel='Yes'
                                        onstyle='ant-btn ant-btn-primary'
                                        offlabel='No'
                                        offstyle='secondary'
                                        style=' ant-btn-lg ant-btn-block mx-3 '
                                        onChange={this.handleChangeInsured}
                                    /><br />
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    Current Insurance Company
                                </h5>
                                <Select
                                    size="large"
                                    placeholder="Company Not Listed"
                                    onChange={this.handleChangeCompany}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateCompanyNameSelect()}
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={() => this.moveNext()} type="primary" htmlType="submit" block size="large">
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

export default S4AboutInsurance;