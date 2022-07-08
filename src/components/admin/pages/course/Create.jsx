import Guid from "guid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { api_createCourse } from "../../../../utilities/allApis";

import { useGlobal } from "../../context/GlobalContext";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import Header from "../../sharedComponets/Header";
import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";
import MainSidebar from "../../sharedComponets/MainSidebar";

const Create = () => {
	//initialState to create course
	const initialState = {
		name: "",
		courseCode: "",
		credit: "",
	};
	const [inputState, setInput] = React.useState(initialState);
	//handleCreate function from global context
	const { handleCreate } = useGlobal();

	const navigate = useNavigate();
	//submit course form data to create course
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiEnd = api_createCourse;
		const payload = inputState;
		const redirectTo = "/course";
		handleCreate(apiEnd, payload, redirectTo);
		setInput({ ...initialState }); //reset input field
	};
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow-lg mt-0">
							<h3 className="text-center text-info my-5 font-weight-bold ">
								Create Course
							</h3>

							{/* /.card-header */}
							{/* form start */}
							<form className="form-horizontal" onSubmit={handleSubmit}>
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
												placeholder="e.g. CEE 211"
												value={inputState.courseCode}
												onChange={(e) => {
													setInput({
														...inputState,
														courseCode: e.target.value,
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
											Title
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. Fluid Mechanics"
												value={inputState.name}
												onChange={(e) => {
													setInput({
														...inputState,
														name: e.target.value,
													});
												}}
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
												placeholder="e.g. 4.0"
												value={inputState.credit}
												onChange={(e) => {
													setInput({
														...inputState,
														credit: e.target.value,
													});
												}}
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
										className="btn btn-success  button-create float-right btn-sm"
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

export default Create;
