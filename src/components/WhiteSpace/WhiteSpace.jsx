import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { ExportButton } from "../ExportButton/ExportButton";
import ColorModeFlow from "../ColorMode/ColorModeFlow";
import {
  CircleNode,
  DiamondNode,
  ParallelogramNode,
  RectangleNode,
  SquareNode,
} from "../Another/Shape";

const initialEdges = [];
const initialNodes = [];

const nodeTypes = {
  rectangle: RectangleNode,
  parallelogram: ParallelogramNode,
  circle: CircleNode,
  square: SquareNode,
  diamond: DiamondNode,
};

const WhiteSpace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [colorMode, setColorMode] = useState("dark");

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "smoothstep",
            markerEnd: {
              width: 10,
              height: 10,
              color: "#3470e4",
            },
            style: {
              strokeWidth: 2,
              stroke: "#3470e4",
            },
          },
          eds
        )
      );
    },
    [setEdges]
  );

  const addNode = (shapeType) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${nodes.length + 1}` },
      type: shapeType,
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId));
    setEdges((eds) =>
      eds.filter(
        (edge) =>
          edge.source !== selectedNodeId && edge.target !== selectedNodeId
      )
    );
    setSelectedNodeId(null);
  };

  const handleLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const applyLabelChange = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNodeId
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
    setNewLabel("");
    setSelectedNodeId(null);
  };

  return (
    <div className="flex h-screen bg-gray-200">
    <div className="w-1/5 p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Tools</h2>
      <button
        className="block w-full py-2 mb-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addNode("rectangle")}
      >
        Add Rectangle
      </button>
      <button
        className="block w-full py-2 mb-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addNode("parallelogram")}
      >
        Add Parallelogram
      </button>
      <button
        className="block w-full py-2 mb-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addNode("circle")}
      >
        Add Circle
      </button>
      <button
        className="block w-full py-2 mb-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addNode("square")}
      >
        Add Square
      </button>
      <button
        className="block w-full py-2 mb-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => addNode("diamond")}
      >
        Add Diamond
      </button>
      {selectedNodeId && (
        <>
          <button
            className="block w-full py-2 mb-2 bg-red-500 rounded hover:bg-red-600"
            onClick={deleteNode}
          >
            Delete Node
          </button>
          <input
            className="block w-full p-2 mb-2 border rounded"
            type="text"
            value={newLabel}
            onChange={handleLabelChange}
            placeholder="New Label"
          />
          <button
            className="block w-full py-2 bg-green-500 rounded hover:bg-green-600"
            onClick={applyLabelChange}
          >
            Change Label
          </button>
        </>
      )}
    </div>
    <div
      id="whiteBoard"
      className={`flex-1 border ${colorMode === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        nodeTypes={nodeTypes}
      >
        <ExportButton elementId="whiteBoard" />
        <Controls />
        <MiniMap
          style={{ backgroundColor: colorMode === "dark" ? "#333" : "gray" }}
        />
        <Background />
        <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
      </ReactFlow>
    </div>
  </div>
  );
};

export default WhiteSpace;
