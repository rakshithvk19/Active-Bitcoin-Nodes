"use client";

import { createContext } from "react";

export const NodeContext = createContext(null);

export const NodeProvider = ({ children }) => {
  const nodeData = {
    /* your data here */
  };

  return (
    <NodeContext.Provider value={nodeData}>{children}</NodeContext.Provider>
  );
};
