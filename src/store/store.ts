import {
	Connection,
	EdgeChange,
	Node,
	NodeChange,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
} from "reactflow";
import { create } from "zustand";
import { initialNodes } from "../constants/initialNodes";
import { initialEdges } from "../constants/initialEdges";
import { DPOutput } from "../types/DPOutput";
import { RFState } from "../types/RFState";

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
					case "Generalization":
						node.data = {
							...node.data,
							dpOutput: {
								...node.data.dpOutput,
								spatioGeneralization:
									dpData.spatioGeneralization,
								temporalGeneralization:
									dpData.temporalGeneralization,
							},
						};
						break;
					case "Aggregation":
						node.data = {
							...node.data,
							dpOutput: {
								...node.data.dpOutput,
								aggregationAcrossUsers:
									dpData.aggregationAcrossUsers,
								aggregationPerUser: dpData.aggregationPerUser,
							},
						};
						break;
					case "DP - Noise Addition":
						node.data = {
							...node.data,
							dpOutput: {
								...node.data.dpOutput,
								differentialPrivacy: dpData.differentialPrivacy,
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
		const nodeType = get().nodes.filter((node) => nodeId === node.id)[0]
			.data.label;
		return nodeType;
	},
	getFinalOutput: () => {
		let finalOutput = {} as DPOutput;
		get().edges.map((edge) => {
			get().nodes.map((node) => {
				if (node.id === edge.source) {
					switch (node.data.label) {
						case "Suppression":
							finalOutput = {
								...finalOutput,
								suppression: node.data.dpOutput.suppression,
							};
							break;
						case "Pseudonymization":
							finalOutput = {
								...finalOutput,
								pseudonymization:
									node.data.dpOutput.pseudonymization,
							};
							break;
						case "Generalization":
							finalOutput = {
								...finalOutput,
								spatioGeneralization:
									node.data.dpOutput.spatioGeneralization,
								temporalGeneralization:
									node.data.dpOutput.temporalGeneralization,
							};
							break;
						case "Aggregation":
							finalOutput = {
								...finalOutput,
								aggregationAcrossUsers:
									node.data.dpOutput.aggregationAcrossUsers,
								aggregationPerUser:
									node.data.dpOutput.aggregationPerUser,
							};
							break;
						case "DP - Noise Addition":
							finalOutput = {
								...finalOutput,
								differentialPrivacy:
									node.data.dpOutput.differentialPrivacy,
							};
							break;
					}
				}
			});
		});
		return finalOutput;
	},
}));
