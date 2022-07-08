import React from "react";
import Breadcrumb from "./Breadcrumb";

const DashboardContentWrapper = ({ children }) => {
	return (
		<div className="content-wrapper">
			<div className="content-header">
				<div className="container-md">
					<div className="row justify-content-end">
						<div className="my-5 mr-3">
							<Breadcrumb />
						</div>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default DashboardContentWrapper;
