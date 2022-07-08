import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import getAuthUser from "../../../utilities/getAuthUser";

const RequireAuth = () => {
    const location = useLocation();
    const { token } = getAuthUser();
    //if user has token then outlet will render the component user want to access ,else redirect user to login page
    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};

export default RequireAuth;
