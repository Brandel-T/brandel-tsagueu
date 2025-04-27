export const useDateFormat = (date: Date | string): string => {
  if (!date) return "Today";
  
  if (typeof date == "string")
    date = new Date(date)
  
  if (date.getMonth() === new Date().getMonth()) return "Today";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()];
  const monthDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return monthDate + ". " + month + " " + date.getFullYear();
};

export const useRuntimeImage = (filePath: string): string => {
  if (process.env.NODE_ENV === "development")
    return useRuntimeConfig().public.apiUrl + filePath;
  return filePath;
};

/**
 * load icon from /assets folder
 * @param iconName icon name. Must be in lower case and only contain letters and not white spaces or special characters
 * @returns icon absolute path from assest folder
 */
export const useIcon = (iconName: string): string => {
  const icons = import.meta.glob("~/assets/icons/*", {
    eager: true,
    import: "default",
  });
  return String(icons["/assets/icons/" + iconName + ".svg"]);
};
