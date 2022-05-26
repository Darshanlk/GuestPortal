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

function Home() {
  const navigate=useNavigate();
  
  return (
    <div>
      <Container>
        <Box sx={{ paddingY: 4, paddingLeft: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Welcome!
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Mr. Jack Spencerrrrrrrrrrrryyyyyy
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
              HTLR3574FM
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

        <DateCard />

        <Typography
          sx={{ color: "GrayText", fontWeight: 600, paddingY: 1 }}
          variant="h6"
        >
          Your Accommodation
        </Typography>
        <RoomCard />
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