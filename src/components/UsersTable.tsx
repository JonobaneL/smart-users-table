import { usersTableConfig } from "../data/tableConfig";
import { useTable } from "../hooks/useTable";
import { useTypedSelector } from "../hooks/useTypedReduxHooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";

const UsersTable = () => {
  const { users, searchFilters, columnsFilters } = useTypedSelector(
    (state) => state.usersReducer
  );
  const table = useTable(users, usersTableConfig, {
    searchOptions: searchFilters,
    columnsVisibility: columnsFilters,
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {table.headers.map((header) => (
            <TableHead key={header.accessKey}>{header.value}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.rows?.map((row, row_index) => (
          <TableRow key={row_index}>
            {row.map((cell) => (
              <TableCell className="text-sm" key={cell.accessKey}>
                {cell.value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
