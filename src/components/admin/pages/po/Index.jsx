import React from "react";
import { Link } from "react-router-dom";
import Login from "../../auth/Login";
import Table from "./Table";
import Header from "../../sharedComponets/Header";
import MainSidebar from "../../sharedComponets/MainSidebar";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import useGlobalToast from "../../../../customhooks/useToast";
import { ToastContainer } from "react-toastify";

const Index = () => {
	useGlobalToast(); //show any toast message in index page
	return (
		<div className="wrapper">
			<Header />
			<MainSidebar />
			<ToastContainer />
			<DashboardContentWrapper>
				<div className="row ">
					<div className="col-12">
						<div class="card w-100 rounded shadow-lg">
							<div class="card-body">
								<div className="d-flex flex-column flex-sm-row justify-content-between">
									<h1 class="card-title text-secondary">Program Outcomes</h1>
									{/* TODO: for create form */}
									<Link to="create">
										<button className="btn btn-sm btn-outline-info mt-sm-0 mt-3">
											<i className="fas fa-plus-circle mr-2" />
											Add PO
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
