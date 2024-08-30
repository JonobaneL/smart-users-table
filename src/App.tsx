import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "./hooks/useTypedReduxHooks";
import { fetchUsers } from "./store/usersSlice";
import UsersTable from "./components/UsersTable";
import SearchField from "./components/SearchField";
import SearchButton from "./components/ui/SearchButton";
import Popover from "./components/ui/Popover";

function App() {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { isUsersLoading } = useTypedSelector((state) => state.usersReducer);
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="w-full min-h-dvh flex flex-col p-20">
      <div className="w-full max-w-[1280px] h-full mx-auto">
        <div className="w-52 flex items-center justify-between h-10 ">
          Name
          <Popover>
            <SearchButton
              active={isVisible}
              callback={() => setVisible((p) => !p)}
            />
            <>
              <SearchField />
            </>
          </Popover>
        </div>
        {/* {isUsersLoading ? <p>Loading...</p> : <UsersTable />} */}
      </div>
    </div>
  );
}

export default App;
