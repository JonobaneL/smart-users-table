import { useTypedSelector } from "../hooks/useTypedReduxHooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";
import UsersTableHead from "./UserTableHead";

type UsersTableProps = {};

const UsersTable = ({}: UsersTableProps) => {
  const { users } = useTypedSelector((state) => state.usersReducer);
  const columns = [
    { key: "name", name: "Full Name" },
    { key: "username", name: "Username" },
    { key: "email", name: "Email address" },
    { key: "phone", name: "Phone" },
  ];
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((item) => (
              <UsersTableHead key={item.key} head={item.name} />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-sm">{item.name}</TableCell>
              <TableCell className="text-sm">{item.username}</TableCell>
              <TableCell className="text-sm">{item.email}</TableCell>
              <TableCell className="text-sm">{item.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersTable;
