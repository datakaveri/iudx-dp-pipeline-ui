import { Handle, NodeProps, Position } from "reactflow";
import "./styles.scss";
import { NodeData } from "../store/store";

const InputNode = ({ isConnectable, data }: NodeProps<NodeData>) => {
  return (
    <div className="inputNode">
      {data.dpOutput ? <label>{data.dpOutput.suppression}</label> : null}
      <label>{data.label}</label>
      {data.label !== "Suppression" ? (
        <Handle
          id="a"
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
        />
      ) : null}
      {data.label !== "DP - Noise Addition" ? (
        <Handle
          id="b"
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
        />
      ) : null}
    </div>
  );
};

export default InputNode;
