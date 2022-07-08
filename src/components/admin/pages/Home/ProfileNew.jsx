import React, { Children, useState } from "react";
import "./profile.css";
import avatar from "../../../../assets/images/avatar_male.jpg";
import getAuthUser from "../../../../utilities/getAuthUser";
import EditProfileModal from "./EditProfileModal";
const ProfileNew = ({ children, setModalOpen }) => {
	const authUser = getAuthUser();

	return (
		<div className="container">
			<div className="row d-flex justify-content-center mb-4 mt-3 ">
				<div className="col-xl-12 col-md-12">
					<div className="card user-card-full shadow-lg">
						<div className="row m-l-0 m-r-0">
							<div className="col-md-4 bg-c-lite-green user-profile">
								<div className="card-block text-center text-white">
									<div className="m-b-25">
										<span
											data-toggle="modal"
											data-target="#user_profile_photo_modal"
										>
											<img
												src={avatar}
												className="rounded-circle img-fluid"
												width={150}
												alt="User-Profile-Image"
											/>
											{/* <i
												className=" mdi mdi-square-edit-outline feather fas fa-edit m-t-10 f-16 text-dark"
												data-toggle="tooltip"
												data-placement="top"
												title="Upload Photo"
	/>*/}
										</span>
									</div>
									<h4 className="font-weight-bold text-white font-times-new-roman">
										{authUser.userName}
									</h4>
									<p className="text-dark font-weight-bold">Admin</p>
								</div>
							</div>
							<div className="col-sm-8">
								<div className="card-block">
									<h6 className="m-b-20 p-b-5 b-b-default f-w-600">
										Information
									</h6>

									<div className="row">
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Full Name</p>
											<h6 className="text-muted f-w-400">
												<i
													className="fa fa-user text-green mr-2"
													aria-hidden="true"
												/>
												{authUser.fullName}
											</h6>
										</div>
									</div>
									<h6 className="b-b-default" />
									<div className="row">
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Email</p>
											<h6 className="text-muted f-w-400">
												<i
													className="fa fa-envelope text-green mr-2"
													aria-hidden="true"
												/>
												{authUser.email}
											</h6>
										</div>
									</div>
									<h6 className="b-b-default" />
									<div className="row">
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Phone</p>
											<h6 className="text-muted f-w-400">
												<i
													className="fa fa-phone text-green mr-2 font-weight-bold"
													aria-hidden="true"
												/>
												{authUser.phoneNo}
											</h6>
										</div>
									</div>

									<button
										className="btn btn-editProfile text-info "
										data-toggle="modal"
										data-target="#editProfileModal"
										onClick={() => setModalOpen(true)}
									>
										Edit profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default ProfileNew;
