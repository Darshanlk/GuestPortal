import React from "react";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Grid,
  Icon,
  Card,
  Box,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Stack,
  Button,
} from "@mui/material";
import { Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { blue } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useDispatch, useSelector } from "react-redux";

import { getManageProfile } from "../reducers/userDataReducers";

import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

function ManageProfile() {
  const { userData, loading, manageProfileData } = useSelector(
    (state) => state.userDetails
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManageProfile());
  }, []);

  let phone = "";
  let email = "";

  console.log(manageProfileData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginY: 10,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Fragment>
          <Box sx={{ marginLeft: 2, marginRight: 2, marginTop: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                {manageProfileData.map((item) => {
                  {
                    console.log(item);
                  }
                  return (
                    <Card
                      key={item.key}
                      elevation={1}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 1,
                      }}
                    >
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
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
                            <Stack
                              spacing={1}
                              sx={{ marginRight: 5, margin: 2 }}
                            >
                              <Box
                                sx={{ display: "flex", flexDirection: "row" }}
                              >
                                <Typography
                                  sx={{ marginRight: 5, fontWeight: 600 }}
                                >
                                  {item.salutation 
                                    +
                                    item.name 
                                    
                                    }
                                </Typography>
                                <Box
                                  sx={{ display: "flex", flexDirection: "row" }}
                                >
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
                              <Typography variant="body2">
                                +91 {item.mobile}
                              </Typography>
                              <Divider />
                              <Typography variant="body2">
                                {item.email}
                              </Typography>
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
                              onClick={() => {
                                navigate("/manageprofile", {
                                  state: {
                                    guesttranunkid:item.guesttranunkid,
                                    identityImage: item.identityImage,
                                    guestimage: item.guestimage,
                                    honorifics: item.salutation,
                                    name: item.name ,
                                    address: item.address,
                                    gender: item.gender,
                                    city: item.city,
                                    state: item.state,
                                    zip: item.zip,
                                    country: item.country,
                                    mobile: item.mobile,
                                    email: item.email,
                                    guestIdentity: item.guestidentity,
                                    guestIdentityNumber: item.identity_no,
                                    identity_city: item.identity_city,
                                  },
                                });
                              }}
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
                              sx={{
                                fontWeight: "bold",
                                color: "red",
                                paddingY: 2,
                              }}
                            >
                              RemoveProfile
                            </Typography>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  );
                })}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sm={11}
                order={{ xs: 2, md: 2 }}
                sx={{ marginTop: 5, marginBottom: 5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Stack sx={{ width: "80%" }} direction="column" spacing={2}>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      Add Guest
                    </Button>
                    <Button variant="outlined">Send Invite to Member</Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fragment>
      )}
    </>
  );
}

export default ManageProfile;
