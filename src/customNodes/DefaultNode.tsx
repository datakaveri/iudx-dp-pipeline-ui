import { Handle, NodeProps, Position } from "reactflow";
import { NodeData } from "../store/store";

const DefaultNode = ({ isConnectable, data }: NodeProps<NodeData>) => {
  return (
    <div className="defaultNode">
      <label>{data.label}</label>
      <Handle
        id="a"
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        id="a"
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default DefaultNode;
