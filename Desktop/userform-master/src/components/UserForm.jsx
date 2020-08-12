import React, { Component } from 'react';
import { Input, Button, Col, Row, Form, Typography } from 'antd';
import './UserForm.css';
import axios from 'axios';

class S1UserForm extends Component {
	state = {
		TYPE: '40',
		IP_Address: '75.2.92.149',
		SRC: 'D',
		Landing_Page: 'landing',
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
			<div className='container p-0'>
				<h1 className='text-center main-heading'>We Connect You With The Best Life Insurance</h1>
				<div className='main-content-inner-container mb-5'>
					<div className='text-center box-width'>
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
		);
	}
}

export default S1UserForm;
