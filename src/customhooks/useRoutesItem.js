import React from "react";
import { Route } from "react-router-dom";

import RequireAuth from "../components/admin/auth/RequireAuth";

const useRoutesItem = (routesData) => {
	const routesItem = routesData.map((route, index) => {
		if (route.isAuthRequired)
			return (
				<Route element={<RequireAuth />} key={index}>
					<Route path={route.path} element={route.component} />
				</Route>
			);
		else
			return <Route path={route.path} element={route.component} key={index} />;
	});

	return { routesItem };
};

export default useRoutesItem;
