/* eslint-disable no-undef */
import React, { useState } from "react";

import ConfirmModal from "../../sharedComponets/ConfirmModal";
import ViewDetailsModal from "./ViewDetailsModal";
import ActionsButton from "../../sharedComponets/ActionsButton";
import EmptydataComponent from "../../sharedComponets/EmptydataComponent";
import useTableData from "../../../../customhooks/useTableData";
import { useGlobal } from "../../context/GlobalContext";
import {
    api_deleteCourseOutcome,
    api_getAllCourseCoPo,
} from "../../../../utilities/allApis";
import { sentence_Breaker } from "../../../../utilities/utilityFunctions";
const Table = () => {
    const [tableData, setTableData] = useState(null); //for table
    const [viewData, setViewData] = useState(null); //for view details modal
    const { handleDelete, setDeleteData, deleteData } = useGlobal();
    const getallApi = api_getAllCourseCoPo;

    //after confirm delete from modal
    const handleRemoveData = () => {
        const deleteApi = api_deleteCourseOutcome;
        handleDelete(deleteApi, deleteData, "/co");
    };
    //fetch all data initially and also after delete any data again fetch new updated all data
    //useTable Data has delete dependency,so initially it will fetch all data and also whenever delete data is changed to delete the data
    useTableData(getallApi, setTableData, "totalCo");
    console.log(tableData);
    //if no table data then render another component
    if ((Array.isArray(tableData) && tableData.length === 0) || !tableData)
        return (
            <EmptydataComponent message="No data found .please add your data" />
        );

    return (
        <>
            <div className="card my-5 shadow-lg">
                <div className="card-body p-3">
                    <table className="table table-hover table-striped table-responsive-sm">
                        <thead>
                            <tr className="bg-dark th-bg">
                                <th>#SL</th>
                                <th>CO Id</th>
                                <th>Semester</th>
                                <th>Course Code</th>

                                <th>PO Id</th>
                                <th>CO Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData &&
                                tableData.map((data, i) => (
                                    <tr key={data.id}>
                                        <td>{i + 1}</td>
                                        <td>{data.coCode}</td>
                                        <td>
                                            {data.semesterName}-{data.year}
                                        </td>
                                        <td>{data.courseCode}</td>

                                        <td>{data.poCode}</td>

                                        <td>
                                            {sentence_Breaker(
                                                data.coDescription,
                                                0,
                                                40
                                            )}
                                        </td>

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
            {/* view modal for show details info of table data */}
            {viewData && <ViewDetailsModal viewData={viewData} />}
        </>
    );
};

export default Table;
