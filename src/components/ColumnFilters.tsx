import { usersTableColumns } from "../data/tableConfig";
import Checkbox from "./ui/Checkbox";
import { Popover, PopoverContent } from "./ui/Popover";
import { UserKeys } from "../types/usersTypes";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../hooks/useTypedReduxHooks";
import { updateColumnsFilters } from "../store/usersSlice";

const ColumnFilters = () => {
  const dispatch = useTypedDispatch();
  const { columnsFilters } = useTypedSelector((state) => state.usersReducer);

  const changeHandler = (value: UserKeys | "all") => {
    let newFilters;
    if (value === "all") {
      newFilters = usersTableColumns.map((item) => item.id);
      dispatch(updateColumnsFilters(newFilters));
      return;
    }
    if (columnsFilters.includes(value) && columnsFilters.length > 1) {
      newFilters = columnsFilters.filter((item) => item != value);
    } else {
      newFilters = [...columnsFilters, value];
    }
    dispatch(updateColumnsFilters(newFilters));
  };
  return (
    <Popover>
      <button
        className={`w-fit h-fit hover:bg-gray-100 p-0.5 rounded-sm transition-colors ${
          columnsFilters.length < 4 ? "bg-gray-100" : ""
        }`}
      >
        <img className="size-5" src="/columns-icon.svg" alt="columns" />
      </button>
      <PopoverContent className="w-52 px-4 py-4 border">
        <ul className="space-y-1">
          <li>
            <Checkbox
              label="Select All"
              changeHandler={() => {
                changeHandler("all");
              }}
              checked={columnsFilters.length === usersTableColumns.length}
            />
          </li>
          {usersTableColumns.map((column) => (
            <li key={column.id}>
              <Checkbox
                label={column.name}
                changeHandler={() => {
                  changeHandler(column.id);
                }}
                checked={columnsFilters.includes(column.id)}
              />
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ColumnFilters;
