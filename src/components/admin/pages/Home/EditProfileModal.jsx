import React from "react";
import Profile from "./Profile";

const EditProfileModal = ({ setModalOpen, isModalOpen, children }) => {
	return (
		<div className="modal fade p-0" data-backdrop="" id="editProfileModal">
			<div className="modal-dialog modal-dialog-centered modal-lg  ">
				<div className="modal-content">
					<div className="modal-header">
						{/* <h4 className="modal-title text-primary text-center">
							Edit Profile
						</h4> */}
						<button type="button" className="close" data-dismiss="modal">
							×
						</button>
					</div>
					<div className="modal-body">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileModal;
