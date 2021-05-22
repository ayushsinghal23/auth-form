// importing libraries
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// importing files
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
const Register = (props) => {
	const Registerauth = () => {
		props.auth();
	};
	return (
		<>
		{console.log("jfnjdhcj")}
			<Redirect to="/login" />
			<Switch>
				<Route
					path="/login"
					render={() => <Login authenticate={Registerauth} />}
				/>
				<Route
					path="/signup"
					render={() => <Signup authenticate={Registerauth} />}
				/>
			</Switch>
		</>
	);
};

export default Register;
