import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  loading: false,
  error: "",
  
};

export const signinUser = createAsyncThunk("signinUser", async (body) => {
  const result = await fetch("guestportal/login", {
    method: "post",
    headers: {

      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      
      
    },
    body: JSON.stringify(body),
  });

  const res = await result.json();

  return res;
});

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token= localStorage.getItem("token");
    },
  },
  extraReducers: {
    [signinUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = action.payload.message;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      }
    },

    [signinUser.pending] :(state,action) =>{
      state.loading = true;

    },

    [signinUser.rejected] :(state,action) => {
      state.loading = true
    }
  },
});

export const { addToken } = authReducer.actions;
export default authReducer.reducer;
