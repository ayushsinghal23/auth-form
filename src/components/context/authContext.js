import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const AuthStatus = createContext();
const AuthContext = (props) => {
	const [authenticate, setAuthenticate] = useState(false);
	const ChangeAuth = async () => {
		const loggedInVerification = await axios.post(
			"http://localhost:5000/auth/loggedin"
		);
		const loggedInResult = loggedInVerification.data;
		if (loggedInResult) {
			setAuthenticate(true);
		}
		else{
			setAuthenticate(false);
		}
	};
	useEffect(() => {
		ChangeAuth();
	}, []);
	return (
		<AuthStatus.Provider value={{ authenticate, ChangeAuth }}>
			{props.children}
		</AuthStatus.Provider>
	);
};

export { AuthStatus };
export default AuthContext;
