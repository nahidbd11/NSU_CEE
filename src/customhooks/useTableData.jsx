import React, { useState } from "react";
import { useGlobal } from "../components/admin/context/GlobalContext";
import { fetchData, fetchOptions } from "../utilities/fetchData";

const useTableData = (api, setTableData, identity) => {
	const { deleteData } = useGlobal();
	React.useEffect(() => {
		//fetch all data and every time we delete an entry re fetch all data
		(async () => {
			const options = fetchOptions("GET");

			const resData = await fetchData(api, options);

			if (resData && !resData.statusCode) {
				//set table data for table
				setTableData(resData);
				//after get all data set totaldata to localStorage and show it in main componet/Home component
				if (identity) localStorage.setItem(identity, resData.length);
				//totalPageIndex to count pagination page
			} else {
				//if we dont get any data then set table data to null
				setTableData(null);
				if (identity) localStorage.setItem(identity, 0); //if no data then set for all total data=0
			}
		})();
	}, [deleteData]);
};

export default useTableData;
