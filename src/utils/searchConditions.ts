import { SearchOptionsParams } from "../types/tableTypes";

export const searchConditions = <T>(
  value: T,
  searchFilters: SearchOptionsParams<T>
) => {
  const conditions = Object.keys(searchFilters).map((key) => {
    const reg = new RegExp(searchFilters[key as keyof T] + ".*$", "i");
    const testValue = value[key as keyof T];
    if (typeof testValue === "string")
      return testValue.search(reg) >= 0 ? true : false;
    return false;
  });
  if (!conditions.includes(false)) return true;
  return false;
};
