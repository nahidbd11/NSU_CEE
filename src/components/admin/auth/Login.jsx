import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useGlobalToast from "../../../customhooks/useToast";
import { useGlobal } from "../context/GlobalContext";
import ErrorMessage from "../sharedComponets/ErrorMessage";
import { useAuth } from "./Authcontext";
import "./login.css";

const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const { handleLogin } = useAuth();
	const { toastMessage } = useGlobal();
	console.log(toastMessage);
	const handleSubmit = (e) => {
		console.log(email, password);
		e.preventDefault();
		handleLogin(email, password);
	};
	console.log(Array.isArray(toastMessage.message));
	return (
		<div className="container-fluid">
			<div className="row">
				<div className={`col-sm-6 col-md-7 intro-section`}>
					<div className="brand-wrapper">
						{/* <h1>
							<a href="https://stackfindover.com/">Logo</a>
						</h1> */}
					</div>
					<div className="intro-content-wrapper">
						<h1 className="intro-title">Welcome to NSU CIVIL </h1>
						<p className="intro-text">
							The department is equipped with high quality faculty members
							having academic affiliation from reputed universities ...
						</p>
						<a className="btn btn-read-more btn-disabled">Read more</a>
					</div>
					<div className="intro-section-footer">
						{/* <na className="footer-nav">
							{" "}
							<a href="#!">Facebook</a> <a href="#!">Twitter</a>{" "}
							<a href="#!">Gmail</a>{" "}
						</na> */}
					</div>
				</div>
				<div className="col-sm-6 col-md-5 form-section">
					<div className="login-wrapper">
						<h2 className="login-title">Sign in</h2>
						<form id="loginForm" onSubmit={handleSubmit}>
							<div className="form-group">
								{" "}
								<label htmlFor="email" className="sr-only">
									Email
								</label>{" "}
								<input
									
									type="email"
									name="email"
									id="email"
									className="form-control"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
								/>{" "}
							</div>
							<div className="form-group mb-3">
								{" "}
								<label htmlFor="password" className="sr-only">
									Password
								</label>{" "}
								<input
									
									type="password"
									name="password"
									id="password"
									className="form-control"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>{" "}
							</div>
							<div className="d-flex justify-content-between align-items-center mb-5">
								{" "}
								<input
									name="login"
									id="login"
									className="btn login-btn"
									type="submit"
									defaultValue="Login"
								/>
								<a href="#!" className="forgot-password-link">
									Password?
								</a>
							</div>
						</form>
						{/* Show error message if user failed to login */}
						<div>
							<ErrorMessage messages={toastMessage.message} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
