import React from "react";
import { Link } from "react-router-dom";

import Table from "./Table";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import useGlobalToast from "../../../../customhooks/useToast";

import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const Index = () => {
	useGlobalToast(); //show toast message after edit delete or successfull creation
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row ">
					<div className="col-12">
						<div class="card w-100 rounded shadow-lg">
							<div class="card-body ">
								<div className="d-flex flex-column flex-sm-row justify-content-between">
									<h1 class="card-title text-secondary">Course Outcomes</h1>
									{/* TODO: for create form */}
									<Link to="create">
										<button className="btn btn-sm btn-outline-info mt-sm-0 mt-3">
											<i className="fas fa-plus-circle mr-2" />
											Add CO
										</button>
									</Link>
								</div>
							</div>
						</div>
						<Table />
					</div>
				</div>
			</DashboardContentWrapper>
		</div>
	);
};

export default Index;
