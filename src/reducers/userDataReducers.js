import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";
const initialState = {
  loading: true,
  error: "",
  userData: [],
  manageProfileData: [],
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

export const getManageProfile = createAsyncThunk(
  "manageProfile",
  async (body) => {
    const result = await fetchFunction(
      `guestportal/manageProfile`,
      body,
      "get",
      localStorage.getItem("token")
    );
console.log(result)
    return result;
  }
);

export const putManageProfile = createAsyncThunk(
  "putManageProfile",
  async (body) => {
    const result = await fetchFunction(
      `guestportal/manageProfile/update`,
      body,
      "put",
      localStorage.getItem("token")
    );

    return result;
  }
);

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

    [getManageProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.manageProfileData = action.payload.message;
    },
    [getManageProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getManageProfile.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },

    [putManageProfile.fulfilled]: (state, action) => {
      laoding = false;
      state.manageProfileData = action.payload.message;
    },
    [putManageProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [putManageProfile.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },
  },
});

export default userInfo.reducer;
