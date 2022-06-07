import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";

// By Darshan
function DateCard({ checkIn, checkOut, nights, guest }) {
  var checkin = new Date(`${checkIn}`);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var checkOut = new Date(`${checkOut}`);

  return (
    <Paper>
      <Card sm={12} xs={5} sx={{ width: "100%", maxHeight: 200 }}>
        <Grid sx={{ display: "flex", flexDireaction: "row", maxHeight: 120 }}>
          <Box
            item
            xs={5}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 2,
            }}
          >
            <Typography variant="body1" fontWeight="600" mb={1}>
              CHECK-IN
            </Typography>
            <Grid sx={{ display: "flex", flexDirection: "row", pb: 2 }}>
              <Box>
                {/* <Typography variant="h5">12</Typography> */}
                <Typography variant="h5">{checkin.getDate()}</Typography>
              </Box>
              <Box pl={1}>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2">
                    {day[checkin.getDay()]}
                  </Typography>
                  <Typography variant="subtitle2">
                    {month[checkin.getMonth()]} {checkin.getFullYear()}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Box>
          <Box
            item
            xs={2}
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowForwardIcon sx={{ color: "GrayText", fontSize: 30 }} />
          </Box>
          <Box
            item
            xs={5}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            <Typography variant="body1" pl={2.5} fontWeight="600" mb={1}>
              CHECK-OUT
            </Typography>
            <Grid sx={{ display: "flex", flexDirection: "row", pb: 2 }}>
              <Box>
                <Typography variant="h5">{checkOut.getDate()}</Typography>
              </Box>
              <Box pl={1}>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2">
                    {day[checkOut.getDay()]}
                  </Typography>
                  <Typography variant="subtitle2">
                    {month[checkOut.getMonth()]} {checkOut.getFullYear()}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly ",
            padding: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", mt: 0.5, mr: 0.5 }}>
            <PeopleOutlineRoundedIcon sx={{ color: "dodgerblue", mr: 0.5 }} />
            <Typography variant="subtitle1">{guest} Guests</Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", mt: 0.5, marginX: 1 }}
          >
            <DarkModeOutlinedIcon sx={{ color: "dodgerblue", mr: 0.5 }} />
            <Typography variant="subtitle1">{nights} Nights</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 0.5, ml: 1 }}>
            <HotelOutlinedIcon sx={{ color: "dodgerblue", mr: 0.5 }} />
            <Typography variant="subtitle1">1 Rooms</Typography>
          </Box>
        </Box>
      </Card>
    </Paper>
  );
}

export default DateCard;
