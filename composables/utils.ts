export const useDateFormat = (date: Date) => {
  if (date.getMonth() === new Date().getMonth()) return "Today";
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  const monthDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return date.getFullYear() + "." + month + "." + monthDate;
};

export const useImage = (pathName: string) => {
  // @ts-ignore
  const assets = import.meta.glob("~/assets/images/*", {
    eager: true,
    import: "default",
  });
  return assets["/assets/images/" + pathName];
};
