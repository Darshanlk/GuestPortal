import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Routes, Route, useParams } from 'react-router-dom';

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinUser } from "../reducers/authReducers";

//By Darshan
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        https://www.ezeetechnosys.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({ name }) {

  let { unkid } = useParams();



  const [loginId, setLoginId] = useState("");
  const [pin, setpin] = useState("");

  //redux

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    let newData = {
      unkid,
      loginId,
      pin,
    };

    dispatch(signinUser(newData));
 

    setTimeout( () => {navigate('/')},1000)

  };

  // const sendData = await axios.post(`/guestportal/login/`, {
  //   loginId: data.get("loginId"),
  //   pin: data.get("pin"),
  // });

  // console.log(sendData.data);
  // console.log(sendData.data.token);
  // localStorage.setItem("token", sendData.data.token);

  //     const x =  await fetch('guestportal/login',{
  //       method:"post",
  //       headers :{
  //         "Accept":"application/json, text/plain, */*",
  //         "Content-Type":"application/json",
  //       },
  //       body:JSON.stringify(newData)

  //     })

  // const y = await x.json()

  //     console.log(x,y)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: "dodgerBlue" }}>
            Hotel {name}
          </Typography>
          <Typography variant="h5" sx={{ color: "GrayText" }}>
            Guest Portal
          </Typography>
          <Box

     
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="loginId"
              label="Reservation Number/Login Id"
              name="loginId"
              autoComplete="loginId"
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="pin"
              label="pin"
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setpin(e.target.value)}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Go
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot PIN?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 7, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
