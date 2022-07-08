import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeid } from "../../../../utilities/randomNameGenarator";
import ActionsButton from "./ActionsButton";
import ConfirmModal from "../../sharedComponets/ConfirmModal";
import ViewDetailsModal from "../../sharedComponets/ViewDetailsModal";
import EmptydataComponent from "../../sharedComponets/EmptydataComponent";
import useTableData from "../../../../customhooks/useTableData";
import { useGlobal } from "../../context/GlobalContext";
import {
	api_accountDelete,
	api_getAllusers,
} from "../../../../utilities/allApis";

const Table = () => {
	const [tableData, setTableData] = useState(null);
	const [viewData, setViewData] = useState(null);

	const { handleDelete, setDeleteData, deleteData } = useGlobal();
	const getallApi = "http://localhost/api/Account/getAllUser";
	//after confirm delete from modal for deleting entry,
	const handleRemoveData = () => {
		const deleteApi = api_accountDelete;
		handleDelete(`${deleteApi}?email=${deleteData.email}`, null, "/users");
	};
	//fetch all data initially and also after delete any data again fetch new updated all data
	//useTable Data has delete dependency,so initially it will fetch all data and also whenever delete data is changed to delete the data
	useTableData(getallApi, setTableData);
	// console.log(tableData);

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
								<th>Full Name</th>
								<th>User Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tableData &&
								tableData.map((data, i) => (
									<tr key={data.id}>
										<td>{i + 1}</td>
										<td>{data.fullName}</td>
										<td>{data.userName}</td>
										<td>{data.email}</td>
										<td>{data.phone}</td>

										<ActionsButton
											data={data}
											setDeleteData={setDeleteData}
											setViewData={setViewData}
										/>
									</tr>
								))}
							{/* </tr>
							<tr>
								<td> 2</td>
								<td>DR. Mohammod Nazmul Islam</td>
								<td>nzuislam_332</td>
								<td>nzu.islam@gmail.com</td>
								<td>+880147558</td>
								<ActionsButton />
							</tr>
							<tr>
								<td> 3</td>
								<td>Fahad Rahman Amik</td>
								<td>fahad_332</td>
								<td>fahad.hilinkz@gmail.com</td>
								<td>+880147558</td>
								<ActionsButton />
							</tr>
							<tr>
								<td> 4</td>
								<td>Fahad Rahman Amik</td>
								<td>fahad_332</td>
								<td>fahad.hilinkz@gmail.com</td>
								<td>+880147558</td>
								<ActionsButton />
							</tr>
							<tr>
								<td> 5</td>
								<td>Fahad Rahman Amik</td>
								<td>fahad_332</td>
								<td>fahad.hilinkz@gmail.com</td>
								<td>+880147558</td>

								<ActionsButton />
							</tr>
							<tr>
								<td> 6</td>
								<td>Fahad Rahman Amik</td>
								<td>fahad_332</td>
								<td>fahad.hilinkz@gmail.com</td>
								<td>+880147558</td>

								<ActionsButton />
							</tr> */}
						</tbody>
					</table>
				</div>
			</div>
			{deleteData !== null && (
				<ConfirmModal handleRemoveData={handleRemoveData} />
			)}
		</>
	);
};

export default Table;
