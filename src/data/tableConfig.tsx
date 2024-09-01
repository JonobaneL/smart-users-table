import UsersConlumnHead from "../components/UsersConlumnHead";
import { TableColumnParams } from "../types/tableTypes";
import { UserColumnParams, UserParams } from "../types/usersTypes";

export const usersTableConfig = [
  {
    accessKey: "name",
    header: <UsersConlumnHead head="Name" headKey="name" />,
    cell: (value) => value,
  },
  {
    accessKey: "username",
    header: <UsersConlumnHead head="Username" headKey="username" />,
    cell: (value) => value,
  },
  {
    accessKey: "email",
    header: <UsersConlumnHead head="Email" headKey="email" />,
    cell: (value) => value,
  },
  {
    accessKey: "phone",
    header: <UsersConlumnHead head="Phone" headKey="phone" />,
    cell: (value) => value,
  },
] as TableColumnParams<UserParams>[];

export const usersTableColumns = [
  {
    id: "name",
    name: "Name",
  },
  {
    id: "username",
    name: "Username",
  },
  {
    id: "email",
    name: "Email",
  },
  {
    id: "phone",
    name: "Phone",
  },
] as UserColumnParams[];
