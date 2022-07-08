import React, { useContext, useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { api_accountLogin } from "../../../utilities/allApis";
import fetchData, { fetchOptions } from "../../../utilities/fetchData";
import getAuthUser from "../../../utilities/getAuthUser";
import { apiBaseUrl } from "../../../utilities/UtilityVariable";
import { useGlobal } from "../context/GlobalContext";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const location = useLocation();
	const { setToastMessage } = useGlobal();

	const from = location.state?.from?.pathname || "/";
	const handleLogin = (email, password) => {
		// login data
		const payload = {
			email,
			password,
		};
		//post login data
		fetch(api_accountLogin, fetchOptions("POST", payload))
			.then((res) => res.json())
			.then((d) => {
				console.log(d);
				if (d.token !== null) {
					localStorage.setItem("authUser", JSON.stringify(d));
					setToastMessage({
						message: "successfully login",
						type: "success",
					});
					navigate(from, { replace: true });
					setToastMessage({}); //reset toast message after showing successfully login toast message
				}
				if (d.errors) {
				
					setToastMessage({ message: "You aren't authorized,please check your email or password", type: "error" });
				}
				else if (d.message) {
					setToastMessage({ message: d.message, type: "error" });
				}
			});

		//finally reset toast message
		setToastMessage({});
	};

	const handleLogout = () => {
		localStorage.removeItem("authUser");
		setToastMessage({});
		navigate("/login");
	};
	return (
		<AuthContext.Provider value={{ handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
