export const formatToUrl = (value: string) => {
  return value == undefined
    ? ""
    : value
        .replace(/[^a-z0-9_]+/gi, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase();
};
