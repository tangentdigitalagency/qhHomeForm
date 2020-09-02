import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Logo from "./Assets/logo.png";
import { Typography } from "antd";

import S1OwnOrRent from "./components/S1OwnOrRent";
import S2HomeType from "./components/S2HomeType";
import StepWizard from "react-step-wizard";
import S3HouseSize from "./components/S3HouseSize";
import S4AboutInsurance from "./components/S4AboutInsurance";
import S5ClaimedAnything from "./components/S5ClaimedAnything";
import S6Personalnfo from "./components/S6Personalnfo";
import S7Personalnfo from "./components/S7Personalnfo";
import S8Personalnfo from "./components/S8Personalnfo";
import S9Personalnfo from "./components/S9Personalnfo";
import S10Personalnfo from "./components/S10Personalnfo";

class App extends Component {
  state = {
    postData: {
      //extra entries
      TYPE: "34", 
      Redirect_URL: "www.quotehound.com/quotes/thank-you-home-quote",
      SRC: "quotehound.com",
      Landing_Page: "quotehound.com",
      IP_Address: "",
      Sub_ID: 101,
      Pub_ID: 101, 
      TCPA_Consent: "Yes",
      State: "IL",
      Occupancy: "Primary Residence",
      Garage: "unknown",
      Foundation: "unknown",
      Home_Security: "unknown",
      Bedrooms: 4,
      Bathrooms: 3,
      Home_Value: 15000,
      Construction_Type: "unknown",
      Roof_Type: "unknown",
      Heating_type: "Other",
      Coverage_Type: "unknown",
      Liability: 100000,
      Deductible: 100,
    
      //Test_Lead:1,
      //Skip_XSL:1,
      //Match_With_Partner_ID:"",
      //Referral_URL:'',
      //Litigator:'Yes',
      //Age_In_Seconds:5,
      //deliveryResponse:'',
      //Optout:'',
      //Unique_Identifier:'',
      //Time_On_Page:12,
      //TCPA_Language:'',
      //Total_Premium:'',
      //Sold_Tier:'',
      //Quoted_Carrrier:'',
      //Age:'', 
      //Insured_Since:'',
      //Policy_Expiration:'',
      //Exterior_Walls:'',
      //Smoke_Alarm:'',
      //Indoor_Sprinklers:'',
      //Central_Air_Conditioning:'',  
      //Years_At_Current_Residence:'',
      //Years_At_Previous_Residence:'',
      
      //start 
      // form 1 field
      //ownOrRent: "",
      // from script
      Trusted_Form_URL: "",
      LeadiD_Token: "",
      //form 2 fields
      Year_Built: "",
      Property_Type: "",
      // form 3 fields
      Stories: "",
      Square_Footage: "",
      //form 4 fields
      Currently_insured: "",
      Current_Insurance_Company: "",
      //form 5 fields
      Claims: "", 
      //howMany: "",
      //form 6 fields
      First_Name: "",
      Last_Name: "",
      //form 7 fields
      Primary_Phone: "", 
      Email: "",
      //form 8 fields
      DOB: "",
      Gender: "",
      //form 9 fields
      Zip: "60610", 
      Address: "",
      //form 10 fields
      City: "",
      Credit: "",
      //end

    },
  };

  componentDidUpdate = () => {
    console.log(this.state);
  };

  handleChange = (v) => {
    this.setState({
      postData: {
        ...this.state.postData,
        ownOrRent: v,
      },
    });
  };

