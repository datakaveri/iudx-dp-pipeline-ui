import { Handle, NodeProps, Position } from "reactflow";
import "./styles.scss";
import { NodeData } from "../store/store";

const OutputNode = ({ isConnectable, data }: NodeProps<NodeData>) => {
  return (
    <div className="outputNode">
      <div className="formContents">
        <label>{data.label}</label>
        {data.formData ? (
          <>
            <label htmlFor="text">{data.formData.firstName}</label>
          </>
        ) : (
          ""
        )}
      </div>
      <Handle
        id="a"
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default OutputNode;
