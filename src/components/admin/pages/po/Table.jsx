import React, { useState } from "react";

import useTableData from "../../../../customhooks/useTableData";
import {
	api_deleteProgramOutcome,
	api_getAllProgramOutcome,
} from "../../../../utilities/allApis";
import { sentence_Breaker } from "../../../../utilities/utilityFunctions";
import { useGlobal } from "../../context/GlobalContext";
import ActionsButton from "../../sharedComponets/ActionsButton";
import ConfirmModal from "../../sharedComponets/ConfirmModal";
import EmptydataComponent from "../../sharedComponets/EmptydataComponent";
import ViewDetailsModal from "./ViewDetailsModal";

const Table = () => {
	const [tableData, setTableData] = useState(null);
	const [viewData, setViewData] = useState(null);

	const { handleDelete, setDeleteData, deleteData } = useGlobal();
	const getallApi = api_getAllProgramOutcome;
	//after confirm delete from modal
	const handleRemoveData = () => {
		const deleteApi = api_deleteProgramOutcome;
		handleDelete(deleteApi, deleteData, "/po");
	};
	//fetch all data initially and also after delete any data again fetch new updated all data
	//useTable Data has delete dependency,so initially it will fetch all data and also whenever delete data is changed to delete the data
	useTableData(getallApi, setTableData, "totalPo");
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
								<th>PO Id</th>
								<th>Description</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tableData &&
								tableData.map((data, i) => (
									<tr key={data.id}>
										<td>{i + 1}</td>
										<td>{data.poCode}</td>
										<td>{sentence_Breaker(data.description, 0, 40)}</td>

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
