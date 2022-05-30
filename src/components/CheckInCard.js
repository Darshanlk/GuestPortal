import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
// By Darshan
function CheckInCard({value}) {
  const navigate=useNavigate()
  return (
    
    <Card sx={{ display: "flex", flexDirection: "row",marginY:2 }} onClick={e => navigate("/guestdetails")} >
      <CardMedia
        component="img"
        sx={{ width: 40, maxHeight: 40, marginLeft: 1, paddingTop: 3 }}
        image="https://images.vexels.com/media/users/3/136261/isolated/lists/9e3e2706ee96a036c0d2ec18e3b24c8c-key-round-icon.png"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          width: "70%",
          padding: 1,
        }}
      >
        <Typography variant="h6" sx={{fontWeight:600}}>Contactless Check In</Typography>
        <Typography variant="subtitle2">
          You can skip the queue and get the room key from reception
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 2, color: "dodgerblue" }}>
          Add Guest Details
        </Typography>
      </Box>
      <Box sx={{ padding: 3 }}>
        {/* <CircularProgress variant="determinate" value={100} size={40}color="success" /> */}
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" value={value} color="success" />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >{`${value}%`}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default CheckInCard;