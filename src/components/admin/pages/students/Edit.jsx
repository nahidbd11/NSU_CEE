import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { api_updateStudents } from "../../../../utilities/allApis";

import { useGlobal } from "../../context/GlobalContext";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";

import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const Edit = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const editData = location.state?.editData; //get editData from link state (this link is from table actions edit button)
	const [dataToEdit, setdataToEdit] = useState((editData && editData) || "");
	//update function from global context
	const { handleUpdate } = useGlobal();
	//after submitting form
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiEnd = api_updateStudents;
		const redirectTo = "/students";
		handleUpdate(apiEnd, dataToEdit, redirectTo);
	};
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow-lg mt-0">
							<h3 className="text-center text-warning my-5 font-weight-bold ">
								Edit Student
							</h3>

							<form className="form-horizontal" onSubmit={handleSubmit}>
								<div className="card-body">
									<div className="form-group row">
										<label
											htmlFor="inputTitle"
											className="col-sm-2 col-form-label"
										>
											Student Name:
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputTitle"
												placeholder="e.g. Fahad Amik "
												value={dataToEdit.name}
												onChange={(e) =>
													setdataToEdit({ ...dataToEdit, name: e.target.value })
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											Student ID:
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. 1721277042"
												value={dataToEdit.studentId}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														studentId: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											Email:
										</label>
										<div className="col-sm-10">
											<input
												required
												type="email"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. fahad@gmail.com"
												value={dataToEdit.email}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														email: e.target.value,
													})
												}
											/>
										</div>
									</div>
								</div>
								{/* /.card-body */}
								<div className="card-footer text-center">
									<button
										type="submit"
										className="btn btn-danger button-cancel ml-3 float-right btn-sm"
										onClick={() => {
											navigate("/students");
										}}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="btn btn-success button-create float-right btn-sm"
									>
										Create
									</button>
								</div>
								{/* /.card-footer */}
							</form>
						</div>
					</div>
				</div>
			</DashboardContentWrapper>
		</div>
	);
};

export default Edit;
