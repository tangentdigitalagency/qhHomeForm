import React, { Component } from 'react';
import { Form,   Button } from 'antd';
import CommonComponents from './CommonComponents';


class S11ConformSubmission extends Component {
    state = {

    }

    moveNext = () => {
        this.props.lastStep();
    }

    render() {
        return (
            <div className="card shadow-lg" style={{ minHeight: "80vh" }}>
                <CommonComponents currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} previousStep={this.props.previousStep} />
                <div className="d-flex" style={{ minHeight: "70vh" }}>
                    <div className="card-body d-flex justify-content-center align-items-center" align="center" >
                        <Form className="w-50" >
                           
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default S11ConformSubmission;