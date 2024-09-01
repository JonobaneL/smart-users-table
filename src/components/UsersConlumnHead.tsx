import SearchField from "./SearchField";
import SearchButton from "./ui/SearchButton";
import { Popover, PopoverContent } from "./ui/Popover";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../hooks/useTypedReduxHooks";
import { updateSearchFilter } from "../store/usersSlice";
import { UserParams } from "../types/usersTypes";

type UsersTableHeadProps = {
  head: string;
  headKey: keyof Omit<UserParams, "id">;
};

const UsersConlumnHead = ({ head, headKey }: UsersTableHeadProps) => {
  const dispatch = useTypedDispatch();
  const { searchFilters } = useTypedSelector((state) => state.usersReducer);
  const fieldValue = searchFilters[headKey] || "";
  return (
    <div className="w-full flex items-center justify-between h-10 text-gray-600 font-medium">
      {head}
      <Popover>
        <SearchButton active={fieldValue ? true : false} />
        <PopoverContent className="border">
          <SearchField
            value={fieldValue}
            placeholder={"Search by " + head}
            onChange={(value: string) =>
              dispatch(updateSearchFilter({ key: headKey, value }))
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UsersConlumnHead;
