function getAuthUser() {
	const authUser = ((localStorage.getItem("authUser") !== null ||
		localStorage.getItem("authUser") !== undefined) &&
		JSON.parse(localStorage.getItem("authUser"))) || { token: null };

	return authUser;
}

export default getAuthUser;
