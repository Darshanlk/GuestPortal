import React from "react";
import {
  Container,
  SnackbarContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

//icon

import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

// By Darshan
function ServiceStack() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>

      <Box sx={{ display: "flex", flexDirection: "row", paddingY: 2 }}>
        <DirectionsCarOutlinedIcon
          sx={{ paddingX: 2, fontSize: 30, color: "GrayText" }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Request Transpotation
          </Typography>
          <Typography>pick-up and drop-off service available</Typography>
        </Box>
        
      </Box>
      <Divider/>
      <Box sx={{ display: "flex", flexDirection: "row", paddingY: 2 }}>
        <FileOpenOutlinedIcon
          sx={{ paddingX: 2, fontSize: 30, color: "GrayText" }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Special Request
          </Typography>
          <Typography>Make your stay memorable with us</Typography>
        </Box>
      </Box>
      <Divider/>
      <Box sx={{ display: "flex", flexDirection: "row", paddingY: 2 }}>
        <HelpOutlineOutlinedIcon
          sx={{ paddingX: 2, fontSize: 30, color: "GrayText" }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Need Help
          </Typography>
          <Typography>Contect us without any hassle any time</Typography>
        </Box>
      </Box>
      <Divider/>
    </Box>
  );
}

export default ServiceStack;