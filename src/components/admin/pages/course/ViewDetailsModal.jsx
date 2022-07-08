import React from "react";
import uuid from "react-uuid";

const ViewDetailsModal = ({ viewData }) => {
	return (
		<div className="modal fade" id="viewModal">
			<div className="modal-dialog modal-dialog-centered modal-lg ">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title text-success ml-4">Details Info</h4>
						<button type="button" className="close" data-dismiss="modal">
							×
						</button>
					</div>
					<div className="modal-body p-5">
						<div className="mb-2">
							<h5 className="text-secondary  text-navy mr-3 viewmodal-info-header">
								Title
							</h5>

							<p className="text-muted viewmodal-text">{viewData.name}</p>
						</div>
						<div className="mb-2">
							<h5 className="text-secondary  text-navy mr-3 viewmodal-info-header ">
								Course Code
							</h5>
							<p className="text-muted viewmodal-text">{viewData.courseCode}</p>
						</div>
						<div className="mb-2">
							<h5 className="text-secondary  text-navy mr-3 viewmodal-info-header ">
								Credit
							</h5>
							<p className="text-muted viewmodal-text">{viewData.credit}</p>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewDetailsModal;
