import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const getUserData = createAsyncThunk("userInfo", async (body) => {
  const result = await fetch("guestportal/userDashboard", {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
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
      state.userData.push(action.payload.message);
    },
  },
});

export default  userInfo.reducer;