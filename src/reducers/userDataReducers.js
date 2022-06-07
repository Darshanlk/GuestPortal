import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  
    bookingDetails: {
        bookingId:"",
        guestName:"",
        checkIn:"",
        checkOut:"",
        guestCount:"",
        RoomsCount:"",
        confirmRes:false,
        rooms:[]
    },
    guestDetails:{
        guestName:[],
        guestEmail:[],
        guestNumber:[],
        guestApprovance:false
    }
  
};

