import { Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "2",
    type: "inputNode",
    position: { x: 0, y: 200 },
    data: { label: "Suppression" },
  },
  {
    id: "3",
    type: "inputNode",
    position: { x: 200, y: 200 },
    data: { label: "Pseudonymization" },
  },
  {
    id: "4",
    type: "inputNode",
    position: { x: 400, y: 200 },
    data: { label: "Generalization" },
  },
  {
    id: "5",
    type: "inputNode",
    position: { x: 600, y: 200 },
    data: { label: "Aggregation" },
  },
  {
    id: "6",
    type: "inputNode",
    position: { x: 800, y: 200 },
    data: { label: "Query Building" },
  },
  {
    id: "7",
    type: "inputNode",
    position: { x: 1000, y: 200 },
    data: { label: "DP - Noise Addition" },
  },
];
