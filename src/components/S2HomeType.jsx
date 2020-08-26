import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
const { Option } = Select;
class S2HomeType extends Component {
    state = {
        years: "",
        stateName: ""

    };

    CreateHomeYearSelect = () => {
        let i = 0;
        const arr = [];
        for (i = 2019; i >= 1922; i--) {
            arr.push(
                <Option className="p-0 text-center" key={i} value={i}>
                    {i}
                </Option>
            )
        }
        return arr;
    }

    CreateHomeTypeSelect = () => {
        let i = 0;
        const homeType = ["Single Family (Populer) ", "Single Family Home", "Duplex", "Multi Family", "Town Home", "Condominium", "Mobile Home", "Apartment "];
        const arr = [];
        for (i = 0; i < homeType.length; i++) {
            arr.push(
                <Option className="p-0 text-center" key={i} value={homeType[i]}>
                    {homeType[i]}
                </Option>
            )
        }
        return arr;
    }

    moveNext = () => {
        this.props.nextStep();
    };

    handleChangeYear = (year) => {
        this.props.setHouseBuiltYear(year);
    }

    handleChangeType = (type) => {
        this.props.setTypeOfProperty(type);
    }

    render() {
        return (
            <div className="card shadow-lg  " style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className=" d-flex" style={{ minHeight: "70vh" }} >
                    <div className="card-body  d-xl-flex justify-content-center align-items-center" align="center">
                        <Form className="mywidth" >
                            <Form.Item>
                                <h3>Tell Me a Little Bit About Your Home Type</h3>
                                <br />
                                <h5>When Was Your House Built</h5>
                                <Select
                                    size="large"
                                    placeholder="House Built Years"
                                    onChange={this.handleChangeYear}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateHomeYearSelect()}
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <h5>
                                    What Type Of Property Do You Have
                                </h5>
                                <Select
                                    size="large"
                                    placeholder="Property Type"
                                    onChange={this.handleChangeType}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateHomeTypeSelect()}
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

export default S2HomeType;
