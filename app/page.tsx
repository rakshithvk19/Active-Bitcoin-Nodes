"use server";

import { CountryProvider } from "./CountryProvider";
import { ActiveNodesSummary } from "./ActiveNodesSummary";
import CountryList from "./CountryList";
import "./globals.css";

export default async function Page() {
  return (
    <main>
      <CountryProvider>
        <ActiveNodesSummary />
        <CountryList />
      </CountryProvider>
    </main>
  );
}
