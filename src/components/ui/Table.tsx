import { cn } from "../../lib/ustils";

type DefaultTableProps = {
  children: React.ReactNode;
  className?: string;
};

type TableProps = DefaultTableProps & React.HTMLAttributes<HTMLTableElement>;

const Table = ({ children, className, ...props }: TableProps) => {
  return (
    <table className={cn("w-full", className)} {...props}>
      {children}
    </table>
  );
};
type TableSectionProps = DefaultTableProps &
  React.HTMLAttributes<HTMLTableSectionElement>;

const TableHeader = ({ children, className }: TableSectionProps) => {
  return (
    <thead
      className={cn(
        "w-full  [&_tr]:border-b [&_tr]:hover:bg-transparent",
        className
      )}
    >
      {children}
    </thead>
  );
};
const TableBody = ({ children, className }: TableSectionProps) => {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  );
};

type TableRowProps = DefaultTableProps &
  React.HTMLAttributes<HTMLTableRowElement>;

const TableRow = ({ children, className }: TableRowProps) => {
  return (
    <tr
      className={cn(
        "grid grid-flow-col auto-cols-fr border-b transition-colors hover:bg-gray-100",
        className
      )}
    >
      {children}
    </tr>
  );
};

type TableCellProps = DefaultTableProps &
  React.HTMLAttributes<HTMLTableCellElement>;

const TableHead = ({ children, className }: TableCellProps) => {
  return (
    <th
      className={cn("h-10 px-2 text-left align-middle font-medium", className)}
    >
      {children}
    </th>
  );
};

const TableCell = ({ children, className }: TableCellProps) => {
  return (
    <td className={cn("h-8 px-2 text-left flex items-center", className)}>
      {children}
    </td>
  );
};
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
