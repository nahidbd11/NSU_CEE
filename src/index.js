import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/admin/auth/Authcontext";
import "react-toastify/dist/ReactToastify.css";

import "./style/css/style.css";
import GlobalContextWrapper from "./components/admin/context/GlobalContext";

ReactDOM.render(
	<BrowserRouter>
		<GlobalContextWrapper>
			<AuthProvider>
				<App />
			</AuthProvider>
		</GlobalContextWrapper>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
