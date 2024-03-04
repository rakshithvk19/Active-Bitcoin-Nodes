"use client";

import { createContext, useContext } from "react";
import { useSearchParams } from "next/navigation";
import data from "../../../data.json";
import { CountryContext } from "../CountryProvider";

export const NodeContext = createContext(null);

export const NodeProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const { total_nodes } = useContext(CountryContext);
  const countryCode = searchParams.get("countrycode");

  const nodeData = {
    countryCode: countryCode,
    noOfActiveNodes: fetchActiveNodesByCountryCode(
      countryCode,
      data.nodes
    ).length.toFixed(0),
    countryNodes: fetchActiveNodesByCountryCode(countryCode, data.nodes),
    percentOfActiveNodes: percentageOfActiveNodes(
      total_nodes,
      fetchActiveNodesByCountryCode(countryCode, data.nodes).length.toFixed(0)
    ),
  };

  return (
    <NodeContext.Provider value={nodeData}>{children}</NodeContext.Provider>
  );
};

const fetchActiveNodesByCountryCode = (countryCodeData, nodeData) => {
  const countryNodes = [];
  const nodes = nodeData;

  for (const [node, details] of Object.entries(nodes)) {
    if (details[7] === countryCodeData) {
      countryNodes.push({ [node]: details });
    }
  }

  return countryNodes;
};

const percentageOfActiveNodes = (
  totalNoOfNodesData,
  noOfActiveNodesByCountryData
) => {
  const totalNoOfNodes = Number(totalNoOfNodesData);
  const noOfActiveNodesByCountry = Number(noOfActiveNodesByCountryData);

  return ((noOfActiveNodesByCountry / totalNoOfNodes) * 100).toFixed(2);
};
