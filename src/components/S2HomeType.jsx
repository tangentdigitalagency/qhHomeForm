import React, { Component } from "react";
import { Form, Select, Button } from "antd";
import CommonComponents from "./CommonComponents";
const { Option } = Select;
class S2HomeType extends Component {
  state = {
    years: "",
    stateName: "",
  };

  CreateHomeYearSelect = () => {
    let i = 0;
    const arr = [];
    for (i = 2019; i >= 1922; i--) {
      arr.push(
        <Option className="p-0 text-center" key={i} value={i}>
          {i}
        </Option>
      );
    }
    return arr;
  };

  CreateHomeTypeSelect = () => {
    let i = 0;
    const homeType = [
      "Apartment ",
      "Condominium",
      "Duplex",
      "Mobile Home",
      "Multi Family",
      "Single Family ",
      "Town Home",
    ];
    const arr = [];
    for (i = 0; i < homeType.length; i++) {
      arr.push(
        <Option className="p-0 text-center" key={i} value={homeType[i]}>
          {homeType[i]}
        </Option>
      );
    }
    return arr;
  };

  onFinish = (values) => {
    this.props.nextStep();
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px"}}>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className=" d-flex" style={{ minHeight: "50vh" }}>
          <div
            className="card-body  d-xl-flex justify-content-center align-items-center"
            align="center"
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Tell Me a Little Bit About Your Home Type</h3>
              <br />
              <h5>When Was Your House Built</h5>
              <Form.Item
                name="year_house_was_built"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                
                  //defaultValue={this.props.Year_Built}
                  size="large"
                  placeholder="House Built Years"
                  onChange={(value) => {
                    this.props.onChange(value, "");
                  }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {this.CreateHomeYearSelect()}
                </Select>
              </Form.Item>
              <h5>What Type Of Property Do You Have</h5>
              <Form.Item
                name="type_of_property"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                  //defaultValue={this.props.Property_Type}
                  size="large"
                  placeholder="Property Type"
                  onChange={(value1) => this.props.onChange("", value1)}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {this.CreateHomeTypeSelect()}
                </Select>
              </Form.Item>
              <Form.Item>
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

export default S2HomeType;
