"use client";

// import { Link } from "react-router-dom";
import displayCountryName from "./displayCountryName";

interface Props {
  index: number;
  countryCode: string;
  nodeCount: number;
}

const CountryItem: React.FC<Props> = ({ index, countryCode, nodeCount }) => {
  return (
    <>
      <div className="border border-red-500 p-1 group text-red-500 cursor-pointer hover:bg-red-500 hover:text-black">
        <p className="font-bold">
          {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
        </p>
      </div>
    </>
    // <Link
    //   to={`${countryCode}`}
    //   className="border border-red-500 p-1 group text-red-500 cursor-pointer hover:bg-red-500 hover:text-black"
    // >
    //   <p className="font-bold">
    //     {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
    //   </p>
    // </Link>
  );
};

export default CountryItem;
