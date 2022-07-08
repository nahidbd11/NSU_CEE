import { useReducer, useEffect, useState } from "react";

const ACTIONS = {
	API_REQUEST: "api-request",
	FETCH_DATA: "fetch-data",
	ERROR: "error",
};

const initialState = {
	data: [],
	loading: false,
	error: null,
};

function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.API_REQUEST:
			return { ...state, data: [], loading: true };
		case ACTIONS.FETCH_DATA:
			return { ...state, data: payload.data, loading: false };
		case ACTIONS.ERROR:
			return { ...state, data: [], error: payload.error };
		default:
			return state;
	}
}

function useFetch(url, options = {}) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const ac = new AbortController();
		const signal = ac.signal; //true or false
		const fetchData = async () => {
			try {
				dispatch({ type: ACTIONS.API_REQUEST });
				const res = await fetch(url, { ...options, signal });
				const resData = await res.json();
				dispatch({ type: ACTIONS.FETCH_DATA, payload: { data: resData } });
			} catch (e) {
				dispatch({ type: ACTIONS.ERROR, payload: { error: e.error } });
			}
		};
		fetchData();
		return () => ac.abort(); //make signal false so that fetch will not happend while component is unmounted
	}, [url]);
	return state;
}

export default useFetch;
