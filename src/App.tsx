import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "./hooks/useTypedReduxHooks";
import { fetchUsers } from "./store/usersSlice";
import UsersTable from "./components/UsersTable";
import UsersTableHeader from "./components/UsersTableHeader";

function App() {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { isUsersLoading } = useTypedSelector((state) => state.usersReducer);
  return (
    <div className="w-full min-h-dvh flex flex-col px-20">
      <div className="w-full max-w-[1280px] h-full mx-auto py-10 overflow-x-auto">
        <UsersTableHeader />
        {isUsersLoading ? <p>Loading...</p> : <UsersTable />}
      </div>
    </div>
  );
}

export default App;
