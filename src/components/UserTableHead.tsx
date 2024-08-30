import { useState } from "react";
import { TableHead } from "./ui/Table";
import SearchField from "./SearchField";
import SearchButton from "./ui/SearchButton";
import Popover from "./ui/Popover";

type UsersTableHeadProps = {
  head: string;
};

const UsersTableHead = ({ head }: UsersTableHeadProps) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <TableHead className="h-fit">
      <div className="w-full flex items-center justify-between h-10 text-gray-600 font-medium">
        {head}
        <Popover>
          <SearchButton
            active={isSearchVisible && query.length > 0}
            callback={() => setSearchVisible((p) => !p)}
          />
          <>
            <SearchField
              value={query}
              onChange={(value: string) => setQuery(value)}
            />
          </>
        </Popover>
      </div>
    </TableHead>
  );
};

export default UsersTableHead;
