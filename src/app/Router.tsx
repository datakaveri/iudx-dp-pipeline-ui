import { Route, Routes } from "react-router-dom";
import DPPipeline from "../pages/DPPipeline";

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<DPPipeline />} />
			</Routes>
		</div>
	);
};

export default Router;
