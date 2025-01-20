import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;

// Register User
export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (formData) => {
    console.log(formData);
  }
);

// Login User
export const loginUser = createAsyncThunk("AUTH/LOGIN", async (formData) => {
  console.log(formData);
});

// Logout User

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async (formData) => {
  console.log("User Logged Out");
});
