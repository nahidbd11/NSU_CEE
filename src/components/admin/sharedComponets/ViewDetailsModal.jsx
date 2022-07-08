import React from "react";
import uuid from "react-uuid";

const ViewDetailsModal = ({ viewData }) => {
	return (
		<div className="modal fade" id="viewModal">
			<div className="modal-dialog modal-dialog-centered modal-lg ">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title text-success">Details Info</h4>
						<button type="button" className="close" data-dismiss="modal">
							×
						</button>
					</div>
					<div className="modal-body">
						{viewData &&
							Object.entries(viewData)
								.filter((data) => data[0] !== "id")
								.map(([key, val]) => {
									return (
										<div className="mb-3" key={uuid()}>
											<h5 className="font-weight-bolder display-5 text-info">
												{key}
											</h5>
											<i>{val}</i>
										</div>
									);
								})}
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
