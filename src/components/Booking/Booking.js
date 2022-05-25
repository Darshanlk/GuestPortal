import React from "react";
import {
  Container,
  SnackbarContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

//components
import DateCard2 from "./DateCard2";
import RoomCard2 from "./RoomCard2";
import CheckInCard from "../Home/CheckInCard";
import ServiceStack from "../Home/ServiceStack";

function Booking() {
  return (
    <div>
      <Container sx={{paddingTop:1}}>
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
          <Typography variant="body1" sx={{ color: "blue", fontWeight: 600 }}>
            HLTR3574FM
          </Typography>
        </Box>
        <DateCard2 />
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
        <RoomCard2 />
        <CheckInCard value={25} />
        <Divider />
        <ServiceStack />
      </Container>
    </div>
  );
}

export default Booking;