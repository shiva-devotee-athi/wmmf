export type MemberCountry = {
  name: string;
  code: string;
  region: string;
  joined: number;
};

export const memberCountries: MemberCountry[] = [
  { name: "India", code: "IN", region: "Asia", joined: 2018 },
  { name: "Brazil", code: "BR", region: "South America", joined: 2019 },
  { name: "Nigeria", code: "NG", region: "Africa", joined: 2020 },
  { name: "Spain", code: "ES", region: "Europe", joined: 2019 },
  { name: "Japan", code: "JP", region: "Asia", joined: 2021 },
  { name: "United States", code: "US", region: "North America", joined: 2020 },
  { name: "South Africa", code: "ZA", region: "Africa", joined: 2021 },
  { name: "Australia", code: "AU", region: "Oceania", joined: 2022 },
];

export const federationStats = [
  { label: "Member Nations", value: 10, suffix: "+" },
  { label: "Continents Represented", value: 5, suffix: "" },
  { label: "Founded", value: 2024, suffix: "" },
  { label: "Certified Referees", value: 15, suffix: "+" },
];