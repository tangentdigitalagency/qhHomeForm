import React, { Component } from "react";
import { Form, Select, Button, Progress } from "antd";
import CommonComponents from "./CommonComponents";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";
const { Option } = Select;
class S5ClaimedAnything extends Component {
  state = {};

  CreateHowManySelect = () => {
    let i = 0;
    const claimsValues = ["None", "1", "2", "3", "4", "5", "6+", "Unknown"];
    const arr = [];
    for (i = 0; i < claimsValues.length; i++) {
      arr.push(
        <Option
          className="p-0 text-center"
          key={claimsValues[i]}
          value={claimsValues[i]}
        >
          {claimsValues[i]}
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
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
                        <Progress percent={45} status="active" showInfo={true} className="pbar" />

        <Link to="/step4">
          <CommonComponents
            currentStep={this.props.currentStep}
            totalSteps={this.props.totalSteps}
            previousStep={this.props.previousStep}
          />
        </Link>
        <div className="d-flex" style={{ minHeight: "50vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Almost There!</h3>
              <br />
              <h5>have You Claimed Anything Over The Past 3 years</h5>
              <Form.Item name="any_claims_over_last_3_years">
                <BootstrapSwitchButton
                  checked={this.props.claimedAnything}
                  onlabel="Yes"
                  onstyle="ant-btn ant-btn-primary"
                  offlabel="No"
                  offstyle="secondary"
                  style="ant-btn-lg ant-btn-block"
                  onChange={(value) => {
                    this.props.onChange("Yes", "");
                  }}
                />
              </Form.Item>
              <h5>If so, how many?</h5>
              <Form.Item
                name="any_claims"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                  size="large"
                  placeholder="Select An Option"
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase.indexOf(input.toLowerCase()) >=
                    0
                  }
                >
                  {this.CreateHowManySelect()}
                </Select>
              </Form.Item>
              <Form.Item>
                <Link to="/step6">
                  {" "}
                  <Button type="primary" htmlType="submit" block size="large">
                    Next
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default S5ClaimedAnything;
