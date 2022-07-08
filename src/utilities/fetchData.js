import { useNavigate } from "react-router-dom";

//fetch option generator
export function fetchOptions(method = "GET", postData = {}) {
	if (method === "GET") {
		return {
			method,
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		};
	}
	return {
		method,
		body: JSON.stringify(postData),
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
	};
}

//GET, POST,PUT,DELETE from server  send options object by using fetchOptions function created above or can direct pass fetch option object
export const fetchData = async (url, options) => {
	try {
		const res = await fetch(url, options);
		const resData = await res.json();
		return resData;
	} catch (e) {
		console.log(e.error);
	}
};

//uploading file

export const fetchUploadFile = async (url, file) => {
	try {
		console.log(file);
		const fd = new FormData();
		fd.append("batchStudents", file, file.name); //upload file as multipart/form-data using js formdata class
		console.log(typeof fd);
		const res = await fetch(url, {
			method: "POST",
			body: fd,
		});
		const resData = await res.json();
		return resData;
	} catch (e) {
		console.log(e.error);
	}
};
