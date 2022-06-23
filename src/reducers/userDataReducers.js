import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";
const initialState = {
  loading: true,
  message: [{ messageTitle: "Welcome", messageBody: "Welcome to our hotel" }],
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

export const postManageProfile = createAsyncThunk(
  "postManageProfile",
  async (body) => {
    const result = await fetchFunction(
      `guestportal/manageProfile/newguest`,
      body,
      "post",
      localStorage.getItem("token")
    );

    return result;
  }
);

const userInfo = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addMessage: (state, action) => {

      state.message = [action.payload.message, ...state.message];
    },

    storeMessage: (state, action) => {

  
      localStorage.setItem("messages", state.message);
    },
  },
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
      state.manageProfileData = action.payload.data;
    },
    [getManageProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getManageProfile.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },

    [putManageProfile.fulfilled]: (state, action) => {
      state.laoding = false;
      state.manageProfileData = action.payload.message;
      // state.message.push(action.payload.message)
      state.message = [action.payload.message, ...state.message];
    },
    [putManageProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [putManageProfile.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },

    [postManageProfile.fulfilled]: (state, action) => {
      state.laoding = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.message = [action.payload.message, ...state.message];
      }
    },
    [postManageProfile.pending]: (state, action) => {
      state.laoding = true;
    },
    [postManageProfile.rejected]: (state, action) => {
      state.error = "Check Your Internet Connection";
    },
  },
});
export const { addMessage, storeMessage } = userInfo.actions;
export default userInfo.reducer;