  handleChangeYear = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Year_Built: value,
      },
    });
  };

  handleChangeType = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Property_Type: value,
      },
    });
  };

  handleChangeSize = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Square_Footage: value,
      },
    });
  };
  handleChangeStories = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Stories: value,
      },
    });
  };
  handleChangeInsured = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Currently_insured: value,
      },
    });
  };
  handleChangeCompany = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Current_Insurance_Company: value,
      },
    });
  };

  handleChangeClaims = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Claims: value,
      },
    });
  };
  handleChangeHowMany = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        howMany: value,
      },
    });
  };

  handleChangeFirst_Name = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        First_Name: e.target.value,
      },
    });
  };
  handleChangeLast_Name = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Last_Name: e.target.value,
      },
    });
  };

  handleChangePrimary_Phone = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Primary_Phone: e.target.value,
      },
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Email: e.target.value,
      },
    });
  };

  handleChangeDOB = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        DOB: value,
      },
    });
  };
  handleChangeGender = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Gender: value,
      },
    });
  };

  handleChangeZip = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Zip: e.target.value,
      },
    });
  };
  handleChangeAddress = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Address: e.target.value,
      },
    });
  };
  handleChangeCity = (e) => {
    this.setState({
      postData: {
        ...this.state.postData,
        City: e.target.value,
      },
    });
  };
  handleChangeCredit = (value) => {
    this.setState({
      postData: {
        ...this.state.postData,
        Credit: value,
      },
    });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="my-4" src={Logo} alt="Uotehound" width="150px" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <StepWizard initialStep={1}>
                <S1OwnOrRent
                  ownOrRent={this.state.postData.ownOrRent}
                  onChange={(v) => {
                    this.handleChange(v);
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        LeadiD_Token: document.getElementById("leadid_token")
                          .value,
                        Trusted_Form_URL: document.getElementById(
                          "Trusted_Form_URL_0"
                        ).value,
                      },
                    });
                    console.log(document.getElementById("Trusted_Form_URL_0"));
                  }}
                />
                <S2HomeType
                  Year_Built={this.state.postData.Year_Built}
                  Property_Type={this.state.postData.Property_Type}
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeYear(value);
                    } else if (value1 !== "") {
                      this.handleChangeType(value1);
                    }
                  }}
                />
                <S3HouseSize
                  Square_Footage={this.state.postData.Square_Footage}
                  Stories={this.state.postData.Stories}
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeStories(value);
                    } else if (value1 !== "") {
                      this.handleChangeSize(value1);
                    }
                  }}
                />
                <S4AboutInsurance
                  Currently_insured={this.state.postData.Currently_insured}
                  Current_Insurance_Company={
                    this.state.postData.Current_Insurance_Company
                  }
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeInsured(value);
                    } else if (value1 !== "") {
                      this.handleChangeCompany(value1);
                    }
                  }}
                />
                <S5ClaimedAnything
                  claimedAnything={this.state.postData.claimedAnything}
                  howMany={this.state.postData.howMany}
                  onChange={(value, value1) => {
                    if (value !== "") {
                      //this.handleChangeHowMany(value);
                    } else if (value1 !== "") { 
                      this.handleChangeClaims(value1);
                    }
                  }}
                />
                <S6Personalnfo
                  First_Name={this.state.postData.First_Name}
                  Last_Name={this.state.postData.Last_Name}
                  onChange={(e, e1) => {
                    if (e !== "") {
                      this.handleChangeFirst_Name(e);
                    } else if (e1 !== "") {
                      this.handleChangeLast_Name(e1);
                    }
                  }}
                />
                <S7Personalnfo
                  Primary_Phone={this.state.postData.Primary_Phone}
                  Email={this.state.postData.Email}
                  onChange={(e, e1) => {
                    if (e !== "") {
                      this.handleChangePrimary_Phone(e);
                    } else if (e1 !== "") {
                      this.handleChangeEmail(e1);
                    }
                  }}
                />
                <S8Personalnfo
                  DOB={this.state.postData.DOB}
                  Gender={this.state.postData.Gender}
                  onChange={(value, value1) => {
                    if (value !== "") {
                      this.handleChangeDOB(value);
                    } else if (value1 !== "") {
                      this.handleChangeGender(value1);
                    }
                  }}
                />
                <S9Personalnfo
                  Zip={this.state.postData.Zip}
                  Address={this.state.postData.Address}
                  onChange={(e, e1) => {
                    if (e !== "") {
                      this.handleChangeZip(e);
                    } else if (e1 !== "") {
                      this.handleChangeAddress(e1);
                    }
                  }}
                />
                <S10Personalnfo
                  City={this.state.postData.City}
                  Credit={this.state.postData.Credit}
                  onChange={(e, value1) => {
                    if (e !== "") {
                      this.handleChangeCity(e);
                    } else if (value1 !== "") {
                      this.handleChangeCredit(value1);
                    }
                  }}
                  object={this.state.postData}
                />
              </StepWizard>
            </div>
          </div>
        </div>

        <Grid
          container
          xs={12}
          align="center"
          style={{ justifyContent: "center" }}
        >
          <Grid container xs={8} style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: 700, lineHeight: 1.5 }}>
                Providers Include:
              </Typography>
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/1.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/2.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/3.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "0rem" }}>
              <img
                width="80%"
                height="auto"
                alt="missing"
                src={require("./Assets/4.png")}
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                alt="missing"
                src={require("./Assets/5.png")}
              />
            </Grid>
          </Grid>
          <Grid
            container
            xs={10}
            style={{ paddingBottom: "1rem", marginTop: "1rem" }}
          >
            <Grid item lg={3} xs={12} style={{ alignSelf: "flex-end" }}>
              <Typography
                style={{ fontSize: "15px", color: "rgb(166, 166, 166)" }}
              >
                @ 2020 Quotehound
              </Typography>
            </Grid>
            <Grid item lg={6} xs={0} />
            <Grid container lg={3} xs={12}>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quotehound.com/"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Visit Us
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{ fontSize: "15px", color: "rgb(166, 166, 166)" }}
                >
                  <a
                    href="https://quotehound.com/privacy-policy"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Privacy Policy
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quotehound.com/terms-conditions"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Terms & Conditions
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
