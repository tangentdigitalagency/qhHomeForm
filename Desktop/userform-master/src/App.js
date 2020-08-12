import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Grid from '@material-ui/core/Grid';
import UserForm from './components/UserForm'
import { Input, Button, Col, Row, Form, Typography } from 'antd';

class App extends Component {


	render() {
		return (
			<div
				className="container-fluid m-0"
				style={{ minHeight: "100vh", backgroundColor: "#f7f7f7", overflow: "hidden" }}
			>
				<UserForm />
				<Grid container xs={12} align='center' style={{justifyContent:'center'}}>
					<Grid container xs={6} style={{justifyContent:'center'}}>
						<Grid item xs={12}>
							<Typography style={{fontWeight:700,lineHeight:1.5}}>Providers Include:</Typography>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="120" src={require('./assets/1.jpeg')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="120" src={require('./assets/2.jpeg')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="120" src={require('./assets/3.jpeg')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="120" src={require('./assets/4.jpeg')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="/120" src={require('./assets/5.jpeg')}/>
						</Grid>
					</Grid>
					<Grid container xs={10} style={{paddingBottom:'1rem',marginTop:'1rem'}}>
						<Grid item lg={3} xs={12} style={{alignSelf:'center'}}>
							<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)'}}>@ 2020 QuoteWizard by Landing Time</Typography>
						</Grid>
						<Grid item lg={6} xs={0}/>
						<Grid container lg={3} xs={12}>
							<Grid item lg={4} xs={12} style={{alignSelf:'center',marginTop:'1rem'}}>
								<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)',fontWeight:600}}>Contact Us</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{alignSelf:'center',marginTop:'1rem'}}>
								<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)'}}><a href="https://quotehound.com/privacy-policy" style={{color:'rgb(166,166,166)',fontWeight:'400'}}>Privacy Policy</a></Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{alignSelf:'center',marginTop:'1rem'}}>
								<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)',fontWeight:600}}>Terms of Use</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				
			</div>
		);
	}
}

export default App;
