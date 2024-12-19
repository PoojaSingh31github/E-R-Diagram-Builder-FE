// Sidebar.js
import React from 'react';
import "./Sidebar.css";
import { ExportButton } from '../../ExportButton/ExportButton';

function Sidebar({
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
}) {
  return (
    <div className="sidebar">
        <ExportButton elementId="whiteBoard" />
      <h2>Tables</h2>
      <button className="new-table-btn" onClick={addTable}>
        + New table
      </button>
      <div className="table-list">
        {tables.map((table, index) => (
          <div key={index} className="table-item">
            <div className="table-header">
              {editingTable === index ? (
                <input
                  type="text"
                  defaultValue={table.name}
                  onBlur={(e) => handleRename(index, e.target.value)}
                  autoFocus
                  className="edit-input"
                />
              ) : (
                <span>{table.name}</span>
              )}

              <i className="fa-solid fa-pen edit-icon" onClick={() => setEditingTable(index)}></i>
              <div className="actions-icon" onClick={() => setShowActions(showActions === index ? null : index)}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
                {showActions === index && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => addColumn(index)}>
                      <i className="fa-solid fa-columns"></i> Add column
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-database"></i> Add index
                    </div>
                    <div className="dropdown-item" onClick={() => addComment(index)}>
                      <i className="fa-solid fa-comment"></i> Add comment
                    </div>
                    <div className="dropdown-item" onClick={() => duplicateTable(index)}>
                      <i className="fa-solid fa-copy"></i> Duplicate table
                    </div>
                    <div className="dropdown-item" onClick={() => {
                      setTables(tables.filter((_, i) => i !== index));
                      setShowActions(null);
                    }}>
                      <i className="fa-solid fa-trash"></i> Delete table
                    </div>
                  </div>
                )}
              </div>

              {/* Chevron icon to toggle expand/collapse */}
              <i
                className={`fa-solid ${expandedTable === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                onClick={() => toggleExpand(index)}
              ></i>
            </div>

            {/* Show table data if the table is expanded */}
            {expandedTable === index && (
              <>
                <div className="table-columns">
                  {table.columns.map((column, colIndex) => (
                    <div key={colIndex} className="table-column">
                      <input
                        type="text"
                        value={column.name}
                        onChange={(e) => updateColumn(index, colIndex, 'name', e.target.value)}
                        placeholder="Column Name"
                        className="column-name"
                      />
                      <input
                        type="text"
                        value={column.type}
                        onChange={(e) => updateColumn(index, colIndex, 'type', e.target.value)}
                        placeholder="Data Type"
                        className="column-type"
                      />
                      {column.name !== 'id' && (
                        <div className="column-options">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                          <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => deleteColumn(index, colIndex)}>
                              <i className="fa-solid fa-trash"></i> Delete Column
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="table-comments">
                  {table.comments.map((comment, idx) => (
                    <div key={idx} className="table-comment">
                      <i className="fa-solid fa-comment"></i> {comment}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
