interface NodeProviderValueType {
  countryCode: string | null;
  noOfActiveNodes: string;
  countryNodes: CountryNodesType;
  percentageOfActiveNodes: string;
}

type CountryNodesType = [CountryNode];

interface CountryNode {
  [string]: NodeInfo;
}
