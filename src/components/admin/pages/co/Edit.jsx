import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import uuid from "react-uuid";
import useFetch from "../../../../customhooks/useFetch";
import {
	api_getAllCourse,
	api_getAllProgramOutcome,
	api_updateCourseOutcome,
} from "../../../../utilities/allApis";
import { fetchOptions } from "../../../../utilities/fetchData";
import { useGlobal } from "../../context/GlobalContext";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";

import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const Edit = () => {
	const navigate = useNavigate();
	const location = useLocation();
	//Api calling for courseData to show in select course field
	const { data: courseData, loading: courseDataLoading } = useFetch(
		api_getAllCourse,
		fetchOptions("GET")
	);
	//Api calling for po Data to show in select po field
	const { data: poData, loading: poDataLoading } = useFetch(
		api_getAllProgramOutcome,
		fetchOptions("GET")
	);

	const editData = location.state?.editData; //get editData from link state (this link is from table actions edit button)
	console.log(editData);
	//edit form field value and payload for edit api
	const [dataToEdit, setdataToEdit] = useState(
		(editData && {
			id: editData.courseOutcomeId,
			courseId: editData.courseId,
			courseNo: editData.courseCode,
			coCode: editData.coCode,
			description: editData.coDescription,
		}) ||
			""
	);
	//update function from global context
	const { handleUpdate } = useGlobal();
	//after submitting form
	const handleEdit = (e) => {
		e.preventDefault();
		const apiEnd = api_updateCourseOutcome;
		const redirectTo = "/co";
		console.log(dataToEdit);
		handleUpdate(apiEnd, dataToEdit, redirectTo);
	};
	console.log(dataToEdit);
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow mt-0">
							<h3 className="text-center text-warning my-5 font-weight-bold ">
								Edit Course Outcomes
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
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														courseId: e.target.value.split(",")[0],
														courseNo: e.target.value.split(",")[1],
													})
												}
											>
												<option
													key={uuid()}
													value={[dataToEdit.courseId, dataToEdit.courseNo]}
												>
													{dataToEdit.courseNo}
												</option>
												{!courseDataLoading &&
													courseData.map((cd) => {
														return (
															<option
																key={uuid()}
																value={[cd.id, cd.courseCode]}
															>
																{cd.courseCode}
															</option>
														);
													})}
											</select>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											CO Id
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. CO1"
												value={dataToEdit.coCode}
												onChange={(e) => {
													setdataToEdit({
														...dataToEdit,
														coCode: e.target.value,
													});
												}}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											PO Id
										</label>
										<div className="col-sm-10">
											<select
												disabled
												required
												class="form-control form-control-sm "
												// onChange={(e) =>
												// 	setdataToEdit({
												// 		...dataToEdit,
												// 		courseNo: e.target.value,
												// 	})
												// }
											>
												<option selected>{editData.poCode}</option>
												{!poDataLoading &&
													poData.map((pd) => {
														return (
															<option key={uuid()} value={pd.poCode}>
																{pd.poCode}
															</option>
														);
													})}
											</select>
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
												onChange={(e) => {
													setdataToEdit({
														...dataToEdit,
														description: e.target.value,
													});
												}}
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
											navigate("/co");
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
