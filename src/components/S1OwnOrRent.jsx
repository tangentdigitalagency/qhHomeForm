import React, { Component } from "react";
import { Form, Select, Button } from "antd";
import CommonComponents from "./CommonComponents";
import { Link } from "react-router-dom";
const { Option } = Select;

class S1OwnOrRent extends Component {
  state = {
    termsOfUse: false,
    field1: null,
  };
  onFinish = (values) => {
    //  console.log(`Step 10 ${this.props.postData}`)

    this.props.nextStep();
    console.log("Success:", values);
  };

  checkDisable = async () => {
    console.log("Failed:");
    let { field1 } = this.state;
    if (field1 == null || field1 == "") return false;
    else return true;
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  onValueChange = (e) => {
    console.log("BLA BLA ", e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />

        <div className=" d-xl-flex d-sm-flex" style={{ minHeight: "50vh" }}>
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
              <h1> Start Saving On Homeowners Insurance Today!</h1>
              <h3>Do You Own Or Rent</h3>
              <br />
              <Form.Item
                name="own_or_rent"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select An Option!",
                  },
                ]}
              >
                <Select
                  placeholder="Select An Option"
                  name="field1"
                  onChange={(value) => {
                    this.props.onChange(value);
                    this.onValueChange(value);
                  }}
                  size="large"
                >
                  <Option value="Own">Own</Option>
                  <Option value="Rent">Rent</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Link to="/step2">
                  {" "}
                  <Button
                    disabled={!this.checkDisable}
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                  >
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

export default S1OwnOrRent;
