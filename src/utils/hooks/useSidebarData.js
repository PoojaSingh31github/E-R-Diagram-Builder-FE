// src/hooks/useSidebarData.js
import { useState } from 'react';

const useSidebarData = () => {
  const [tables, setTables] = useState([]);
  const [tableCounter, setTableCounter] = useState(1);
  const [editingTable, setEditingTable] = useState(null);
  const [showActions, setShowActions] = useState(null);
  const [expandedTable, setExpandedTable] = useState(null);

  const addTable = () => {
    const newTable = {
      name: `table_${tableCounter}`,
      columns: [{ name: 'id', type: 'bigint' }],
      comments: [],
    };
    setTables([...tables, newTable]);
    setTableCounter(tableCounter + 1);
  };

  const handleRename = (index, newName) => {
    const updatedTables = [...tables];
    updatedTables[index].name = newName;
    setTables(updatedTables);
    setEditingTable(null);
  };

  const addColumn = (index) => {
    const updatedTables = [...tables];
    updatedTables[index].columns.push({
      name: `column_${updatedTables[index].columns.length + 1}`,
      type: 'bigint',
    });
    setTables(updatedTables);
  };

  const updateColumn = (tableIndex, colIndex, field, value) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].columns[colIndex][field] = value;
    setTables(updatedTables);
  };

  const deleteColumn = (tableIndex, colIndex) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].columns.splice(colIndex, 1);
    setTables(updatedTables);
  };

  const duplicateTable = (index) => {
    const tableToDuplicate = tables[index];
    const newTable = {
      ...tableToDuplicate,
      name: `${tableToDuplicate.name}_duplicate_${tableCounter}`,
      columns: tableToDuplicate.columns.map((column) => ({ ...column })),
    };
    setTables([...tables, newTable]);
    setTableCounter(tableCounter + 1);
  };

  const toggleExpand = (index) => {
    setExpandedTable(expandedTable === index ? null : index);
  };

  const addComment = (index) => {
    const comment = prompt("Enter your comment:");
    if (comment) {
      const updatedTables = [...tables];
      updatedTables[index].comments.push(comment);
      setTables(updatedTables);
    }
  };

  return {
    tables,
    setTables,
    tableCounter,
    setTableCounter,
    editingTable,
    setEditingTable,
    showActions,
    setShowActions,
    expandedTable,
    setExpandedTable,
    addTable,
    handleRename,
    addColumn,
    updateColumn,
    deleteColumn,
    duplicateTable,
    toggleExpand,
    addComment,
  };
};

export default useSidebarData;
