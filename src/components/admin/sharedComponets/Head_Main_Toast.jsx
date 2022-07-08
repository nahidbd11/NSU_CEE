import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import MainSidebar from "./MainSidebar";

const HeadMainToastComponent = () => {
	return (
		<>
			<Header />
			<MainSidebar />
			<ToastContainer />
		</>
	);
};

export default HeadMainToastComponent;
