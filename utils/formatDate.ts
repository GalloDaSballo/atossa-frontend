export const formatDate = (dateToFormat: Date): string => {
  const date = new Date(dateToFormat);

  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
};
