import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapData: [],
};

export const getMapData = createAsyncThunk("mapInfo", async (body) => {
  const result = await fetch("guestportal/hotelMap", {
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

const mapInfo = createSlice({
  name: "mapData",
  initialState,
  reducers: {},
  extraReducers: {
    [getMapData.fulfilled]: (state, action) => {
      state.mapData.push(action.payload.message);
    },
  },
});

export default  mapInfo.reducer;