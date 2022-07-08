import React from "react";
import { useNavigate } from "react-router-dom";
import { api_createProgramOutcome } from "../../../../utilities/allApis";
import { depertmentID } from "../../../../utilities/UtilityVariable";
import { useGlobal } from "../../context/GlobalContext";
import Breadcrumb from "../../sharedComponets/Breadcrumb";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import Header from "../../sharedComponets/Header";
import MainSidebar from "../../sharedComponets/MainSidebar";
import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";

const Create = () => {
	//initialState to create po
	const initialState = {
		departmentID: depertmentID,
		poCode: "",
		description: "",
	};
	const { handleCreate } = useGlobal(); //from global context

	const [inputState, setInput] = React.useState(initialState);

	const navigate = useNavigate();
	//submit po form data to create po
	const handleSubmit = (e) => {
		e.preventDefault();
		const apiEnd = api_createProgramOutcome;
		const payload = inputState;
		const redirectTo = "/po";
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
								Create Program Outcomes
							</h3>

							{/* /.card-header */}
							{/* form start */}
							<form className="form-horizontal" onSubmit={handleSubmit}>
								<div className="card-body">
									<div className="form-group row">
										<label
											htmlFor="inputyear"
											className="col-sm-2 col-form-label"
										>
											PO Id
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="e.g. PO-1"
												value={inputState.poCode}
												onChange={(e) => {
													setInput({ ...inputState, poCode: e.target.value });
												}}
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
												value={inputState.description}
												onChange={(e) => {
													setInput({
														...inputState,
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
											navigate("/po");
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
