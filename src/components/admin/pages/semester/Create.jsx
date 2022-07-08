import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";

import { ToastContainer } from "react-toastify";

import uuid from "react-uuid";

import { useGlobal } from "../../context/GlobalContext";
import { api_createSemester } from "../../../../utilities/allApis";
import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";
const Create = () => {
	//initialState to create semester
	const initialState = {
		title: "",
		year: "",
	};
	//handleCreate function from global context
	const { handleCreate } = useGlobal();

	const [inputState, setInput] = useState(initialState);
	console.log(inputState);
	const navigate = useNavigate();
	//submit course form data
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiEnd = api_createSemester;
		const payload = inputState;
		const redirectTo = "/semester";
		handleCreate(apiEnd, payload, redirectTo);
		setInput({ ...initialState }); //reset input field
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
								Create Semester
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
											Title
										</label>
										<div className="col-sm-10">
											<select
												required
												class="form-control form-control-sm "
												onChange={(e) =>
													setInput({ ...inputState, title: e.target.value })
												}
											>
												<option hidden disabled selected>
													-- select semester --
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
													setInput({ ...inputState, year: e.target.value });
												}}
											>
												<option hidden disabled selected>
													-- select year --
												</option>
												<option value={inputState.year}>
													{inputState.year}
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
