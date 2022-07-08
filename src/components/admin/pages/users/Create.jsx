import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api_accountRegistration } from "../../../../utilities/allApis";
import { depertmentID } from "../../../../utilities/UtilityVariable";
import { useGlobal } from "../../context/GlobalContext";

import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";

import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const Create = () => {
	const navigate = useNavigate();
	//initialState to create semester
	const initialState = {
		departmentId: depertmentID,
		userName: "",
		fullName: "",
		phoneNumber: "",
		email: "",
		password: "",
	};
	//handleCreate function from global context
	const { handleCreate } = useGlobal();

	const [inputState, setInput] = useState(initialState);
	console.log(inputState);
	//submit form data
	const handleSubmit = (e) => {
		e.preventDefault();

		const apiEnd = api_accountRegistration;
		const payload = inputState;
		const redirectTo = "/users";
		handleCreate(apiEnd, payload, redirectTo);
		setInput(initialState); //reset form field to initial value
	};
	return (
		<div className="wrapper">
			<HeadMainToastComponent />
			<DashboardContentWrapper>
				<div className="row justify-content-center">
					<div className="col-sm-10 col-12">
						<div className="card shadow-lg mt-0">
							<h3 className="text-center text-info my-5 font-weight-bold ">
								Create User
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
											Full Name
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												placeholder="e.g. nahidul islam"
												value={inputState.fullName}
												onChange={(e) =>
													setInput({ ...inputState, fullName: e.target.value })
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											User Name
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												placeholder="e.g. nahid_123"
												value={inputState.userName}
												onChange={(e) =>
													setInput({ ...inputState, userName: e.target.value })
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputdescription"
											className="col-sm-2 col-form-label"
										>
											phone
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. +880183838"
												value={inputState.phoneNumber}
												onChange={(e) =>
													setInput({
														...inputState,
														phoneNumber: e.target.value,
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
											Email
										</label>
										<div className="col-sm-10">
											<input
												required
												type="email"
												className="form-control form-control-sm"
												placeholder="e.g. nahid@gmail.com"
												value={inputState.email}
												onChange={(e) =>
													setInput({ ...inputState, email: e.target.value })
												}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											htmlFor="inputdescription"
											className="col-sm-2 col-form-label"
										>
											password
										</label>
										<div className="col-sm-10">
											<input
												required
												type="password"
												className="form-control form-control-sm"
												placeholder="password"
												value={inputState.password}
												onChange={(e) =>
													setInput({ ...inputState, password: e.target.value })
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
											navigate("/users");
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
