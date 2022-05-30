import { Grid, Card, Box, Divider, Typography } from "@mui/material";
import React from "react";
// By Darshan
function DateCard2() {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 2,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 600 }}>CHECK-IN</Typography>
          <Typography>12 Sat,Nov 2021</Typography>
          <Typography>From 11:00 AM</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            CHECK-OUT
          </Typography>
          <Typography>14 Mon,Nov 2021</Typography>
          <Typography>Until 10:00 AM</Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            Modify Dates
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            Request Pick-up
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            Request Drop-up
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            View Recipt
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "red", paddingY: 2 }}>
            Cancel Booking
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default DateCard2;