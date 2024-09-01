export type TableColumnParams<T> = {
  accessKey: keyof T;
  header: React.ReactNode | string;
  cell: (value: T[keyof T]) => React.ReactNode | string;
};

export type SearchOptionsParams<T> = Partial<Record<keyof T, string>>;
export type TableOptionsParams<T> = {
  searchOptions?: SearchOptionsParams<T>;
  columnsVisibility?: Array<keyof T>;
};
