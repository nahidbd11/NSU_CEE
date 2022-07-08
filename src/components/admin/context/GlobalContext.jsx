import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { api_accountUpdate } from "../../../utilities/allApis";

import {
	fetchData,
	fetchOptions,
	fetchUploadFile,
} from "../../../utilities/fetchData";
import { toastOptions } from "../../../utilities/UtilityVariable";
import ErrorMessage from "../sharedComponets/ErrorMessage";

const Globalcontext = createContext();
export function useGlobal() {
	return useContext(Globalcontext);
}

const GlobalContextWrapper = ({ children }) => {
	const navigate = useNavigate();

	//States are here
	const [toastMessage, setToastMessage] = useState({});
	const [deleteData, setDeleteData] = useState(null);

	//for create data
	const handleCreate = async (api, payload, redirectTo) => {
		const resData = await fetchData(api, fetchOptions("POST", payload));
		console.log(resData);
		if (!resData.message) {
			setToastMessage({
				message: "successfully created",
				type: "success",
			});
			//after successfully create redirectto index page where useTableData hook will trigger to render the component again and show updated tableData
			navigate(redirectTo); //after redirect to another page this toast message will display
		} else {
			toast.error(<ErrorMessage messages={resData.message} />);
			if (resData.errors)
				toast.error(<ErrorMessage messages={resData.errors} />);
		}
		setToastMessage({}); //after showing reset toast
		return resData;
	};
	//for update table data
	const handleUpdate = async (api, payload, redirectTo) => {
		const method = api === api_accountUpdate ? "POST" : "PUT";
		const resData = await fetchData(api, fetchOptions(method, payload));
		console.log(resData);
		if (!resData.message) {
			setToastMessage({
				message: "successfully edited",
				type: "success",
			});
			//navigate to index page will call useTableData hook belogs to that component which  will show updated table data by calling api in useTableHook
			navigate(redirectTo); //after redirect to another page this toast message will display
		} else {
			toast.error(<ErrorMessage messages={resData.message} />);
			if (resData.errors)
				toast.error(<ErrorMessage messages={resData.errors} />);
		}
		setToastMessage({}); //after showing reset toast
		return resData;
	};

	//for delete table data

	const handleDelete = async (api, payload, redirectTo) => {
		const resData = await fetchData(api, fetchOptions("POST", payload));
		console.log(resData);
		if (resData === 1) {
			setDeleteData(null); //reset delete data after successfully deleted
			setToastMessage({
				message: "successfully Deleted",
				type: "success",
			});
			navigate(redirectTo); //after redirect to another page this toast message will display
		} else {
			// toast.error(<ErrorMessage messages={resData.message} />);
			toast.error("sorry you can't delete this record");
		}
		setToastMessage({}); //after showing reset toast
		return resData;
	};

	//for uploading file
	const handleUpload = async (api, payload, redirectTo) => {
		const resData = await fetchUploadFile(api, payload);
		navigate(redirectTo);
		console.log(resData);
		return resData;
	};

	return (
		<Globalcontext.Provider
			value={{
				handleCreate,
				handleUpdate,
				toastMessage,
				setToastMessage,
				handleDelete,
				setDeleteData,
				deleteData,
				handleUpload,
			}}
		>
			{children}
		</Globalcontext.Provider>
	);
};

export default GlobalContextWrapper;
