import recordJson from "./record.json";
export const record = recordJson;
export const badge = {
  all: { color: "blue", colorVariant: "blue.400", label: "All" },
  open: { color: "red", colorVariant: "red.400", label: "Open" },
  pending: {
    color: "yellow",
    colorVariant: "yellow.500",
    label: "In-progress",
  },
  resolved: {
    color: "green",
    colorVariant: "green.400",
    label: "Resolved",
  },
};
export const natureOfCrime = [
  "Homicide",
  "Killing Spree",
  "Rape",
  "shopLifting",
  "Assault Robbery",
  "Kidnapping",
  "Domestic threat",
  "Burglary",
  "Violence",
  "Cyber crime",
  "Other",
];
export const station = [
  {
    stationId: "1001",
    stationName: "Dutse Command",
    password: "admin",
  },
  {
    stationId: "1002",
    stationName: "Dutse Command",
    password: "admin",
  },
  {
    stationId: "1003",
    stationName: "kiyari Command",
    password: "admin",
  },
  {
    stationId: "1004",
    stationName: "jaho Command",
    password: "admin",
  },
  {
    stationId: "1005",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "1006",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "1007",
    stationName: "hamisu police",
    password: "admin",
  },
  {
    stationId: "1008",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "1009",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "00010",
    stationName: "hamisu Command",
    password: "admin",
  },
];
export const tableHeaders = [
  { title: "Case ID", value: "caseId" },
  { title: "Station ID", value: "stationId" },
  { title: "Reporter", value: "reporter" },
  { title: "Address", value: "address" },
  { title: "Nature of crime", value: "natureOfCrime" },
  { title: "Date", value: "createdAt" },
  { title: "Status", value: "status" },
];
