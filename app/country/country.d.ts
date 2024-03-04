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
