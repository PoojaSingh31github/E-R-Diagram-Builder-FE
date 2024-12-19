import React, { useEffect, useState } from "react";
import { Panel } from "@xyflow/react";

const ColorModeFlow = ({ colorMode, setColorMode }) => {
  // const [colorMode, setColorMode] = useState("dark");

  const onChange = (evt) => {
    setColorMode(evt.target.value);
    console.log(colorMode);
  };

  return (
    <div>
      <Panel position="top-right">
        <select onChange={onChange} data-testid="colormode-select">
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
      </Panel>
    </div>
  );
};

export default ColorModeFlow;
