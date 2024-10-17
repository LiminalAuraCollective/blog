import { format } from "date-fns";

export const DateFmt = (d: string | number | Date, m = "MM/dd") => {
  return format(d, m);
};

export const numConvertToUnit = (n: number, d = 2) => {
  if (!n || n < 0) return 0;
  return (n / 1000).toFixed(d) + "k";
};

export const numConvertToMinutes = (n: number) => {
  return Math.ceil(n / 1000 / 60) + "分钟";
};
