"use server";
import { CountryProvider } from "../CountryProvider";
import CountrySummary from "./CountrySummary";
import NodeList from "./NodeList";
import { NodeProvider } from "./NodeProvider";

export default async function Page() {
  return (
    <main>
      <div className="bg-black ">
        <div className="border border-red-500 p-1 flex flex-col gap-1">
          <CountryProvider>
            <NodeProvider>
              <CountrySummary />
              <NodeList />
            </NodeProvider>
          </CountryProvider>
        </div>
      </div>
    </main>
  );
}
