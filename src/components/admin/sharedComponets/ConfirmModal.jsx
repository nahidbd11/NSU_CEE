import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../../customhooks/useFetch";
import { fetchOptions } from "../../../utilities/fetchData";
import { apiBaseUrl, toastOptions } from "../../../utilities/UtilityVariable";

const ConfirmModal = ({ handleRemoveData }) => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div
			className="modal fade"
			id="deleteConfirmationModal"
			tabIndex={-1}
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body text-center">
						<i class="far fa-times-circle display-3 text-danger del-icon"></i>
						<h1
							className="modal-title text-center text-warning"
							id="exampleModalLabel"
						>
							Are you sure?
						</h1>
						<p className="text-muted">
							Do you really want to delete this record? This process cannot be
							undone.
						</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							No
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={handleRemoveData}
							data-dismiss="modal"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
