import dayjs from "dayjs";

export const formatDate: Function = (
  date: Date | string,
  format: string = "DD MMM YYYY",
): string => {
  const dateToParse = dayjs(date);
  if (!dateToParse.isValid()) return "";

  return dateToParse.format(format);
};
