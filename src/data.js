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
    stationId: "00001",
    stationName: "Dutse Command",
    password: "admin",
  },
  {
    stationId: "00002",
    stationName: "Dutse Command",
    password: "admin",
  },
  {
    stationId: "00003",
    stationName: "kiyari Command",
    password: "admin",
  },
  {
    stationId: "00004",
    stationName: "jaho Command",
    password: "admin",
  },
  {
    stationId: "00005",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "00006",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "00007",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "00008",
    stationName: "hamisu Command",
    password: "admin",
  },
  {
    stationId: "00009",
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
  { title: "Nature of crime", value: "natureOfCrime" },
  { title: "Date", value: "createdAt" },
  { title: "Status", value: "status" },
];
