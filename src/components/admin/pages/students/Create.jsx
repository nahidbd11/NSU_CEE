import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Breadcrumb from "../../sharedComponets/Breadcrumb";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import Header from "../../sharedComponets/Header";
import MainSidebar from "../../sharedComponets/MainSidebar";
import { ToastContainer, toast } from "react-toastify";

import { useGlobal } from "../../context/GlobalContext";
import { apiBaseUrl, api_createStudents } from "../../../../utilities/allApis";
import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const Create = () => {
	//initialState to create semester
	const initialState = {
		name: "",
		studentId: "",
		email: "",
	};
	//handleCreate function from global context
	const { handleCreate } = useGlobal();

	const [inputState, setInput] = useState(initialState);

	const navigate = useNavigate();
	//submit form data
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiEnd = api_createStudents;
		const payload = inputState;
		const redirectTo = "/students";
		handleCreate(apiEnd, payload, redirectTo);
		setInput({ ...initialState }); //reset form fields
	};

	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<ToastContainer
							position="top-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
						{/* Same as */}
						<ToastContainer />
						<div className="card shadow-lg mt-0">
							<h3 className="text-center text-info my-5 font-weight-bold ">
								Create Student
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
											Student Name:
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputTitle"
												placeholder="e.g. Fahad Amik "
												value={inputState.name}
												onChange={(e) =>
													setInput({ ...inputState, name: e.target.value })
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
												value={inputState.studentId}
												onChange={(e) =>
													setInput({ ...inputState, studentId: e.target.value })
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
												value={inputState.email}
												onChange={(e) =>
													setInput({ ...inputState, email: e.target.value })
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

export default Create;
