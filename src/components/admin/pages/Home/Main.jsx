import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import useFetch from "../../../../customhooks/useFetch";
import useGlobalToast from "../../../../customhooks/useToast";
import { useAuth } from "../../auth/Authcontext";

import Header from "../../sharedComponets/Header";
import MainSidebar from "../../sharedComponets/MainSidebar";
import EditProfileModal from "./EditProfileModal";
import Profile from "./Profile";
import ProfileNew from "./ProfileNew";
import Statistics from "./Statistics";

const Main = (props) => {
	useGlobalToast();
	const [isModalOpen, setModalOpen] = useState(false);
	return (
		<div className="wrapper">
			<Header />
			<MainSidebar />
			<ToastContainer />
			<div className="content-wrapper">
				<div className="content-header">
					{/* <Profile /> */}

					<ProfileNew setModalOpen={setModalOpen}>
						{isModalOpen && (
							<EditProfileModal
								setModalOpen={setModalOpen}
								isModalOpen={isModalOpen}
							>
								<Profile setModalOpen={setModalOpen} />
							</EditProfileModal>
						)}
					</ProfileNew>
					<Statistics />
				</div>
			</div>
		</div>
	);
};

export default Main;
