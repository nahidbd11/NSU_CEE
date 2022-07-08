import React from "react";
import { Link } from "react-router-dom";

const ActionsButton = ({ data, setDeleteData, setViewData }) => {
	return (
		<td>
			{/* TODO: for edit form */}
			<Link to="edit" state={{ editData: data }}>
				<button
					class="btn-qlab btn-warning-qlab btn-sm-qlab rounded-0 mr-1"
					type="button"
					data-toggle="tooltip"
					data-placement="top"
					title="Edit"
				>
					<i class="fa fa-edit"></i>
				</button>
			</Link>
			<button
				class="btn-qlab btn-success-qlab btn-sm-qlab  rounded-0 mr-1"
				type="button"
				data-toggle="modal"
				data-target="#viewModal"
				data-placement="top"
				title="View"
				onClick={() => setViewData(data)}
			>
				<i class="fa fa-eye"></i>
			</button>

			{/* TODO:trigger confirm modal for deleting data  */}
			<a href="#" data-toggle="modal" data-target="#deleteConfirmationModal">
				<button
					class="btn-qlab btn-danger-qlab btn-sm-qlab rounded-0"
					type="button"
					data-toggle="tooltip"
					data-placement="top"
					title="Delete"
					onClick={() => setDeleteData(data)}
				>
					<i class="fa fa-trash"></i>
				</button>
			</a>
		</td>
	);
};

export default ActionsButton;
