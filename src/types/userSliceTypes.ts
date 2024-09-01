import { UserKeys, UserParams } from "./usersTypes";

export type InitialUsersStateParams = {
  isUsersLoading: boolean;
  users: UserParams[] | null;
  searchFilters: Partial<Record<UserKeys, string>>;
  columnsFilters: UserKeys[];
};
export type UpdateSearchFiltersProps = {
  key: UserKeys;
  value: string;
};
