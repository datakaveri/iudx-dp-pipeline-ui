import { Edge, Node, OnConnect, OnEdgesChange, OnNodesChange } from "reactflow";
import { DPOutput } from "./DPOutput";
import { NodeData } from "./NodeData";

export type RFState = {
	nodes: Node<NodeData>[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
	concatenateNode: (node: Node) => void;
	updateDPForm: (nodeId: string, formData: DPOutput) => void;
	getNodeType: (nodeId: string) => string;
	getFinalOutput: () => DPOutput;
};
