import useSidebarData from "../../utils/hooks/useSidebarData";
import Sidebar from "./SideBar/Sidebar.jsx";
import WhiteSpace from "./WhiteSpace/WhiteSpace.jsx";

function Schema() {
  const {
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
  } = useSidebarData();

  return (
    <div className="flex h-screen pt-40 mb-32 bg-[#F9E6CF]">
      <Sidebar
        tables={tables}
        setTables={setTables}
        tableCounter={tableCounter}
        setTableCounter={setTableCounter}
        editingTable={editingTable}
        setEditingTable={setEditingTable}
        showActions={showActions}
        setShowActions={setShowActions}
        expandedTable={expandedTable}
        setExpandedTable={setExpandedTable}
        addTable={addTable}
        handleRename={handleRename}
        addColumn={addColumn}
        updateColumn={updateColumn}
        deleteColumn={deleteColumn}
        duplicateTable={duplicateTable}
        toggleExpand={toggleExpand}
        addComment={addComment}
      />
      <WhiteSpace tables={tables} />
    </div>
  );
}

export default Schema;
