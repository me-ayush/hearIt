import { Routes, Route } from "react-router-dom";
import Missing from "./Pages/MissingPage/Missing";
import Signup from "./Pages/AuthPages/Signup";
import Login from "./Pages/AuthPages/Login";
import Home from "./Pages/HomePage/Home";
import PrivateRoute from "./Utils/PrivateRoute";

const Router = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default Router;
