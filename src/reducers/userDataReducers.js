import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";
const initialState = {
  loading: true,
  error: "",
  userData: [],
  manageProfileData:[],
};

export const getUserData = createAsyncThunk("userInfo", async (body) => {
  const result = await fetchFunction(
    `guestportal/userDashboard`,
    body,
    "get",
    localStorage.getItem("token")
  );
  return result;
});

export const manageProfile = createAsyncThunk("manageProfile", async (body) => {
  const result = await fetchFunction(
    `/guestportal/manageProfile`,
    body,
    "post",
    localStorage.getItem("token")
  );

  return result;
});

const userInfo = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.message;
    },
    [getUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserData.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },

    [manageProfile.fulfilled]: (state,action) => {
      state.loading = false;
      state.manageProfileData.push(action.payload.message)
    },
    [manageProfile.pending]:(state,action) => {
      state.loading = true;
    },
    [manageProfile.rejected] : (state,action) => {
      state.error = "Check Your Internet Connection"
    }
  },
});

export default userInfo.reducer;
