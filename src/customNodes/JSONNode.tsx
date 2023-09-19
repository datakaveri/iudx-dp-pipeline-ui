import { Handle, NodeProps, Position } from "reactflow";
import { useStore } from "../store/store";
import { Button } from "@mui/material";
import { useState } from "react";
import { DPOutput } from "../types/DPOutput";
import { RFState } from "../types/RFState";
import { NodeData } from "../types/NodeData";

const JSONNode = ({ isConnectable }: NodeProps<NodeData>) => {
	const [jsonData, setJsonData] = useState<DPOutput>();
	const getFinalOutput = useStore((state: RFState) => state.getFinalOutput);

	const onGetData = () => {
		setJsonData(getFinalOutput());
	};

	const onSubmit = () => {
		console.log("onSubmit Clicked!");
	};

	return (
		<div className="jsonNode">
			<span>Output</span>
			<div className="jsonBody">{JSON.stringify(jsonData)}</div>
			<Button
				onClick={onGetData}
				type="submit"
				variant="outlined"
				color="info"
				size="small"
			>
				Get Data
			</Button>
			<Button
				onClick={onSubmit}
				type="submit"
				variant="contained"
				color="success"
				size="small"
			>
				Submit
			</Button>
			<Handle
				id="a"
				type="target"
				position={Position.Left}
				isConnectable={isConnectable}
			/>
		</div>
	);
};

export default JSONNode;
