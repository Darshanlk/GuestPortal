import React, { useEffect } from "react";
import RoomCard from "../components/RoomCard";
import {
  Container,
  SnackbarContent,
  Typography,
  Box,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import DateCard from "../components/DateCard";
import CircularProgress from "@mui/material/CircularProgress";
// Icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckInCard from "../components/CheckInCard";
import ServiceStack from "../components/ServiceStack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../reducers/userDataReducers";

// By Darshan
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, loading } = useSelector((state) => state.userDetails);

  let no_adult = "";
  let no_child = "";
  let total_guest = "";
  let rooms = "";
  let salutation = "";
  let name = "";
  let reservationno = "";
  let checkin = "";
  let checkout = "";
  let nights = "";

  try {
    if (userData.length > 0) {
      name = userData[0].name;
      no_adult = userData[0].adult;
      no_child = userData[0].child;
      total_guest = no_adult + no_child;
      salutation = userData[0].salutation;
      reservationno = userData[0].reservationno;
      rooms = [userData[0].Roomno];
      checkin = userData[0].arrivaldate;
      checkout = userData[0].departuredate;
      nights = userData[0].noofdays;
    }
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div>
      {loading ? (
        <Box sx={{ display: "flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginY:10 }}>
         <CircularProgress />
        </Box>
      ) : (
        <Container>
          <Box sx={{ paddingY: 4, paddingLeft: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Welcome!
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {name}
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ paddingY: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ ml: "22px", fontWeight: 200 }}
            >
              {/* {userData[0][0].reservationno} */}
              Booking ID
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "dodgerblue", fontWeight: 600, marginLeft: 3 }}
              >
                {reservationno}
              </Typography>
              <Button
                variant="outlined"
                color="success"
                sx={{
                  maxWidth: "100px",
                  maxHeight: "20px",
                  minWidth: "30px",
                  minHeight: "5px",
                  marginLeft: 3,
                }}
              >
                Confirmed
              </Button>
            </Box>
          </Box>

          <DateCard
            checkIn={checkin}
            checkOut={checkout}
            nights={nights}
            guest={total_guest}
          />

          <Typography
            sx={{ color: "GrayText", fontWeight: 600, paddingY: 1 }}
            variant="h6"
          >
            Your Accommodation
          </Typography>
          <RoomCard rooms={rooms} child={no_child} adult={no_adult} />
          <br />
          <SnackbarContent
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "dodgerBlue",
              fontSize: 18,
              fontWeight: 600,
            }}
            message="Make changes to your booking"
            action={
              <ArrowForwardIosIcon sx={{ fontSize: 18, color: "black" }} />
            }
            onClick={(e) => navigate("/booking")}
          />
          <CheckInCard value={30} />

          <Divider />
          <ServiceStack />
        </Container>
      )}
    </div>
  );
}

export default Home;
