import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { api_accountUpdate } from "../../../../utilities/allApis";
import { depertmentID } from "../../../../utilities/UtilityVariable";
import { useGlobal } from "../../context/GlobalContext";
import Breadcrumb from "../../sharedComponets/Breadcrumb";
import DashboardContentWrapper from "../../sharedComponets/DashboardContentWrapper";
import Header from "../../sharedComponets/Header";
import HeadMainToastComponent from "../../sharedComponets/Head_Main_Toast";
import MainSidebar from "../../sharedComponets/MainSidebar";

const Edit = () => {
	const navigate = useNavigate();

	const location = useLocation();

	const editData = location.state?.editData; //get editData from link state (this link is from table actions edit button)

	const [dataToEdit, setdataToEdit] = useState(
		(editData && {
			userName: editData.userName,
			fullName: editData.fullName,
			email: editData.email,
			departmentId: depertmentID,
			phoneNumber: editData.phone,
			newPassword: "",
		}) ||
			""
	);
	//update function from global context
	const { handleUpdate } = useGlobal();
	//after submitting form
	const handleSubmit = (e) => {
		console.log(dataToEdit);
		e.preventDefault();
		const apiEnd = api_accountUpdate;
		const redirectTo = "/users";
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
								Edit User
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
												id="inputTitle"
												placeholder="name"
												value={dataToEdit.fullName}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														fullName: e.target.value,
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
											User Name
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="user name"
												value={dataToEdit.userName}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														userName: e.target.value,
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
											phone
										</label>
										<div className="col-sm-10">
											<input
												required
												type="text"
												className="form-control form-control-sm"
												id="inputyear"
												placeholder="phone"
												value={dataToEdit.phoneNumber}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
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
												id="inputyear"
												placeholder="email"
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
												id="inputyear"
												placeholder="enter new password"
												value={dataToEdit.newPassword}
												onChange={(e) =>
													setdataToEdit({
														...dataToEdit,
														newPassword: e.target.value,
														currentPassword: "",
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
											navigate("/users");
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
