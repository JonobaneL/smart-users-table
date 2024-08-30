import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserParams } from "../types/usersTypes";

type initialStateParams = {
  isUsersLoading: boolean;
  users: UserParams[] | null;
};

const initialState: initialStateParams = {
  isUsersLoading: false,
  users: null,
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
  reducers: {},
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

export default userSlice.reducer;
