import { DragEvent } from "react";

export const Sidebar = () => {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "inputNode")}
        draggable
      >
        Input Node
      </div>
      {/* <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div> */}
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "outputNode")}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};
