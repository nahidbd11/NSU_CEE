import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../../auth/Login";
import Table from "./Table";
import Header from "../../sharedComponets/Header";
import MainSidebar from "../../sharedComponets/MainSidebar";
import FileUploadModal from "./FileUploadModal";
import bsCustomFileInput from "../../../../../node_modules/bs-custom-file-input";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import useGlobalToast from "../../../../customhooks/useToast";
import { ToastContainer } from "react-toastify";
import { apiBaseUrl } from "../../../../utilities/UtilityVariable";
import { useGlobal } from "../../context/GlobalContext";
import { api_getAllStudents } from "../../../../utilities/allApis";
import useTableData from "../../../../customhooks/useTableData";

const Index = () => {
	const [isRefreshTable, setIsRefreshTable] = useState(false);
	useGlobalToast(); //show toast message for differenct actions in index page
	return (
		<div className="wrapper">
			<Header />
			<MainSidebar />
			<ToastContainer />
			<DashboardContentWrapper>
				<div className="row">
					<div className="col-12">
						<div class="card w-100 rounded shadow-lg">
							<div class="card-body">
								<div className="d-flex flex-column flex-sm-row justify-content-between">
									<h1 class="card-title text-secondary">Students</h1>
									{/* TODO: for create form */}
									<div>
										<Link to="">
											<button
												className="btn btn-sm btn-outline-info mt-sm-0 mt-3"
												data-toggle="modal"
												data-target="#uploadModal"
											>
												<i className="fas fa-plus-circle mr-2" />
												Add File
											</button>
										</Link>
										<Link to="create" className="ml-2">
											<button className="btn btn-sm btn-outline-info mt-sm-0 mt-3">
												<i className="fas fa-user mr-2" />
												Add Students
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<Table isRefreshTable={isRefreshTable} />
						<FileUploadModal setIsRefreshTable={setIsRefreshTable} />
					</div>
				</div>
			</DashboardContentWrapper>
		</div>
	);
};

export default Index;
