import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import uuid from "react-uuid";

import { api_updateSemester } from "../../../../utilities/allApis";

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
		const apiEnd = api_updateSemester;
		const redirectTo = "/semester";
		handleUpdate(apiEnd, dataToEdit, redirectTo);
	};
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<ToastContainer />
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow-lg mt-0">
							<h3 className="text-center text-warning my-5 font-weight-bold ">
								Edit Semester
							</h3>

							<form className="form-horizontal" onSubmit={handleSubmit}>
								<div className="card-body">
									<div className="form-group row">
										<label
											htmlFor="inputTitle"
											className="col-sm-2 col-form-label"
										>
											Title
										</label>
										<div className="col-sm-10">
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														title: e.target.value,
													})
												}
											>
												<option value={dataToEdit.title}>
													{dataToEdit.title}
												</option>
												<option value="Spring">Spring</option>
												<option value="Summer">Summer</option>
												<option value="Fall">Fall</option>
											</select>
											{/* <input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputTitle"
												value={inputState.title}
												placeholder="e.g. Spring "
											/> */}
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											Year
										</label>
										<div className="col-sm-10">
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) => {
													setdataToEdit({
														...dataToEdit,
														year: e.target.value,
													});
												}}
											>
												<option value={dataToEdit.year}>
													{dataToEdit.year}
												</option>
												{[...Array(16)].map((_, i) => (
													<option value={`${2025 - i}`} key={uuid()}>
														{2025 - i}
													</option>
												))}
												{/* <option value="Spring">Spring</option>
												<option value="Summer">Summer</option>
												<option value="Fall">Fall</option> */}
											</select>
										</div>
									</div>
								</div>
								{/* /.card-body */}
								<div className="card-footer text-center">
									<button
										type="submit"
										className="btn btn-danger button-cancel ml-3 float-right btn-sm"
										onClick={() => {
											navigate("/semester");
										}}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="btn btn-success button-create float-right btn-sm"
									>
										Edit
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
