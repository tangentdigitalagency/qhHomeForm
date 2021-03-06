import React, { Component } from "react";
import { Form, Input, Button, Progress } from "antd";
import CommonComponents from "./CommonComponents";
import { Link } from "react-router-dom";

class S7Personalnfo extends Component {
  state = {};

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
                        <Progress percent={63} status="active" showInfo={true} className="pbar" />

        <Link to="/step6">
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
              initialValues={{
                Phone: this.props.phone_home,
                email_address: this.props.email_address,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Personal Info</h3>
              <br />
              <h5>Phone Number</h5>
              <Form.Item
                name="phone_home"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your phone number !",
                  },
                  {
                    max: 10,
                    message: "Please Enter A Correct Phone Number",
                  },
                  {
                    min: 10,
                    message: "Please Enter A Correct Phone Number",
                  },
                ]}
              >
                <Input
                  defaultValue={this.props.phone_home}
                  type="number"
                  onChange={(value) => {
                    this.props.onChange(value, "");
                  }}
                  size="large"
                  placeholder="1234567890"
                />
              </Form.Item>
              <h5>Email</h5>
              <Form.Item
                value={this.props.email_address}
                name="email_address"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Email Address!",
                  },
                  {
                    type: "email",
                    message: "Email Is Not Correct",
                  },
                ]}
              >
                <Input
                  defaultValue={this.props.email_address}
                  onChange={(value) => {
                    this.props.onChange("", value);
                  }}
                  size="large"
                  placeholder="abc@email.com"
                />
              </Form.Item>
              <Form.Item>
                <Link to="/step8">
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

export default S7Personalnfo;
