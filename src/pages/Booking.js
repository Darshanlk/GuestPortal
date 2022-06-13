import React, { useEffect } from "react";
import {
  Container,
  SnackbarContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
//components
import DateCard2 from "../components/DateCard2";
import RoomCard2 from "../components/RoomCard2";
import CheckInCard from "../components/CheckInCard";
import ServiceStack from "../components/ServiceStack";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../reducers/userDataReducers";

// By Darshan
function Booking() {
  const { userData, loading } = useSelector((state) => state.userDetails);
  let no_adult = "";
  let no_child = "";
  let total_guest = "";
  let rooms = "";
  let reservationno = "";
  let checkin = "";
  let checkout = "";



  try {
    if (userData.length > 0) {
     
      no_adult = userData[0].adult;
      no_child = userData[0].child;
      total_guest = no_adult + no_child;
      reservationno = userData[0].reservationno;
      rooms = [userData[0].Roomno];
      checkin = userData[0].arrival;
      checkout = userData[0].departure;
     
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      {loading ? (
        <Box sx={{display: "flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginY:10 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <Container sx={{ paddingTop: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingY: 1,
              }}
            >
              <Typography variant="body1" sx={{ color: "GrayText" }}>
                Booking ID
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "blue", fontWeight: 600 }}
              >
             {reservationno}
              </Typography>
            </Box>
            <DateCard2   checkIn={checkin} checkOut={checkout} />
            <Typography
              sx={{
                color: "GrayText",
                fontWeight: 600,
                paddingTop: 3,
                paddingBottom: 1,
              }}
              variant="h6"
            >
              Your Accommodation
            </Typography>
            <RoomCard2 rooms={rooms} child={no_child} adult={no_adult}  />
            <CheckInCard value={25} />
            <Divider />
            <ServiceStack />
          </Container>
        </div>
      )}
    </div>
  );
}

export default Booking;
