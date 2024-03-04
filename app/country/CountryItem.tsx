"use client";

import { useRouter } from "next/navigation";
import displayCountryName from "./displayCountryName";

interface Props {
  index: number;
  countryCode: string;
  nodeCount: number;
}

const CountryItem: React.FC<Props> = ({ index, countryCode, nodeCount }) => {
  const router = useRouter();

  return (
    <>
      <div
        className="border border-red-500 p-1 group text-red-500 cursor-pointer hover:bg-red-500 hover:text-black"
        onClick={() => router.push("/country/nodes")}
      >
        <p className="font-bold">
          {index + 1}. {displayCountryName(countryCode)} ({nodeCount})
        </p>
      </div>
    </>
  );
};

export default CountryItem;
