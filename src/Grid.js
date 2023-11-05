import React from "react";
import "./Grid.css"; // Grid stil dosyası

function Grid({ children }) {
  return <div className="grid-container">{children}</div>;
}

export default Grid;
