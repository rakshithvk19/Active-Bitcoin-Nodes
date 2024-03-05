"use client";

import { createContext, useState, useEffect, useMemo } from "react";

import data from "../../data.json";

export const CountryContext = createContext(null);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snapshot, setSnapshot] = useState<SnapshotType | null>(null); //State to capture the snapshot from the API every 10 mins

  // useEffect to fetch the API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bitnodes.io/api/v1/snapshots/latest/"
        );
        const result: SnapshotType = await response.json();
        // const result: SnapshotType = data;
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

  // Update CountryProviderValue whenever snapshot changes
  const CountryProviderValue = useMemo(() => {
    if (snapshot) {
      return {
        total_nodes: snapshot.total_nodes,
        timestamp: snapshot.timestamp,
        noOfActiveNodesByCountry: fetchNoOfActiveNodesByCountry(snapshot.nodes),
        nodes: snapshot.nodes,
      };
    }

    // If snapshot is null, return a default value or handle it appropriately
    return {
      total_nodes: 0,
      timestamp: "",
      noOfActiveNodesByCountry: {},
      nodes: {},
    };
  }, [snapshot]);

  return (
    <CountryContext.Provider value={CountryProviderValue}>
      {children}
    </CountryContext.Provider>
  );
};

// Function to fetch the number of active nodes by country from the given data
function fetchNoOfActiveNodesByCountry(
  data: Nodes
): NoOfActiveNodesByCountryType {
  const nodes: Nodes = data;
  const countryCodes: NoOfActiveNodesByCountryType = {}; // Object to store country codes and their occurrences

  for (const node in nodes) {
    const countryCode = nodes[node][7];

    if (!(countryCode in countryCodes)) {
      countryCodes[countryCode] = 1;
    } else {
      countryCodes[countryCode]++;
    }
  }

  return countryCodes;
}
