"use client";
//Importing React hooks
import { createContext, useContext } from "react";

//Importing Next.js hooks
import { useSearchParams } from "next/navigation";

//Importing Providers
import { CountryContext } from "../CountryProvider";

//Importing hardcoded data
import data from "../../../data.json";

export const NodeContext = createContext(null);

export const NodeProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const countryCode: string | null = searchParams.get("countrycode");

  const { total_nodes } = useContext(CountryContext);

  const NodeProviderValue: NodeProviderValueType = {
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
    <NodeContext.Provider value={NodeProviderValue}>
      {children}
    </NodeContext.Provider>
  );
};

//Function to fetch active nodes based on the country code.
const fetchActiveNodesByCountryCode = (
  countryCodeData: string,
  nodeData: Nodes
) => {
  const countryNodes = [];
  const nodes = nodeData;

  for (const [node, details] of Object.entries(nodes)) {
    if (details[7] === countryCodeData) {
      countryNodes.push({ [node]: details });
    }
  }

  return countryNodes;
};

//Function to fetch the percentage of active nodes.
const percentageOfActiveNodes = (
  totalNoOfNodesData: string,
  noOfActiveNodesByCountryData: string
) => {
  const totalNoOfNodes = Number(totalNoOfNodesData);
  const noOfActiveNodesByCountry = Number(noOfActiveNodesByCountryData);

  return ((noOfActiveNodesByCountry / totalNoOfNodes) * 100).toFixed(2);
};
