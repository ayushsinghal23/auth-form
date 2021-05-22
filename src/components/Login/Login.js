// import libraries
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthStatus } from "../context/authContext";
// import files
import "./Login.css";
import Submit from "../../UI/Submit";
import axios from "axios";

const Login = (props) => {
	const { ChangeAuth } = useContext(AuthStatus);
	const [errormsg, setErrormsg] = useState("");
	const history = useHistory();
	const AuthenticateLogin = async (e) => {
		setErrormsg("");
		e.preventDefault();
		try {
			const loginInfo = {
				email,
				password,
			};
			const loginResult = await axios.post(
				// "http://localhost:5000/auth/login",
				"https://authenticate-form.herokuapp.com/auth/login",
				loginInfo
			);
			const response = loginResult.data;

			if (response.errormsg) {
				setErrormsg(response.errormsg);
			} else {
				ChangeAuth();
				setEmail("");
				setPassword("");
				history.push("/");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<main>
			<div className="login">
				<div className="authenticate">
					<Link to="/login" style={{ width: "50%" }}>
						<button className="coloredBackground auth">SignIn</button>
					</Link>
					<Link to="/signup" style={{ width: "50%" }}>
						<button className="auth">SignUp</button>
					</Link>
				</div>
				<form
					onSubmit={AuthenticateLogin}
					onFocus={() => {
						setErrormsg("");
					}}
				>
					<div style={{ marginBottom: "10px", padding: "0px 15px" }}>
						{" "}
						{errormsg.length === 0 ? (
							<div className="error">{errormsg}</div>
						) : (
							<div className="error active">{errormsg}</div>
						)}
					</div>

					<div>
						<label>Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<Submit authenticationType="signin" />
				</form>
			</div>
		</main>
	);
};

export default Login;
