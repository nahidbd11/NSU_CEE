import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../../../assets/images/avatar_male.jpg";
import { api_accountUpdate } from "../../../../utilities/allApis";
import getAuthUser from "../../../../utilities/getAuthUser";
import { depertmentID } from "../../../../utilities/UtilityVariable";
import { useGlobal } from "../../context/GlobalContext";
const Profile = ({ setModalOpen }) => {
	const authUser = getAuthUser();

	const initialState = {
		departmentId: depertmentID,
		userName: authUser.userName,
		fullName: authUser.fullName,
		phoneNumber: authUser.phoneNo,
		email: authUser.email,
		newPassword: "",
	};

	const [inputState, setInput] = useState(initialState);
	const { handleUpdate } = useGlobal();

	const navigate = useNavigate();
	const handleUpdateProfile = async (e) => {
		e.preventDefault();
		const api = api_accountUpdate;
		const payload = inputState;
		const redirectTo = "/";
		console.log(payload);
		const resData = await handleUpdate(api, payload, redirectTo);
		if (resData.token) {
			localStorage.setItem("authUser", JSON.stringify(resData));
			setModalOpen(false);
			navigate("/");
		}

		//TODO:after  get response data save to localStorage
	};
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-xlg-3 col-md-5">
					<div className="card shadow-lg">
						<div className="card-body">
							<center className="mt-5">
								<img
									src={avatar}
									className="rounded-circle"
									width={150}
									alt=""
								/>
								<h4>{authUser.userName}</h4>
								<h6 className="card-subtitle">Admin</h6>
							</center>
						</div>
						<div>
							<hr />
						</div>
					</div>
				</div>

				<div className="col-lg-8 col-xlg-9 col-md-7 ">
					<div className="card shadow-lg">
						<div className="card-body">
							<form
								className="form-horizontal form-material mx-2"
								onSubmit={handleUpdateProfile}
							>
								<div className="form-group">
									<label className="col-md-12">Full Name</label>
									<div className="col-md-12">
										<input
											required
											type="text"
											placeholder="Johnathan Doe"
											className="form-control form-control-sm"
											value={inputState.fullName}
											onChange={(e) =>
												setInput({ ...inputState, fullName: e.target.value })
											}
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="example-email" className="col-md-12">
										Email
									</label>
									<div className="col-md-12">
										<input
											required
											type="email"
											placeholder="johnathan@admin.com"
											className="form-control form-control-sm"
											name="example-email"
											id="example-email"
											value={inputState.email}
											onChange={(e) =>
												setInput({ ...inputState, email: e.target.value })
											}
										/>
									</div>
								</div>
								{/* <div className="form-group">
									<label className="col-md-12">old Password</label>
									<div className="col-md-12">
										<input
											required
											type="password"
											defaultValue="password"
											className="form-control form-control-sm"
										/>
									</div>
								</div> */}
								<div className="form-group">
									<label className="col-md-12">New Password</label>
									<div className="col-md-12">
										<input
											required
											type="password"
											defaultValue="password"
											className="form-control form-control-sm"
											value={inputState.newPassword}
											onChange={(e) =>
												setInput({
													...inputState,
													newPassword: e.target.value,
													currentPassword: "",
												})
											}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-md-12">Phone No</label>
									<div className="col-md-12">
										<input
											required
											type="text"
											placeholder="eg.123 456 7890"
											className="form-control form-control-sm"
											value={inputState.phoneNumber}
											onChange={(e) =>
												setInput({ ...inputState, phoneNumber: e.target.value })
											}
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-sm-12">
										<button
											className="btn btn-success text-white"
											type="submit"
										>
											Update Profile
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
