// import libraries
import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { AuthStatus } from "../context/authContext";

// import files
import "./Signup.css";
import Submit from "../../UI/Submit";
import axios from "axios";

const SignUp = (props) => {
	const { ChangeAuth } = useContext(AuthStatus);
	const [errormsg, setErrormsg] = useState("");
	const AuthenticateSignUp = async (e) => {
		setErrormsg("")
		e.preventDefault();
		try {
			const SignUpInfo = {
				name,
				mobNo,
				email,
				password,
				passwordVerify,
			};
			const SignupResult = await axios.post(
				"http://localhost:5000/auth/register",
				SignUpInfo
			);
			const response = SignupResult.data;
			if (response.errormsg) {
				setErrormsg(response.errormsg);
			} else {
				ChangeAuth();
				setName("");
				setEmail("");
				setMobno("");
				setPassword("");
				setPasswordVerify("");
			}
		} catch (err) {
			console.log(err);
		}
	};
	const [name, setName] = useState("");
	const [mobNo, setMobno] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVerify, setPasswordVerify] = useState("");
	return (
		<main>
			<div className="signup">
				<div className="signup-authenticate">
					<Link to="/login" style={{ width: "50%" }}>
						<button className="signup-auth">SignIn</button>
					</Link>
					<Link to="/signup" style={{ width: "50%" }}>
						<button className="coloredBackground signup-auth">SignUp</button>
					</Link>
				</div>

				<form className="signup-form" onSubmit={AuthenticateSignUp} onFocus={()=>{setErrormsg("")}}>
					{errormsg.length===0 ? (
						<div className="errormsg">{errormsg}</div>
					) : (
						<div className="errormsg active">{errormsg}</div>
					)}
					<div>
						<label>Name</label>
						<span>
							<input
								type="text"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								
								autoComplete="none"
							/>
						</span>
					</div>
					<div>
						<label>Mobile Number</label>
						<span>
							<input
								type="text"
								value={mobNo}
								onChange={(e) => {
									setMobno(e.target.value);
								}}
								autoComplete="none"
							/>
						</span>
					</div>
					<div>
						<label>Email</label>
						<span>
							<input
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								autoComplete="none"
							/>
						</span>
					</div>
					<div>
						<label>Password</label>
						<span>
							<input
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</span>
					</div>
					<div>
						<label>Confirm Password</label>
						<span>
							<input
								type="password"
								value={passwordVerify}
								onChange={(e) => {
									setPasswordVerify(e.target.value);
								}}
							/>
						</span>
					</div>
					<Submit authenticationType="signup" />
				</form>
			</div>
		</main>
	);
};

export default SignUp;
