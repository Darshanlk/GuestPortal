import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

// icons
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import { Box } from "@mui/system";
import { Divider ,Dialog, DialogTitle, DialogContent } from "@mui/material";
import { blue } from '@mui/material/colors';

import { useNavigate } from "react-router-dom";
import StayPeriod from "../forms/StayPeriod";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

// By Darshan
export default function RoomCard2({rooms,child,adult}) {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          p: 1,
          margin: "auto",
          maxWidth: 2000,
          flexGrow: 1,
        }}
      >
       { rooms.map((item) => {
         return(
           <>
           <Grid container spacing={2} md={12}>
          <Grid item>
            <Typography variant="subtitle1" mr={4} sx={{fontWeight:600}}>
              ROOM 1
            </Typography>

            <ButtonBase sx={{ width: 100, height: 100 }}>
              <Img
                alt="complex"
                src="https://images.unsplash.com/photo-1634072319894-107e61606191?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container sx={{ mt: 3 }}>
            <Grid item xs container direction="column">
              <Grid
                item
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle1">
                  <HotelOutlinedIcon
                    sx={{ fontSize: "17px", color: "GrayText", pr: 1 }}
                  />{" "}
                  {rooms}
                </Typography>
                <Typography variant="subtitle1">
                  {" "}
                  <PeopleOutlineRoundedIcon
                    sx={{ fontSize: "17px", color: "GrayText", pr: 1 }}
                  />
                  {adult} Adults {child} Child
                </Typography>
                <Typography>
                  <RestaurantRoundedIcon
                    sx={{ fontSize: "17px", color: "GrayText", pr: 1 }}
                  />
                  CP(Breackfast included)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{paddingTop:2}}>
        <Divider />
          <Box onClick={e => navigate("/guestdetails")}  sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
           
            <Typography sx={{ fontWeight: 400, color: "dodgerBlue",padding:2 }}>
              Update Guest Details
            </Typography>
          </Box>
          <Divider />
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Typography onClick={handleClickOpen} sx={{ fontWeight: 400, color: "dodgerBlue",padding:2 }}>
              Modify Dates
            </Typography>
            <Dialog maxWidth='xs'  fullWidth={true} open={open} onClose={handleClose}>
            <DialogTitle bgcolor={blue[500]}   sx={{ display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center'}} style={{ marginBottom: 5, }}><Typography variant="h6">Change Stay Period</Typography>
            </DialogTitle>
            {/* <Divider/> */}
            <DialogContent>
              <StayPeriod></StayPeriod>
              </DialogContent>
              </Dialog>
          </Box>
          <Divider />
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Typography sx={{ fontWeight: 400, color: "red",padding:2 }}>
              CancelRoom
            </Typography>
          </Box>
          <Divider />
        </Box>
        <br />
           </>
         )
       })
     
       }
      </Paper>
      {/*  */}
    </>
  );
}