"use client";

const CountrySummary: React.FC = () => {
  return (
    <div className="p-1">
      <p className="text-red-500 font-bold">
        Country Name :{/* {displayCountryName(countryCode)} */}
      </p>
      {/* <ReactCountryFlag countryCode="FR" /> */}
      <p className="text-red-500 font-bold">
        Number of Active nodes :{" "}
        {/* {displayNoOfActiveNodesOfCountry(countryCode, nodes)} */}
      </p>
      <p className="text-red-500 font-bold">
        Percentage of Active nodes :{" "}
        {/* {displayPercentageOfActiveNodes(countryCode, nodes, activeNodes)} % */}
      </p>
    </div>
  );
};

export default CountrySummary;
