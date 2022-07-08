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
						<div className="">
							<h5 className="text-secondary  text-navy mr-3 viewmodal-info-header">
								Title
							</h5>

							<p className="text-muted viewmodal-text">{viewData.title}</p>
						</div>
						<div className="">
							<h5 className="text-secondary  text-navy mr-3 viewmodal-info-header">
								Year
							</h5>

							<p className="text-muted viewmodal-text">{viewData.year}</p>
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
