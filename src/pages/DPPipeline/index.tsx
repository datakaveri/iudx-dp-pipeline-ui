/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Background,
	BackgroundVariant,
	Controls,
	MiniMap,
	ReactFlow,
	ReactFlowProvider,
	Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { useStore } from "../../store/store";
import { shallow } from "zustand/shallow";
import { useCallback, useRef, useState } from "react";
import ContextMenu from "../../components/ContextMenu";
import "./styles.scss";
import InputNode from "../../customNodes/InputNode";
import OutputNode from "../../customNodes/OutputNode";
import { nodeColor } from "../../constants/nodeColors";
import DefaultNode from "../../customNodes/DefaultNode";
import JSONNode from "../../customNodes/JSONNode";
import { RFState } from "../../types/RFState";

const nodeTypes = {
	inputNode: InputNode,
	outputNode: OutputNode,
	defaultNode: DefaultNode,
	jsonNode: JSONNode,
};

const selector = (state: RFState) => ({
	nodes: state.nodes,
	edges: state.edges,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
	concatenateNode: state.concatenateNode,
});

const DPPipeline = () => {
	const [menu, setMenu] = useState<boolean>(false);
	const reactFlowWrapper = useRef<any>();

	const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
		selector,
		shallow
	);

	const onNodeContextMenu = useCallback(
		(event: any, node: Node) => {
			// Prevent native context menu from showing
			event.preventDefault();

			// Calculate position of the context menu. We want to make sure it
			// doesn't get positioned off-screen.
			const pane = reactFlowWrapper.current.getBoundingClientRect();
			setMenu({
				id: node.id,
				top: event.clientY < pane.height - 200 && event.clientY,
				left: event.clientX < pane.width - 200 && event.clientX,
				right:
					event.clientX >= pane.width - 200 &&
					pane.width - event.clientX,
				bottom:
					event.clientY >= pane.height - 200 &&
					pane.height - event.clientY,
			});
		},
		[setMenu]
	);
	return (
		<ReactFlowProvider>
			<div
				style={{ width: "99vw", height: "97vh" }}
				ref={reactFlowWrapper}
			>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					onNodeContextMenu={onNodeContextMenu as any}
					fitView
					nodeTypes={nodeTypes}
				>
					{menu && <ContextMenu setMenu={setMenu} {...menu} />}
					<Controls />
					<MiniMap
						nodeStrokeWidth={3}
						zoomable
						pannable
						nodeColor={nodeColor}
					/>
					<Background variant={BackgroundVariant.Dots} />
				</ReactFlow>
			</div>
		</ReactFlowProvider>
	);
};

export default DPPipeline;
