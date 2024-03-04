//Defining the structure for SnapshotType
interface SnapshotType {
  timestamp: number | null;
  total_nodes: number | null;
  latest_height: number | null;
  nodes: {
    [key: string]: [
      number | null,
      string | null,
      number | null,
      number | null,
      number | null,
      string | null,
      string | null,
      string | null,
      number | null,
      number | null,
      string | null,
      string | null,
      string | null
    ];
  };
}

//Defining structure for Nodes(placeholder for Node-Info)
interface Nodes {
  [key: string]: NodeInfo;
}

//Defining structure for NodeInfo that containes details about the node.
type NodeInfo = [
  number | null,
  string | null,
  number | null,
  number | null,
  number | null,
  string | null,
  string | null,
  string | null,
  number | null,
  number | null,
  string | null,
  string | null,
  string | null
];

interface CountryProviderValueType {
  total_nodes: number;
  timestamp: number;
  noOfActiveNodesByCountry: NoOfActiveNodesByCountryType;
}

interface NoOfActiveNodesByCountryType {
  [countryCode: string]: number;
}
