import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import Logo from './Assets/logo.png';
import S1OwnOrRent from "./components/S1OwnOrRent"; 
import S2HomeType from "./components/S2HomeType";
import StepWizard from 'react-step-wizard'; 
import S3HouseSize from "./components/S3HouseSize";
import S4AboutInsurance from "./components/S4AboutInsurance"; 
import S5ClaimedAnything from './components/S5ClaimedAnything';
import S6Personalnfo from "./components/S6Personalnfo";
import S7Personalnfo from "./components/S7Personalnfo";
import S8Personalnfo from "./components/S8Personalnfo";
import S9Personalnfo from "./components/S9Personalnfo";
import S10Personalnfo from "./components/S10Personalnfo"; 
class App extends Component {
	state={
		postData:{
			//extra entries
			Key:"",
			ownOrRent:"",
			houseBuiltYear:"",
			typeOfProperty:"",
			numberOfStroies:"",
			houseSizeInSquareFeet:'',
			insuredOrNot:false,
			currentInsuranceCompany:'',
			claimedAnything:'',
			howMany:''
		},
		personalInfo:{
			firstName:'',
			lastName:'',
			phone:'',
			email:'',
			address:'',
			zipCode:'',
			city:'',
			dateOfBirth:'',
			gender:'',
			craditRating:''
		}

	}

	componentDidUpdate = () => {
		console.log(this.state);
	};

	handleChange = (value) => {
		this.setState({
			...this.state,
			postData: {
				...this.state.postData,
				ownOrRent: value
			}
		});
	};

	handleChangeYear = (value) => {
		this.setState({
			...this.state,
			postData: {
				...this.state.postData, 
				houseBuiltYear: value
			}
		});
	}

    handleChangeType = (value) => {
    	this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			typeOfProperty: value
    		}
    	});
    }
	
	handleChangeSize = (value) => { 
		this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			houseSizeInSquareFeet: value
    		}
    	});
    }
    handleChangeStories = (value) => { 
		this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			numberOfStroies: value
    		}
    	});
	}
	handleChangeInsured = (value) => { 
		this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			insuredOrNot: value
    		}
    	});
    }
    handleChangeCompany = (value) => { 
		this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			currentInsuranceCompany: value
    		}
    	});
	}
	
	handleChangeClaimedAnything = (value) => { 
		this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			claimedAnything: value
    		}
    	});
    }
    handleChangeHowMany = (value) => { 
		this.setState({
			...this.state,
    		postData: { 
				...this.state.postData,
    			howMany: value
    		}
    	});
	}
	
	handleChangeFirstName = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: {
				...this.state.personalInfo, 
    			firstName: e.target.value
    		}
    	});
    }
    handleChangeLastName = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			lastName: e.target.value
    		}
    	});
	}
	
	handleChangePhone = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			phone: e.target.value
    		}
    	});
    }
    handleChangeEmail = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			email: e.target.value
    		}
    	});
	}
	
	handleChangeDOB = (value) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			dateOfBirth:value
    		}
    	});
    }
    handleChangeGender = (value) => { 
		
		this.setState({
			...this.state,
    		personalInfo: {
				...this.state.personalInfo, 
    			gender: value
    		}
    	});
	}
	
	handleChangeZipCode = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			zipCode: e.target.value
    		}
    	});
    }
    handleChangeAddress = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			address: e.target.value
    		}
    	});
    }
	handleChangeCity = (e) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			city: e.target.value
    		}
    	});
    }
    handleChangeCraditRating = (value) => { 
		this.setState({
			...this.state,
    		personalInfo: { 
				...this.state.personalInfo,
    			craditRating: value
    		}
    	});
    }

	render() {
		return (
			<div
				className="container-fluid"
				style={{ minHeight: "100vh", backgroundColor: "#f7f7f7", overflow: "hidden" }}
			>
				<div className="container">
					<div className="row">
						<div className="col">
							<img className="my-4" src={Logo} alt="Uotehound" width="150px" />
						</div>
					</div>
					<div className="row">
						<div className="col"> 
								<StepWizard initialStep={1} >
									<S1OwnOrRent 
										ownOrRent={this.state.postData.ownOrRent}
										onChange={(value)=>{this.handleChange(value)}}
									/> 
									<S2HomeType
										houseBuiltYear={this.state.postData.houseBuiltYear}
										typeOfProperty={this.state.postData.typeOfProperty}
										onChange = {
											(value, value1) => {
												if (value !== "") {
													this.handleChangeYear(value);
												} else if(value1 !== "") {
													this.handleChangeType(value1)
												}
											}
										}
									/>  
									<S3HouseSize
										houseSizeInSquareFeet={this.state.postData.houseSizeInSquareFeet}
										numberOfStroies={this.state.postData.numberOfStroies}
										onChange = {
											(value, value1) => {
												if (value !== "") {
													this.handleChangeStories(value);
												} else if(value1 !== "") {
													this.handleChangeSize(value1)
												}
											}
										}
										 
									/>
									<S4AboutInsurance
										insuredOrNot={this.state.postData.insuredOrNot}
										currentInsuranceCompany={this.state.postData.currentInsuranceCompany}
										onChange = {
											(value, value1) => {
												if (value !== "") {
													this.handleChangeInsured(value);
												} else if(value1 !== "") {
													this.handleChangeCompany(value1)
												}
											}
										}  
									/>
									<S5ClaimedAnything 
										claimedAnything={this.state.postData.claimedAnything}
										howMany={this.state.postData.howMany}
										onChange = {
											(value, value1) => {
												if (value !== "") {
													this.handleChangeClaimedAnything(value);
												} else if(value1 !== "") {
													this.handleChangeHowMany(value1)
												}
											}
										} 
									/> 
									<S6Personalnfo 
										firstName={this.state.personalInfo.firstName}
										lastName={this.state.personalInfo.lastName}
										onChange = {
											(e, e1) => {
												if (e !== "") {
													this.handleChangeFirstName(e);
												} else if(e1 !== "") {
													this.handleChangeLastName(e1)
												}
											}
										} 
									/>
									<S7Personalnfo 
										phone={this.state.personalInfo.phone}
										email={this.state.personalInfo.email}
										onChange = {
											(e, e1) => {
												if (e !== "") {
													this.handleChangePhone(e);
												} else if(e1 !== "") {
													this.handleChangeEmail(e1)
												}
											}
										} 
									/>
									<S8Personalnfo 
										dateOfBirth={this.state.personalInfo.dateOfBirth}
										gender={this.state.personalInfo.gender}
										onChange = {
											(value, value1) => {
												if (value !== "") {
													this.handleChangeDOB(value);
												} else if(value1 !== "") {
													this.handleChangeGender(value1)
												}
											}
										}  
									/>
									<S9Personalnfo 
										zipCode={this.state.postData.zipCode}
										address={this.state.postData.address}
										onChange = {
											(e, e1) => {
												if (e !== "") {
													this.handleChangeZipCode(e);
												} else if(e1 !== "") {
													this.handleChangeAddress(e1)
												}
											}
										}  
									/>
									<S10Personalnfo 
										city={this.state.personalInfo.city}
										craditRating={this.state.personalInfo.craditRating}
										onChange = {
											(e, value1) => {
												if (e !== "") {
													this.handleChangeCity(e);
												} else if(value1 !== "") {
													this.handleChangeCraditRating(value1)
												}
											}
										}
										onClick={()=>{this.viewData()}}  
									/>
							</StepWizard> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
