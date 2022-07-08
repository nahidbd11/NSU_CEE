import React from "react";
import { Children } from "react/cjs/react.production.min";
import DashboardContentWrapper from "./DashboardContentWrapper";
import Header from "./Header";
import MainSidebar from "./MainSidebar";

const DashboardMainWrapper = ({ children }) => {
	return (
		<div className="wrapper">
			<Header />
			<MainSidebar />
			<DashboardContentWrapper>{children}</DashboardContentWrapper>
		</div>
	);
};

export default DashboardMainWrapper;
