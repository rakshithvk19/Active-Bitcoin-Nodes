"use client";

import { createContext, useState, useEffect, Children } from "react";
import data from "../../data.json";

//Defining the structure for SnapshotType
export interface SnapshotType {
  timestamp: number;
  total_nodes: number;
  latest_height: number;
  nodes: {
    [key: string]: [
      number,
      string,
      number,
      number,
      number,
      string | null,
      string | null,
      string | null,
      number | null,
      number | null,
      string | null,
      string,
      string
    ];
  };
}

//Defining structure for Nodes(placeholder for Node-Info)
export interface Nodes {
  [key: string]: NodeInfo;
}

//Defining structure for NodeInfo that containes details about the node.
export type NodeInfo = [
  number,
  string,
  number,
  number,
  number,
  string | null,
  string | null,
  string | null,
  number | null,
  number | null,
  string | null,
  string | null,
  string | null
];

export interface CountryType {
  [countryCode: string]: number;
}

export interface CountryProviderType {
  timestamp: number;
  total_nodes: number;
}

export const CountryContext = createContext(null);

export const CountryProvider = ({ children }) => {
  const [snapshot, setSnapshot] = useState<SnapshotType | null>(null); //State to capture the snapshot from the API every 10 mins
  // const [activeNodes, setActiveNodes] = useState<number>(0); //State to capture the number of active nodes from the snapshot
  // const [formattedTimeStamp, setFormattedTimeStamp] = useState<string | "N/A">(
  //   "N/A"
  // ); //State to capture the formattedTimeStamp from the snapshot
  // const [nodes, setNodes] = useState<Nodes | null>(null); //State to capture the complete available nodes from the snapshot
  // const [countryData, setCountryData] = useState<CountryType>({}); //State that captures countryCode and number of active nodes in the country.

  const [activeNodesByCountry, setActiveNodesByCountry] = useState();

  // const [CountryProviderData, setCountryProviderData] =
  //   useState<CountryProviderType | null>(null);

  // useEffect to fetch the API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   "https://bitnodes.io/api/v1/snapshots/latest/"
        // );
        // const result: SnapshotType = await response.json();
        const result = data;
        setSnapshot(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 600000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // useEffect to update country nodes and timestamp
  useEffect(() => {
    if (snapshot) {
      //Update CountryProviderData
      // setCountryProviderData();
      //Update the timestamp
      // setActiveNodes(snapshot.total_nodes);
      //Update the number of active nodes
      // setFormattedTimeStamp(formatTimestamp(snapshot.timestamp));
      //Update the object that groups nodes by countries.
      // setNodes(snapshot.nodes);
      //Update the countryData state, that stores value in this format{country:number of active nodes}
      // setCountryData(fetchNoOfActiveNodesByCountry(snapshot.nodes));
    }
  }, [snapshot]);

  return (
    <CountryContext.Provider
      value={{
        total_nodes: data.total_nodes,
        timestamp: data.timestamp,
        noOfActiveNodesByCountry: fetchNoOfActiveNodesByCountry(data.nodes),
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

//#####################################################################
// Defining structure for Nodes (placeholder for Node-Info)
interface Nodes {
  [key: string]: NodeInfo;
}

// Defining structure for NodeInfo that contains details about the node.
type NodeInfo = [
  number,
  string,
  number,
  number,
  number,
  string | null,
  string | null,
  string | null,
  number | null,
  number | null,
  string | null,
  string | null,
  string | null
];

// Defining structure for CountryCode that stores country codes and their occurrences
interface CountryCode {
  [countryCode: string]: number;
}

// Function to fetch the number of active nodes by country from the given data
function fetchNoOfActiveNodesByCountry(data: Nodes): CountryCode {
  const nodes: Nodes = data;
  const countryCodes: CountryCode = {}; // Object to store country codes and their occurrences

  // Loop through each node
  for (const node in nodes) {
    const countryCode = nodes[node][7]; // Extract the country code from the node info
    if (countryCode != null) {
      if (!(countryCode in countryCodes)) {
        // If the country code is not already in the object, set the count to 1
        countryCodes[countryCode] = 1;
      } else {
        // If the country code is already in the object, increment the count
        countryCodes[countryCode]++;
      }
    }
  }

  return countryCodes; // Return the object containing country codes and their occurrences
}
