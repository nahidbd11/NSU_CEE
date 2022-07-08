import React, { useState } from "react";

import ConfirmModal from "../../sharedComponets/ConfirmModal";
import ViewDetailsModal from "./ViewDetailsModal";
import ActionsButton from "../../sharedComponets/ActionsButton";

import { useGlobal } from "../../context/GlobalContext";
import EmptydataComponent from "../../sharedComponets/EmptydataComponent";
import useTableData from "../../../../customhooks/useTableData";
import {
	api_deleteCourse,
	api_getAllCourse,
} from "../../../../utilities/allApis";

const Table = () => {
	const [tableData, setTableData] = useState(null);
	const [viewData, setViewData] = useState(null);

	const { handleDelete, setDeleteData, deleteData } = useGlobal();
	const getallApi = api_getAllCourse;
	//after confirm delete from modal
	const handleRemoveData = () => {
		const deleteApi = api_deleteCourse;
		handleDelete(deleteApi, deleteData, "/course");
	};
	//fetch all data initially and also after delete any data again fetch new updated all data
	//useTable Data has delete dependency,so initially it will fetch all data and also whenever delete data is changed to delete the data
	useTableData(getallApi, setTableData, "totalCourse");
	//if no table data then render another component
	if ((Array.isArray(tableData) && tableData.length === 0) || !tableData)
		return <EmptydataComponent message="No data found .please add your data" />;

	return (
		<>
			<div className="card my-5 shadow-lg">
				<div className="card-body p-3">
					<table className="table table-hover table-striped table-responsive-sm">
						<thead>
							<tr className="bg-dark th-bg">
								<th>#SL</th>
								<th>Course Code</th>
								<th>Title</th>
								<th>Credit</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tableData &&
								tableData.map((data, i) => (
									<tr key={data.id}>
										<td>{i + 1}</td>
										<td>{data.courseCode}</td>
										<td>{data.name}</td>
										<td>{data.credit}</td>

										<ActionsButton
											data={data}
											setDeleteData={setDeleteData}
											setViewData={setViewData}
										/>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
			{/* TODO: confirm modal for deleting data of table */}
			{deleteData && <ConfirmModal handleRemoveData={handleRemoveData} />}
			{viewData && <ViewDetailsModal viewData={viewData} />}
		</>
	);
};

export default Table;
