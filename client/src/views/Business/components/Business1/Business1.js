import React from "react";
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import '../../../../App.css';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'grey',
      borderWidth:"10vh",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
      borderWidth:".5vh",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
        borderWidth:".5vh",
      },
      '&:hover fieldset': {
        borderColor: 'grey',
        borderWidth:".5vh",

      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
        borderWidth:"1vh",
        
      },
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },

});

export default class Business1 extends React.Component {

  constructor(props){
  super(props);
  this.state = {
    FullName: '',
    Email:'',
    PhoneNumber:'',
    BusinessName:'',
    City:'',
    AdditionalComments:'',
  }
}
handleChangeFullName = event => {
  this.setState({ FullName: event.target.value });
};

handleChangeEmail = event => {
  this.setState({ Email: event.target.value });
};

handleChangePhoneNumber = event => {
  this.setState({ PhoneNumber: event.target.value });
};

handleChangeBusinessName = event => {
  this.setState({ BusinessName: event.target.value });
};
handleChangeCity = event => {
  this.setState({ City: event.target.value });
};
handleChangeAdditionalComments = event => {
  this.setState({ AdditionalComments: event.target.value });
};
  render() {
    // const classes = useStyles();
  return (
    <React.Fragment>
    <div  style={{height: '50vh'}}>
        <div>
        <div>
      <Grid container xs={12}>
        
        <Grid container xs={12} align="center">
          
              <div>
                <Grid container xs={12} align="center" style={{marginTop:'25vh'}}>
                  <Grid item xs={12}>
                    <Typography style={{ fontSize: "25px",color:'black' }}>
                      Awesome Work!
                    </Typography>
                    <Typography style={{ fontSize: "13px", marginTop: "5vh",color:'black' }}>
                      If you're a cannabis business owner, complete the form,
                      we'll reach out to answer
                    </Typography>
                    <Typography style={{ fontSize: "13px", marginTop: "1vh",color:'black' }}>
                      your questions and get you started.
                    </Typography>
                    <Typography style={{ fontSize: "13px", marginTop: "5vh",color:'black' }}>
                      If you're a customer needing assistance, please contact
                      us.
                    </Typography>
                  </Grid>
                  <Grid container xs={12} justify="center">
                    <form
                      autoComplete="off"
                      align="center"
                    >
                      <Grid container xs={12}>
                        <Grid
                          item
                          xs={12}
                          
                          style={{ marginTop: "4vh" }}
                        >
                          {" "}
                            <CssTextField
                              inputProps={{
                                // classes: classes.rootModal,
                                style: {
                                  align: "center",
                                  width: "70vh", 
                                }
                              }}
                              InputLabelProps={{
                                style: {
                                  color: "black"
                                }
                              }}
                              label="Full Name"
                              value={this.state.FullName}
                              onChange={this.handleChangeFullName}
                              variant="outlined"
                            />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{ marginTop: "4vh" }}
                        >
                          <CssTextField
                            inputProps={{
                              style: {
                                align: "center",
                                width: "70vh"
                              }
                            }}
                            InputLabelProps={{
                              style: {
                                color: "black"
                              }
                            }}
                            id="validation-outlined-input"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={this.state.Email}
                            onChange={this.handleChangeEmail}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          
                          style={{ marginTop: "4vh" }}
                        >
                          <CssTextField
                            inputProps={{
                              style: {
                                align: "center",
                                width: "70vh"
                              }
                            }}
                            InputLabelProps={{
                              style: {
                                color: "black"
                              }
                            }}
                            id="validation-outlined-input"
                            label="Phone Number"
                            useref='Numeric'
                            hintText="Numeric"
                            floatingLabelText="Numeric"
                            type="Numeric"
                            variant="outlined"
                            value={this.state.PhoneNumber}
                            onChange={this.handleChangePhoneNumber}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{ marginTop: "4vh" }}
                        >
                          <CssTextField
                            inputProps={{
                              style: {
                                width: "70vh"
                              }
                            }}
                            InputLabelProps={{
                              style: {
                                color: "black"
                              }
                            }}
                            id="validation-outlined-input"
                            label="Business Name"
                            variant="outlined"
                            value={this.state.BusinessName}
                            onChange={this.handleChangeBusinessName}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{ marginTop: "4vh" }}
                        >
                          <CssTextField
                            inputProps={{
                              style: {
                                align: "center",
                                width: "70vh"
                              }
                            }}
                            InputLabelProps={{
                              style: {
                                color: "black"
                              }
                            }}
                            id="validation-outlined-input"
                            label="City"
                            value={this.state.City}
                            onChange={this.handleChangeCity}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "4vh" }}>
                          <CssTextField
                            inputProps={{
                              style: {
                                width: "70vh",
                                height: "44px"
                              }
                            }}
                            InputLabelProps={{
                              style: {
                                color: "black"
                              }
                            }}
                            value={this.state.AdditionalComments}
                            onChange={this.handleChangeAdditionalComments}
                            id="validation-outlined-input"
                            label="Additional Comments"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1} />
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={12} align='center' style={{marginTop:'10vh'}}>
              <Button style={{width:'160px',borderRadius:'25px',paddingTop:'2vh',paddingBottom:'2vh'}} variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div> 
  </React.Fragment>
    );
  }
}


