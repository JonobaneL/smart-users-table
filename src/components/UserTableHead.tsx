import { useState } from "react";
import { TableHead } from "./ui/Table";
import SearchField from "./SearchField";
import SearchButton from "./ui/SearchButton";

type UsersTableHeadProps = {
  head: string;
};

const UsersTableHead = ({ head }: UsersTableHeadProps) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  return (
    <TableHead className="h-fit">
      <div className="w-full flex items-center justify-between h-10 text-gray-600 font-medium">
        {head}
        <SearchButton
          active={isSearchVisible}
          callback={() => setSearchVisible((p) => !p)}
        />
      </div>
      {/* {isSearchVisible && <SearchField />} */}
    </TableHead>
  );
};

export default UsersTableHead;
