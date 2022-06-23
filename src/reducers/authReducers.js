import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFunction } from "../helpers/fetchFunction";
const initialState = {
  token: "",
  loading: false,
  error: "",
};

export const signinUser = createAsyncThunk("signinUser", async (body) => {
  const result = await fetchFunction(`/guestportal/login/${body.unkid}`, body, "post", "");
  return result;
});

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },

    logout: (state,action) => {
      localStorage.removeItem("token")
    }


  },
  extraReducers: {
    [signinUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = action.payload.message;
        state.token = action.payload.token;
        
        if(state.token != undefined){
        localStorage.setItem("token", action.payload.token);
        }
        if(localStorage.getItem("UnkId") == null ){
          localStorage.setItem("UnkId",action.payload.unklink)
        }
      }
    },

    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },

    [signinUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken,logout } = authReducer.actions;
export default authReducer.reducer;
