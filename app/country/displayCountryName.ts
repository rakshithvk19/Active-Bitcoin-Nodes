"use client";

const displayCountryName = (countryCode: string): string | undefined => {
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  let countryName: string | undefined = "TOR Network";

  if (countryCode !== "null") {
    if (countryCode !== null) {
      countryName = regionNamesInEnglish.of(countryCode);
    }
  }

  return countryName;
};

export default displayCountryName;
