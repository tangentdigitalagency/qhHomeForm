import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import UserForm from './components/UserForm'


class App extends Component {


	render() {
		return (
			<div
				className="container-fluid m-0"
				style={{ minHeight: "100vh", backgroundColor: "#f7f7f7", overflow: "hidden" }}
			>
					<UserForm />
			</div>
		);
	}
}

export default App;
