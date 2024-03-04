"use server";
import CountrySummary from "./CountrySummary";
import NodeList from "./NodeList";
import { NodeProvider } from "./NodeProvider";

export default async function Page() {
  return (
    <main>
      <div className="bg-black ">
        <div className="border border-red-500 p-1 flex flex-col gap-1">
          <NodeProvider>
            <CountrySummary />
            <NodeList />
          </NodeProvider>
        </div>
      </div>
    </main>
  );
}
