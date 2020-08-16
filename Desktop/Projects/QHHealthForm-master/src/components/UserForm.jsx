import React, { Component } from 'react';
import { Input, Button, Col, Row, Form } from 'antd';
import './UserForm.css';
import axios from 'axios';
class S1UserForm extends Component {
	state = {
		Key: "rRkWg9.WrP.Ahm.rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
		TYPE: "20",
		IP_Address: "",
		SRC: 'Quotehound_Website_Health',
		Redirect_URL: 'https://www.quotehound.com/quotes/thank-you-health-insurance-quote',
		Landing_Page: 'quotehound.com',
		User_Agent: '',
		TCPA_Consent: 'Yes',
		Trusted_Form_URL: '',
		TCPA_Language: '"By clicking Get My My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
		LeadiD_Token: '',
		First_Name: '',
		Last_Name: '',
		Email: '',
		Address: '',
		City: '',
		State: '',
		Zip: '',
		Primary_Phone: '',
		
	};

	inputFormHandler = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};
	getQuoteHandler = () => {
		console.log(this.state);
		axios
			.post('https://leads.quotehound.com/genericPostlead.php', null, {
				params: this.state,
			})
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
				if (err) throw err;
			});
	};
	render() {
		return (

			<div
			className="container-fluid m-0"
			style={{backgroundColor: "#f7f7f7"}}
		>
			<div>
				<img src={require("../Assets/logo.png")} className="m-4" width="200px" alt="" />
				<br />
			</div>

			<div className='container p-0'>
				<h1 className='text-center main-heading'>Qoutehound Matches You With Top Rated Health Insurance</h1>
				<div className='main-content-inner-container mb-5'>
					<div className='text-center' style={{padding:'30px 100px'}} id="formContent">
						<Form name='customized_form_controls'>
							<Row gutter={[16, 16]}>
								<Col className='gutter-row' xs={24} sm={24} md={12} lg={12} xl={12}>
									<div>
										<label>First Name</label>
									</div>
									<Form.Item name='First_Name' style={{ width: '100%' }}>
										<Input
											name='First_Name'
											value={this.state.First_Name}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
								<Col className='gutter-row' xs={24} sm={24} md={12} lg={12} xl={12}>
									<div>
										<label>Last Name</label>
									</div>
									<Form.Item name='Last_Name' style={{ width: '100%' }}>
										<Input
											value={this.state.Last_Name}
											onChange={this.inputFormHandler}
											type='text'
											name='Last_Name'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={[16, 16]}>
								<Col style={{ width: '100%' }}>
									<div>
										<label>Email</label>
									</div>
									<Form.Item name='Email' style={{ width: '100%' }}>
										<Input
											name='Email'
											value={this.state.Email}
											onChange={this.inputFormHandler}
											type='email'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[16, 16]}>
								<Col style={{ width: '100%' }}>
									<div>
										<label>Home Address</label>
									</div>
									<Form.Item name='Address' style={{ width: '100%' }}>
										<Input
											name='Address'
											value={this.state.Address}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={[16, 16]}>
								<Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
									<div>
										<label>City</label>
									</div>
									<Form.Item name='City' style={{ width: '100%' }}>
										<Input
											name='City'
											value={this.state.City}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
									<div>
										<label>State</label>
									</div>
									<Form.Item name='State' style={{ width: '100%' }}>
										<Input
											name='State'
											value={this.state.State}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											placeholder='e.g: AZ'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
									<div>
										<label>Zip Code</label>
									</div>
									<Form.Item name='Zip' style={{ width: '100%' }}>
										<Input
											name='Zip'
											value={this.state.Zip}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={[16, 16]}>
								<Col style={{ width: '100%' }}>
									<div>
										<label>Phone</label>
									</div>
									<Form.Item name='Primary_Phone' style={{ width: '100%' }}>
										<Input
											name='Primary_Phone'
											value={this.state.Primary_Phone}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Form.Item style={{ width: '100%' }}>
								<Button className='primaryBTN' disabled={this.state.First_Name === '' || this.state.Last_Name === '' || this.state.Email === '' || this.state.Address === '' || this.state.Primary_Phone === ''} type='primary' onClick={this.getQuoteHandler} style={{ width: '100%' }} size={'large'}>
									<h4 className=''>Get My Quote</h4>
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
			</div> 
		);
	}
}

export default S1UserForm;
