export const BASE_URL = "https://swapi.dev/api/";

export const formatToUrl = (value: string) => {
  return value == undefined
    ? ""
    : value
        .replace(/[^a-z0-9_]+/gi, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase();
};
