import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserKeys, UserParams } from "../types/usersTypes";
import {
  InitialUsersStateParams,
  UpdateSearchFiltersProps,
} from "../types/userSliceTypes";
import { usersTableColumns } from "../data/tableConfig";

const initialState: InitialUsersStateParams = {
  isUsersLoading: false,
  users: null,
  searchFilters: {},
  columnsFilters: usersTableColumns.map((item) => item.id),
};
export const fetchUsers = createAsyncThunk<UserParams[]>(
  "users/fetch-users",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      const serializedData = data.map((item: UserParams) => ({
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.email,
        phone: item.phone,
      }));

      return serializedData;
    } catch (err) {
      return rejectWithValue("users wasn't fetched");
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateSearchFilter(state, action: PayloadAction<UpdateSearchFiltersProps>) {
      const { key, value } = action.payload;
      return {
        ...state,
        searchFilters: { ...state.searchFilters, [key]: value },
      };
    },
    updateColumnsFilters(state, action: PayloadAction<UserKeys[]>) {
      state.columnsFilters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<UserParams[]>) => {
          state.isUsersLoading = false;
          state.users = action.payload;
        }
      );
  },
});
export const { updateSearchFilter, updateColumnsFilters } = userSlice.actions;

export default userSlice.reducer;
