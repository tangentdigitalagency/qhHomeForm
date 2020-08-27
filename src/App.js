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
			TYPE:"34",
			Test_Lead:1,
			Skip_XSL:1,
			Match_With_Partner_ID:22456,
			Redirect_URL:'',
			Referral_URL:'',
			Litigator:'Yes',
			Age_In_Seconds:5,
			deliveryResponse:'',
			SRC:'',
			Landing_Page:'',
			IP_Address:'',
			Sub_ID:13,
			Pub_ID:12,
			Optout:'',
			Unique_Identifier:'',
			Time_On_Page:12,
			Trusted_Form_URL:'',
			TCPA_Consent:'Yes',
			TCPA_Language:'',
			LeadiD_Token:'',
			First_Name:'',
			Last_Name:'',
			Address:'',
			City:'',
			State:'',
			Zip:'',
			Primary_Phone:'',
			Alternate_Phone:'',
			Email:'',
			Total_Premium:'',
			Sold_Tier:'',
			Quoted_Carrrier:'',
			Age:'',
			DOB:'',
			Gender:'',
			Currently_insured:'',
			Insured_Since:'',
			Policy_Expiration:'',
			Current_Insurance_Company:'',
			Property_Type:'',
			Occupancy:'',
			Garage:'',
			Foundation:'',
			Home_Security:'',
			Year_Built:'',
			Stories:'',
			Bedrooms:'',
			Bathrooms:'',
			Square_Footage:'',
			Home_Value:'',
			Construction_Type:'',
			Roof_Type:'',
			Exterior_Walls:'',
			Heating_type:'',
			Smoke_Alarm:'',
			Indoor_Sprinklers:'',
			Central_Air_Conditioning:'',
			Claims:"",
			Coverage_Type:'',
			Liability:'',
			Deductible:'',
			Credit:'',
			Years_At_Current_Residence:'',
			Years_At_Previous_Residence:'',

			ownOrRent:"", 
			houseSizeInSquareFeet:'', 
			howMany:''
		},
		// personalInfo:{
		// 	First_Name:'',
		// 	Last_Name:'',
		// 	Primary_Phone:'',
		// 	Email:'',
		// 	Address:'',
		// 	Zip:'',
		// 	City:'',
		// 	DOB:'',
		// 	Gender:'',
		// 	Credit:''
		// }

	}

	componentDidUpdate = () => {
		console.log(this.state);
	};

	handleChange = (value) => {
		this.setState({ 
			postData: {
				...this.state.postData,
				ownOrRent: value
			}
		});
	};

	handleChangeYear = (value) => {
		this.setState({ 
			postData: {
				...this.state.postData, 
				Year_Built: value
			}
		});
	}

    handleChangeType = (value) => {
    	this.setState({ 
    		postData: { 
				...this.state.postData,
    			Property_Type: value
    		}
    	});
    }
	
	handleChangeSize = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			houseSizeInSquareFeet: value
    		}
    	});
    }
    handleChangeStories = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Stories: value
    		}
    	});
	}
	handleChangeInsured = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Currently_insured: value
    		}
    	});
    }
    handleChangeCompany = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Current_Insurance_Company: value
    		}
    	});
	}
	
	handleChangeClaims = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Claims: value
    		}
    	});
    }
    handleChangeHowMany = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			howMany: value
    		}
    	});
	}
	
	handleChangeFirst_Name = (e) => { 
		this.setState({ 
    		postData: {
				...this.state.postData, 
    			First_Name: e.target.value
    		}
    	});
    }
    handleChangeLast_Name = (e) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Last_Name: e.target.value
    		}
    	});
	}
	
	handleChangePrimary_Phone = (e) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Primary_Phone: e.target.value
    		}
    	});
    }
    handleChangeEmail = (e) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Email: e.target.value
    		}
    	});
	}
	
	handleChangeDOB = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			DOB:value
    		}
    	});
    }
    handleChangeGender = (value) => { 
		
		this.setState({ 
    		postData: {
				...this.state.postData, 
    			Gender: value
    		}
    	});
	}
	
	handleChangeZip = (e) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Zip: e.target.value
    		}
    	});
    }
    handleChangeAddress = (e) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Address: e.target.value
    		}
    	});
    }
	handleChangeCity = (e) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			City: e.target.value
    		}
    	});
    }
    handleChangeCredit = (value) => { 
		this.setState({ 
    		postData: { 
				...this.state.postData,
    			Credit: value
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
										Year_Built={this.state.postData.Year_Built}
										Property_Type={this.state.postData.Property_Type}
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
										Stories={this.state.postData.Stories}
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
										Currently_insured={this.state.postData.Currently_insured}
										Current_Insurance_Company={this.state.postData.Current_Insurance_Company}
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
													this.handleChangeClaims(value);
												} else if(value1 !== "") {
													this.handleChangeHowMany(value1)
												}
											}
										} 
									/> 
									<S6Personalnfo 
										First_Name={this.state.postData.First_Name}
										Last_Name={this.state.postData.Last_Name}
										onChange = {
											(e, e1) => {
												if (e !== "") {
													this.handleChangeFirst_Name(e);
												} else if(e1 !== "") {
													this.handleChangeLast_Name(e1)
												}
											}
										} 
									/>
									<S7Personalnfo 
										Primary_Phone={this.state.postData.Primary_Phone}
										Email={this.state.postData.Email}
										onChange = {
											(e, e1) => {
												if (e !== "") {
													this.handleChangePrimary_Phone(e);
												} else if(e1 !== "") {
													this.handleChangeEmail(e1)
												}
											}
										} 
									/>
									<S8Personalnfo 
										DOB={this.state.postData.DOB}
										Gender={this.state.postData.Gender}
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
										Zip={this.state.postData.Zip}
										Address={this.state.postData.Address}
										onChange = {
											(e, e1) => {
												if (e !== "") {
													this.handleChangeZip(e);
												} else if(e1 !== "") {
													this.handleChangeAddress(e1)
												}
											}
										}  
									/>
									<S10Personalnfo 
										City={this.state.postData.City}
										Credit={this.state.postData.Credit}
										onChange = {
											(e, value1) => {
												if (e !== "") {
													this.handleChangeCity(e);
												} else if(value1 !== "") {
													this.handleChangeCredit(value1)
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
