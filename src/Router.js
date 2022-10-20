import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Missing from "./Pages/MissingPage/Missing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default Router;
