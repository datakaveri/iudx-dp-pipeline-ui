import { Route, Routes } from "react-router-dom";
import Template4 from "../pages/Template4";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Template4 />} />
      </Routes>
    </div>
  );
};

export default Router;
