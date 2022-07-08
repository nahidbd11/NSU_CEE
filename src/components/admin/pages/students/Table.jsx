import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, NavLink } from "react-router-dom";
import uuid from "react-uuid";
import useFetch from "../../../../customhooks/useFetch";

import useTableData from "../../../../customhooks/useTableData";

import {
	api_deleteStudents,
	api_getAllStudents,
	api_studentsPagination,
} from "../../../../utilities/allApis";
import { fetchData, fetchOptions } from "../../../../utilities/fetchData";

import { useGlobal } from "../../context/GlobalContext";
import ActionsButton from "../../sharedComponets/ActionsButton";
import ConfirmModal from "../../sharedComponets/ConfirmModal";
import EmptydataComponent from "../../sharedComponets/EmptydataComponent";
import ViewDetailsModal from "./ViewDetailsModal";

const Table = ({ isRefreshTable }) => {
	const [tableData, setTableData] = useState(null);
	const [totalPage, setTotalPage] = useState(0);
	const [tableDataSerial, setDataSerial] = useState(0);
	const [viewData, setViewData] = useState(null);
	const [activeIndex, setActiveIndex] = useState(1);
	const { handleDelete, setDeleteData, deleteData } = useGlobal();
	const getallApi = api_getAllStudents;
	//after confirm delete from modal for deleting entry,
	const handleRemoveData = () => {
		const deleteApi = api_deleteStudents;
		handleDelete(deleteApi, deleteData, "/students");
	};
	//when page index of pagination click
	const handlePageClick = (data) => {
		setActiveIndex(data.selected + 1);
		setDataSerial((data.selected + 1) * 10 - 10); //if pagesize 10
	};
	//fetch all data initially and also after delete any data again fetch new updated all data
	//useTable Data has delete dependency,so initially it will fetch all data and also whenever delete data is changed to delete the data
	useTableData(getallApi, setTableData, "totalStudent");

	//pagination data change setTableData
	useEffect(() => {
		const fetch_studentBypaginate = async () => {
			const paginateApi = `${api_studentsPagination}?PageIndex=${activeIndex}&PageSize=10&Sort=''&Search=''`;
			const options = fetchOptions("GET");
			const resData = await fetchData(paginateApi, options);
			console.log(resData);
			if (resData && resData.data) {
				setTableData(resData.data);
			}
		};

		//initially setTable data of first active page  and also whenever active page index change and refresh table after upload file
		fetch_studentBypaginate();

		//setTotal page for paginate the table
		async function setPageCount() {
			let data = await fetchData(api_getAllStudents, fetchOptions("GET"));
			const totalPageCount = Array.isArray(data) && data.length;
			setTotalPage(totalPageCount / 10);
		}
		setPageCount(); //call setPageCount function
	}, [activeIndex, isRefreshTable]); //set tableData with paginationData change or tableData change or after upload file

	console.log(totalPage);
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
								<th>Student Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tableData &&
								tableData.map((data, i) => (
									<tr key={data.id}>
										<td>{i + 1 + tableDataSerial}</td>
										<td>{data.studentId}</td>
										<td>{data.name}</td>
										<td>{data.email}</td>
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

				<ReactPaginate
					breakLabel="..."
					nextLabel=">>"
					onPageChange={handlePageClick}
					pageCount={totalPage}
					previousLabel="<<"
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					containerClassName={
						"pagination pagination-sm justify-content-end mr-5"
					}
					pageClassName={"page-item"}
					pageLinkClassName={"page-link"}
					previousClassName={"page-item"}
					previousLinkClassName={"page-link"}
					nextClassName={"page-item"}
					nextLinkClassName={"page-link"}
					activeClassName={"active"}
				/>
			</div>
			{/* TODO: confirm modal for deleting data of table */}
			{deleteData && <ConfirmModal handleRemoveData={handleRemoveData} />}
			{viewData && <ViewDetailsModal viewData={viewData} />}
		</>
	);
};

export default Table;
