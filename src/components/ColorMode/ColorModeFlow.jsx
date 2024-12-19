import React, { useEffect, useState } from "react";
import { Panel } from "@xyflow/react";

const ColorModeFlow = ({ colorMode, setColorMode }) => {
  const onChange = (evt) => {
    setColorMode(evt.target.value);
    console.log(colorMode);
  };

  return (
    <div>
      <Panel position="top-right">
        <select onChange={onChange} data-testid="colormode-select" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded">
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
      </Panel>
    </div>
  );
};

export default ColorModeFlow;
