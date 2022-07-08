import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGlobal } from "../components/admin/context/GlobalContext";

export default function useGlobalToast() {
	const { toastMessage } = useGlobal();
	useEffect(() => {
		if (toastMessage.message) toast[toastMessage.type](toastMessage.message);
	}, [toastMessage]);
}
