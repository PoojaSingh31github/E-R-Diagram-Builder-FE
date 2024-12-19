import React, { useEffect, useState } from "react";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  addEdge,
  Handle,
  EdgeText,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ExportButton } from "../../ExportButton/ExportButton";
import ColorModeFlow from "../../ColorMode/ColorModeFlow";


const WhiteSpace = ({ tables }) => {
  const [colorMode, setColorMode] = useState("dark");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [relationshipType, setRelationshipType] = useState("One-to-One");

  useEffect(() => {
    const newNodes = [];

    tables.forEach((table, tableIndex) => {
      const tableNode = {
        id: table.name,
        data: { label: <TableNode label={table.name} /> },
        position: { x: 100 + tableIndex * 300, y: 100 },
        style: {
          padding: "0px",
          borderRadius: "8px",
          background: "#21F3",
          color: "#fff",
        },
        draggable: true,
      };
      newNodes.push(tableNode);

      table.columns.forEach((col, colIndex) => {
        const columnNodeId = `${table.name}-${col.name}`;
        newNodes.push({
          id: columnNodeId,
          data: { label: <ColumnNode label={col.name} /> },
          position: { x: 100 + tableIndex * 300, y: 140 + colIndex * 50 },
          parentNode: table.name,
          style: {
            padding: "5px",
            textAlign: "center",
            borderRadius: "4px",
            background: "red",
            margin: "2px",
          },
          draggable: true,
        });
      });
    });

    setNodes(newNodes);
  }, [tables]);

  const onConnect = (connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...connection,
          label: relationshipType,
          animated: true,
          style: { stroke: "yellow", strokeDasharray: "5,5" },
          labelStyle: { fontSize: 10, fill: "black" },
        },
        eds
      )
    );
  };

  const handleDeleteEdge = (edgeId) => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
  };

  return (
    <div className="White-space">
       <ExportButton elementId="whiteBoard" />
      <div
        id="whiteBoard"
        className={`h-[90vh] w-full border ${
          colorMode === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <select
          className="absolute top-2 left-2 z-10 w-48 p-2 border rounded-md bg-white text-black"
          onChange={(e) => setRelationshipType(e.target.value)}
          value={relationshipType}
        >
          <option value="One-to-One">One-to-One</option>
          <option value="One-to-Many">One-to-Many</option>
          <option value="Many-to-Many">Many-to-Many</option>
        </select>

        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
         
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

const TableNode = ({ label }) => (
  <div
    className="p-0 font-bold text-center text-sm text-white"
  >
    <h3>{label}</h3>
  </div>
);

const ColumnNode = ({ label }) => (
  <div
    className="p-0 text-center rounded bg-white m-0"
  >
    <p className="text-xs m-0">{label}</p>
  </div>
);

// Custom edge component with delete button
const CustomEdge = ({ id, source, target, label, animated, style, onDelete }) => {
  const edgeStyle = { ...style, cursor: "pointer" };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          ...edgeStyle,
          width: "10px",
          height: "10px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => onDelete(id)}
          className="p-2 bg-red-600 text-white border-none rounded cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default WhiteSpace;
