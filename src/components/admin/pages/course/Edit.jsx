import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { api_updateCourse } from "../../../../utilities/allApis";

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
	const handleEdit = (e) => {
		e.preventDefault();
		const apiEnd = api_updateCourse;
		const redirectTo = "/Course";
		handleUpdate(apiEnd, dataToEdit, redirectTo);
	};
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow mt-0">
							<h3 className="text-center text-warning my-5 font-weight-bold ">
								Edit Course
							</h3>

							{/* /.card-header */}
							{/* form start */}
							<form className="form-horizontal" onSubmit={handleEdit}>
								<div className="card-body">
									<div className="form-group row">
										<label
											htmlFor="inputTitle"
											className="col-sm-2 col-form-label"
										>
											Course Code
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputTitle"
												placeholder="course id"
												value={dataToEdit.courseCode}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														courseCode: e.target.value,
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
											Title
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="title"
												value={dataToEdit.name}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														name: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputdescription"
											className="col-sm-2 col-form-label"
										>
											Credit
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputdescription"
												placeholder="credit"
												value={dataToEdit.credit}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														credit: e.target.value,
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
											navigate("/course");
										}}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="btn btn-info button-edit float-right btn-sm"
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
