import * as React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Card, Divider, Grid, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getManageProfile } from "../reducers/userDataReducers";
import { useEffect } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function GDetails() {
  const navigate = useNavigate();
  const { userData, loading } = useSelector((state) => state.userDetails);

  let name = "";
  let no_adult = "";
  let no_child = "";
  let total_guest = "";
  let rooms = "";
  let reservationno = "";

  let email = "";
  let mobile = "";

  try {
    if (userData.length > 0) {
      name = userData[0].name;
      no_adult = userData[0].adult;
      no_child = userData[0].child;
      total_guest = [no_adult + no_child];
      reservationno = userData[0].reservationno;
      rooms = [userData[0].Roomno];

      mobile = userData[0].mobile;
      email = userData[0].notiemail;
    }
  } catch (e) {
    console.log(e);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManageProfile());
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Grid item xs={11} sm={11} md={6}>
        <Box sx={{ width: "98%", marginTop: 5 }}>
          <Stack spacing={2}>
            {total_guest.map((item) => {
              return (
                <>
                  <StyledAccordion sx={{ minHeight: 30 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Card
                        elevation={0}
                        sx={{ display: "flex", flexDirection: "row" }}
                      >
                        <AccountCircleIcon
                          sx={{
                            color: blue[500],
                            marginRight: 5,
                            margin: 2,
                            fontSize: 40,
                          }}
                        />
                        <Stack spacing={1} sx={{ marginRight: 5, margin: 2 }}>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography
                              sx={{ marginRight: 5, fontWeight: 600 }}
                            >
                              {name}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                              <CheckCircleIcon
                                color="primary"
                                sx={{ fontSize: 17 }}
                              />
                              <Typography variant="caption">
                                Approved
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Typography variant="body2">+91 {mobile}</Typography>
                          <Divider />
                          <Typography variant="body2">{email}</Typography>
                        </Stack>
                      </Card>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "",
                          marginLeft: 4,
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            fontWeight: "bold",
                            color: "dodgerBlue",
                            paddingY: 2,
                          }}
                          onClick={() => navigate("/manageprofile")}
                        >
                          Edit Profile
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: 4,
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{ fontWeight: "bold", color: "red", paddingY: 2 }}
                        >
                          RemoveProfile
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </StyledAccordion>
                </>
              );
            })}
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={11} md={4} sm={11} sx={{ marginTop: 10, marginBottom: 5 }}>
        <Stack direction="column" spacing={2}>
          <Button variant="outlined">Add Guest</Button>
          <Button variant="outlined">Send Invite to Member</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.secondary,
}));

export default GDetails;
