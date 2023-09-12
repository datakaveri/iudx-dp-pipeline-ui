import { Handle, NodeProps, Position } from "reactflow";
import "./styles.scss";
import { NodeData } from "../store/store";
import { InputSwitchCase } from "./InputSwitchCases/InputSwitchCase";

const InputNode = ({ isConnectable, data }: NodeProps<NodeData>) => {
	return (
		<div className="inputNode">
			<label>{data.label}</label>
			<div
				style={{
					width: "100%",
					height: "15px",
					outline: "1px solid black",
					borderRadius: "3px",
					backgroundColor: "white",
				}}
			>
				{data.dpOutput ? (
					<InputSwitchCase
						data={data.dpOutput}
						nodeType={data.label}
					/>
				) : null}
			</div>
			{data.label !== "Suppression" ? (
				<Handle
					id="a"
					type="target"
					position={Position.Left}
					isConnectable={isConnectable}
					style={{
						background: "black",
					}}
				/>
			) : null}
			{data.label !== "DP - Noise Addition" ? (
				<Handle
					id="b"
					type="source"
					position={Position.Right}
					isConnectable={isConnectable}
					style={{
						background: "white",
						outline: "1px solid black",
					}}
				/>
			) : null}
		</div>
	);
};

export default InputNode;
