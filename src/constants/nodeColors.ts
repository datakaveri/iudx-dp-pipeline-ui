import { Node } from "reactflow";

export const nodeColor = (node: Node) => {
  switch (node.type) {
    case "inputNode":
      return "#6ede87c5";
    case "outputNode":
      return "#6865A5c5";
    default:
      return "#ff0072c5";
  }
};
