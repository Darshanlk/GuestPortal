import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:true,
  error:"",
  userData: [],
};

export const getUserData = createAsyncThunk("userInfo", async (body) => {
  const result = await fetch("guestportal/userDashboard", {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });

  const res = await result.json();

  return res;
});

const userInfo = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      state.loading = false
      state.userData =  action.payload.message
    },
    [getUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserData.rejected]: (state, action) => {
      state.error = "check Your Internet Connection";
    },
  },
});

export default userInfo.reducer;
