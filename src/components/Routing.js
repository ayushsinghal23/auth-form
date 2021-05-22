import React,{useContext} from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { AuthStatus} from "./context/authContext";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";

const Routing = () => {
	// const authenticate=false;
	const {authenticate}=useContext(AuthStatus);
	return (
		<>
			
			<Router>
			
				{!authenticate && (
                    <>
                    <Redirect to="/login"/>
					<Switch>
						<Route path="/login" component={Login}/>
						<Route path="/signup" component={SignUp} />
					</Switch>
                    </>
				)}

				{authenticate && (
                    <>
                    	<Redirect to="/" />
					<Switch>					
						<Route path="/">
							<Home/>
						</Route>
					</Switch>
                    </>
				)}
			</Router>
		</>
	);
};

export default Routing;
