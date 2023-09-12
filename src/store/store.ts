import {
	Connection,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
	OnConnect,
	OnEdgesChange,
	OnNodesChange,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
} from "reactflow";
import { create } from "zustand";
import { initialNodes } from "../constants/initialNodes";
import { initialEdges } from "../constants/initialEdges";
import { FormValues } from "../components/FormComponent";

export type DPOutput = {
	suppression: string[];
	pseudonymization: string;
	"spatio-generalization": {
		locationCol: string;
		h3Resolution: number;
	};
	"temporal-generalization": {
		dateTimeCol: string;
		startTime: number;
		endTime: number;
	};
	aggregationPerUser: {
		trueValue: string;
		groupByCol: string;
	};
	aggregationAcrossUsers: {
		minEventOccurences: number;
		trueValueThreshold: number;
	};
	differentialPrivacy: {
		globalMaxValue: number;
		globalMinValue: number;
		epsilon: {
			query1: number;
			query2: number;
		};
	};
};

export type NodeData = {
	label: string;
	formData: FormValues;
	dpOutput: DPOutput;
};

export type RFState = {
	nodes: Node<NodeData>[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
	concatenateNode: (node: Node) => void;
	// updateNodeForm: (nodeId: string, formData: FormValues) => void;
	updateDPForm: (nodeId: string, formData: DPOutput) => void;
	getNodeType: (nodeId: string) => string;
};

export const useStore = create<RFState>((set, get) => ({
	nodes: initialNodes,
	edges: initialEdges,
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes),
		});
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		});
	},
	onConnect: (connection: Connection) => {
		set({
			edges: addEdge(connection, get().edges),
		});
	},
	concatenateNode: (node: Node) => {
		const updatedNodes: Node[] = get().nodes.concat(node);
		set({
			nodes: updatedNodes,
		});
	},
	// updateNodeForm: (nodeId: string, formData: FormValues) => {
	//   const children = get().edges.map((node) =>
	//     node.source === nodeId ? node.target : null
	//   );
	//   const updatedNodes = get().nodes.map((node) => {
	//     if (children.includes(node.id)) {
	//       node.data = { ...node.data, formData };
	//     }
	//     return node;
	//   });
	//   set({
	//     nodes: updatedNodes,
	//   });
	// },
	updateDPForm: (nodeId: string, dpData: DPOutput) => {
		const updatedNodes = get().nodes.map((node) => {
			if (node.id === nodeId) {
				switch (node.data.label) {
					case "Suppression":
						node.data = {
							...node.data,
							dpOutput: {
								...node.data.dpOutput,
								suppression: dpData.suppression,
							},
						};
						break;
					case "Pseudonymization":
						node.data = {
							...node.data,
							dpOutput: {
								...node.data.dpOutput,
								pseudonymization: dpData.pseudonymization,
							},
						};
						break;
				}
			}
			return node;
		});
		set({
			nodes: updatedNodes,
		});
	},
	getNodeType: (nodeId: string) => {
		const x = get().nodes.filter((node) => nodeId === node.id)[0].data
			.label;
		return x;
	},
}));
