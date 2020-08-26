import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';
import CommonComponents from './CommonComponents';
const {Option}=Select;
class S3HouseSize extends Component {
    state={

    }

    CreateHomeSizeSelect=()=>{
        let i=0;
        const arr =[];
        for( i = 500; i<=5200; i+=100){
            arr.push(
                <Option className="p-0 text-center" key={i} value={i}> 
                        {i}
                </Option>
            );
        }
        return arr;
    }

    CreateNumberOfStoriesSelect = () => {
        const arr = [];
        for (let j = 1; j <= 4; j++) {
            arr.push(
                 <Option className="p-0 text-center" key={j} value={j}>
                     {j}
                 </Option>
            )
        } 
        return arr;
    }

    moveNext=()=>{
        this.props.nextStep();
    }
    handleChangeSize = (value) => {
        this.props.setHouseSizeInSquareFeet(value);
    }
    handleChangeStories = (value) => {
        this.props.setNumberOfStroies(value);
    }

    render() {
        return (
            <div className="card shadow-lg" style={{minHeight:"80vh"}}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className=" d-flex" style={{ minHeight:"70vh"}}>
                    <div className=" card-body d-xl-flex justify-content-center align-items-center" align="center">
                        <Form className="mywidth">
                            <Form.Item>
                                <h3>
                                Tell Me a Little Bit About Your Home Size
                                </h3>
                                <br />
                                <h5>
                                    Number Of Stories
                                </h5>
                                <Select 
                                    size="large"
                                    placeholder="Number Of Stories"
                                    onChange={this.handleChangeStories}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateNumberOfStoriesSelect()}
                                </Select>
                            </Form.Item>
                            <Form.Item> 
                                <h5>
                                    Size In Square Feet
                                </h5>
                                <Select 
                                    size="large"
                                    placeholder="House Size"
                                    onChange={this.handleChangeSize}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }

                                >
                                    {this.CreateHomeSizeSelect()}
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={()=>this.moveNext()} type="primary" htmlType="submit" block size="large">
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

export default S3HouseSize;