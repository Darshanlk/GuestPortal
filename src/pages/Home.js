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

// Icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckInCard from "../components/CheckInCard";
import ServiceStack from "../components/ServiceStack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, userInfo } from "../reducers/userDataReducers";

// By Darshan
function Home() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  
const {userData} = useSelector((state) => state.userDetails)

console.log("fetchdata",userData[0][0])

let no_adult = userData[0][0].adult;
let no_child = userData[0][0].child;
let total_guest = no_adult + no_child
 
let rooms = [userData[0][0].Roomno];
console.log(userData)


  useEffect(() => {
    dispatch(getUserData());
  },[])
  return (
    <div>
      <Container>
        <Box sx={{ paddingY: 4, paddingLeft: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Welcome!
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {userData[0][0].salutation} {userData[0][0].name}
          </Typography>
        </Box>

        <Divider />
        <Box  sx={{ paddingY: 2 }}>
          <Typography variant="subtitle2" sx={{ ml: "22px", fontWeight: 200 }}>
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
            {userData[0][0].reservationno}
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

        <DateCard  checkIn={userData[0][0].arrivaldate} checkOut={userData[0][0].departuredate} nights={userData[0][0].noofdays} guest= {total_guest} />

        <Typography
          sx={{ color: "GrayText", fontWeight: 600, paddingY: 1 }}
          variant="h6"
        >
          Your Accommodation
        </Typography>
        <RoomCard  rooms= {rooms} child={no_child} adult={no_adult}  />
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
          action={<ArrowForwardIosIcon sx={{ fontSize: 18, color: "black" }} />}
          onClick={e => navigate("/booking")}

        />
        <CheckInCard value={30} />

        <Divider />
        <ServiceStack />
      </Container>
    </div>
  );
}

export default Home;