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
// import Sidebar from "../Sidebar/Sidebar.jsx";

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
    <div className="flex h-screen pt-32 pb-20 bg-[#F9E6CF]">

<div className="w-full md:w-1/5 p-4 bg-[#F9E6CF] text-gray-800 ">
<h2 className="text-2xl text-center text-[#a33669] font-bold mb-4">Tools</h2>
      <ExportButton elementId="whiteBoard" />

      
      <button
        className="flex items-center  justify-center w-full mt-5 py-2 mb-2 bg-[#FAC67A] rounded hover:bg-[#d6a55c]"
        onClick={() => addNode("rectangle")}
      >
        <i className="fas fa-border-all"></i>
        <span className="hidden md:inline ml-2">Add Rectangle</span>
      </button>

      <button
        className="flex items-center justify-center w-full py-2 mb-2 bg-[#FAC67A] rounded hover:bg-[#d6a55c]"
        onClick={() => addNode("parallelogram")}
      >
        <i className="fas fa-draw-polygon"></i>
        <span className="hidden md:inline ml-2">Add Parallelogram</span>
      </button>

      <button
        className="flex items-center justify-center w-full py-2 mb-2 bg-[#FAC67A] rounded hover:bg-[#d6a55c]"
        onClick={() => addNode("circle")}
      >
        <i className="fas fa-circle"></i>
        <span className="hidden md:inline ml-2">Add Circle</span>
      </button>

      <button
        className="flex items-center justify-center w-full py-2 mb-2 bg-[#FAC67A] rounded hover:bg-[#d6a55c]"
        onClick={() => addNode("square")}
      >
        <i className="fas fa-square"></i>
        <span className="hidden md:inline ml-2">Add Square</span>
      </button>

      <button
        className="flex items-center justify-center w-full py-2 mb-2 bg-[#FAC67A] rounded hover:bg-[#d6a55c]"
        onClick={() => addNode("diamond")}
      >
        <i className="fas fa-gem"></i>
        <span className="hidden md:inline ml-2">Add Diamond</span>
      </button>

      {selectedNodeId && (
        <>
          <button
            className="flex items-center justify-center w-full py-2 mb-2 bg-red-500 rounded hover:bg-red-600"
            onClick={deleteNode}
          >
            <i className="fas fa-trash-alt"></i>
            <span className="hidden md:inline ml-2">Delete Node</span>
          </button>
          <input
            className="block w-full p-2 mb-2 border rounded text-gray-900"
            type="text"
            value={newLabel}
            onChange={handleLabelChange}
            placeholder="New Label"
          />
          <button
            className="flex items-center justify-center w-full py-2 bg-green-500 rounded hover:bg-green-600"
            onClick={applyLabelChange}
          >
            <i className="fas fa-edit"></i>
            <span className="hidden md:inline ml-2">Change Label</span>
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
        
        <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
        <Controls />
        <MiniMap
          style={{ backgroundColor: colorMode === "dark" ? "#333" : "gray" }}
        />
        <Background />
      </ReactFlow>
    </div>
  </div>
  );
};

export default WhiteSpace;
