import ColumnFilters from "./ColumnFilters";

const UsersTableHeader = () => {
  return (
    <div className="flex items-center gap-2 mb-4 justify-between">
      <h1 className="text-2xl font-medium text-gray-800">Users</h1>
      <ColumnFilters />
    </div>
  );
};

export default UsersTableHeader;
