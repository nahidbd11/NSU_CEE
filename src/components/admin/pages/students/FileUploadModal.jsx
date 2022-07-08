import React, { useEffect, useState } from "react";
import bsCustomFileInput from "bs-custom-file-input";
import { useGlobal } from "../../context/GlobalContext";
import { apiBaseUrl } from "../../../../utilities/UtilityVariable";
import {
	api_bulkStudentInsert,
	api_getAllStudents,
	api_uploadStudentsFile,
} from "../../../../utilities/allApis";
import { fetchData, fetchOptions } from "../../../../utilities/fetchData";
import { useNavigate } from "react-router-dom";

const FileUploadModal = ({ setIsRefreshTable }) => {
	const [selectedFile, setFile] = useState(null);
	const { handleUpload, setToastMessage } = useGlobal();
	//after click upload button in modal
	const handleFileSubmit = async (e) => {
		console.log(selectedFile);
		const redirectTo = "/students";
		const resData = await handleUpload(
			api_uploadStudentsFile,
			selectedFile,
			redirectTo
		);
		console.log(resData);
		if (resData && resData.length >= 1) {
			//after upload if we get student array of list then call bulk api to  insert those new data
			const resBulkStudent = await fetchData(
				api_bulkStudentInsert,
				fetchOptions("POST", resData)
			);
			//if new record insert successfully then show toast success else toast errror message
			if (!resBulkStudent.message) {
				setToastMessage({
					message: `total ${resBulkStudent} new data inserted  succesfully`,
					type: "success",
				});
			} else {
				setToastMessage({
					message: resBulkStudent.message,
					type: "error",
				});
			}
		}
		setIsRefreshTable(true); //refresh table after upload file
		setToastMessage({}); //reset toast message
		setFile(null);
	};

	useEffect(() => {
		bsCustomFileInput.init(); //initialize bootstrap  custom file input plugin
	});

	return (
		<div
			class="modal fade"
			id="uploadModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog  modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5
							class="modal-title text-capitalize text-lead text-dark"
							id="exampleModalLabel"
						>
							Upload Student file
						</h5>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body">
						<div className="custom-file">
							<input
								type="file"
								className="custom-file-input"
								id="customFile"
								onChange={(e) => {
									setFile(e.target.files[0]);
									e.target.value = null; //after set file make target value empty for re-upload
								}}
							/>
							<label className="custom-file-label" htmlFor="customFile">
								{!selectedFile ? "Choose your file" : selectedFile.name}
							</label>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Cancel
						</button>
						<button
							type="submit"
							class="btn btn-primary"
							data-dismiss="modal"
							onClick={handleFileSubmit}
						>
							<i className="fa fa-upload mr-2"></i>Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FileUploadModal;
