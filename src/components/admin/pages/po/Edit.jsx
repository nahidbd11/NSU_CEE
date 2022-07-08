import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { api_updateProgramOutcome } from "../../../../utilities/allApis";
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
		console.log(dataToEdit);
		const apiEnd = api_updateProgramOutcome;
		const redirectTo = "/po";
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
								Edit Program Outcomes
							</h3>

							{/* /.card-header */}
							{/* form start */}
							<form className="form-horizontal" onSubmit={handleEdit}>
								<div className="card-body">
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											Po Id
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="po id"
												value={dataToEdit.poCode}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														poCode: e.target.value,
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
											Description
										</label>
										<div className="col-sm-10">
											<textarea
												required
												class="form-control"
												id="inputdescription"
												rows="3"
												placeholder="description"
												value={dataToEdit.description}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														description: e.target.value,
													})
												}
											></textarea>
										</div>
									</div>
								</div>
								{/* /.card-body */}
								<div className="card-footer text-center">
									<button
										type="submit"
										className="btn btn-danger button-cancel ml-3 float-right btn-sm"
										onClick={() => {
											navigate("/po");
										}}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="btn btn-success button-edit float-right btn-sm"
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
