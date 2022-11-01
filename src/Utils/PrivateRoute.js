import { Outlet, Navigate } from "react-router-dom";
import { getItem } from "./LocalStorage";
import { ACCESS_TOKEN } from "../Constants";

const PrivateRoute = () => {
    const token = getItem(ACCESS_TOKEN);
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
