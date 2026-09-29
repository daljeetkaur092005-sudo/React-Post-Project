import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/Config";

export const loginApi = createAsyncThunk(
  "api/login",
  async (credentials, thunkApi) => {
    try {
      let res = await axiosInstance.post("/api/auth/login", credentials);
      return res.data.data
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)


export const currentUserApi = createAsyncThunk(
  "/api/me",
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get("/api/auth/me");

      return res.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Unable to get current user"
      );
    }
  }
);