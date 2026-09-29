import { createSlice } from "@reduxjs/toolkit";
import { currentUserApi, loginApi } from "./AuthAction";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticate: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      ((state.user = action.payload), (state.isAuthenticate = true));
    },
    removeUser: (state, action) => {
      ((state.user = null), (isAuthenticate = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.isAuthenticate = false;
        state.isLoading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.isAuthenticate = true));
        state.isLoading = false;
      })
      .addCase(loginApi.rejected, (state, action) => {
        ((state.user = null), (state.isAuthenticate = false));
        state.isLoading = false;
      })
      .addCase(currentUserApi.pending, (state, action) => {
        state.isAuthenticate = false;
        state.isLoading = true;
      })
      .addCase(currentUserApi.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.isAuthenticate = true));
        state.isLoading = false;
      })
      .addCase(currentUserApi.rejected, (state, action) => {
        ((state.user = null), (state.isAuthenticate = false));
        state.isLoading = false;
      });
  },
});
export const { addUser, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
