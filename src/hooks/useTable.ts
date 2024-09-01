import { useMemo } from "react";
import { TableColumnParams, TableOptionsParams } from "../types/tableTypes";
import { searchConditions } from "../utils/searchConditions";

export const useTable = <T>(
  data: T[] | null = [],
  tableConfig: TableColumnParams<T>[],
  tableOptions?: TableOptionsParams<T>
) => {
  const rows = useMemo(() => {
    const filteredData = !tableOptions?.searchOptions
      ? data
      : data?.filter((item) => {
          return searchConditions<T>(item, tableOptions?.searchOptions || {});
        });

    const modifiedData = filteredData?.map((item) => {
      const row = tableConfig.map((conf) => ({
        accessKey: conf.accessKey,
        value: conf.cell(item[conf.accessKey]),
      }));
      return tableOptions?.columnsVisibility
        ? row.filter((rowItem) =>
            tableOptions.columnsVisibility!.includes(rowItem.accessKey)
          )
        : row;
    });
    return modifiedData;
  }, [data, tableOptions?.searchOptions, tableOptions?.columnsVisibility]);
  const headers = useMemo(() => {
    const head = tableConfig.map((conf) => ({
      accessKey: conf.accessKey,
      value: conf.header,
    }));
    return tableOptions?.columnsVisibility
      ? head.filter((headItem) =>
          tableOptions.columnsVisibility!.includes(headItem.accessKey)
        )
      : head;
  }, [tableOptions?.columnsVisibility]);
  return { headers, rows };
};
