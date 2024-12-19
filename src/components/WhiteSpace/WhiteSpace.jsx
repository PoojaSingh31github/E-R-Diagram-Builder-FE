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
    <div className="White-space flex flex-col items-center">
      <div
        className="sidebar p-4 bg-gray-200 shadow-md rounded-lg w-full sm:w-1/3 lg:w-1/4 flex flex-col space-y-2"
        style={{ position: "relative", zIndex: 10 }}
      >
        <h1 className="text-lg font-bold font-sans">Shapes / Tools</h1>
        <button
          onClick={() => addNode("rectangle")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Rectangle
        </button>
        <button
          onClick={() => addNode("parallelogram")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Parallelogram
        </button>
        <button
          onClick={() => addNode("circle")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Circle
        </button>
        <button
          onClick={() => addNode("square")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Square
        </button>
        <button
          onClick={() => addNode("diamond")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Diamond
        </button>

        {selectedNodeId && (
          <>
            <button
              onClick={deleteNode}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete Node
            </button>
            <input
              type="text"
              value={newLabel}
              onChange={handleLabelChange}
              placeholder="New Label"
              className="border rounded p-2"
            />
            <button
              onClick={applyLabelChange}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Change Label
            </button>
          </>
        )}
      </div>
      <div
        id="whiteBoard"
        className={`w-full sm:w-3/4 h-[90vh] border ${
          colorMode === "dark" ? "bg-gray-800" : "bg-white"
        }`}
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
            style={{
              backgroundColor: colorMode === "dark" ? "#333" : "gray",
            }}
          />
          <Background />
          <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default WhiteSpace;
