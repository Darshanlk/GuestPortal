import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography, Box, Divider, Button } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToken, logout } from "../reducers/authReducers";
import { Navigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function AccountPreviewCard() {
    const navigate = useNavigate();
    const { userData, loading } = useSelector((state) => state.userDetails);
    let name="";
    let no_adult = "";
    let no_child = "";
    let total_guest = "";
    let rooms = "";
    let reservationno = "";
    let checkIn = "";
    let checkOut = "";



    try {
        if (userData.length > 0) {
            name = userData[0].name;
            no_adult = userData[0].adult;
            no_child = userData[0].child;
            total_guest = no_adult + no_child;
            reservationno = userData[0].reservationno;
            rooms = [userData[0].Roomno];
            checkIn = userData[0].arrival;
            checkOut = userData[0].departure;
          

        }
    } catch (e) {
        console.log(e);
    }
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

    var checkout = new Date(`${checkOut}`);

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}`,
            // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const dispatch = useDispatch();
    return (
        <Box sx={{ paddingTop:2,paddingBottom:2,paddingLeft:1,paddingRight:1 }}>
            <Stack direction="column" spacing={2}>
                <Stack direction="row"
                paddingLeft={2}
                spacing={2}
                justifyContent="space-between"
                alignItems="center">

                <Stack direction="row"
                    paddingLeft={1}
                    spacing={2}
                    justifyContent="flex-start"
                    alignItems="center">

        

                    <Avatar alt="User"   sx={{ width: 24, height: 24 }} {...stringAvatar(name.split(' ')[1])} />
                    <Typography sx={{ fontWeight: 550, fontSize: 14 }} variant="button">{name}</Typography>

                </Stack>
                <Box paddingRight={2}>
                    <Typography  sx={{ fontWeight: 550, fontSize: 14 ,color: "blue"}} variant="button" >
                        {`Booking Id: ${reservationno}`}
                    </Typography>
                </Box>


                        </Stack>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        padding: 1,
                    }}
                >
                    <Box sx={{ paddingX: 2 }}>
                        <Typography sx={{ fontWeight: 500 ,fontSize:14}}>CHECK-IN</Typography>
                        <Typography>{checkin.getDate()}  {day[checkin.getDay()]},{month[checkin.getMonth()]} {checkin.getFullYear()}</Typography>
                        {/* <Typography>From {checkin.getHours()}:{checkin.getMinutes() == 0 ? <>00</> : checkin.getMinutes()} PM</Typography> */}
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box sx={{ paddingX: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500,fontSize:14 }}>
                            CHECK-OUT
                        </Typography>
                        <Typography  >{checkout.getDate()}  {day[checkout.getDay()]},{month[checkin.getMonth()]} {checkout.getFullYear()}</Typography>
                        {/* <Typography>Until {checkout.getHours()}:{checkout.getMinutes() == 0 ? <>00</> : checkout.getMinutes()} AM</Typography> */}
                    </Box>
                </Box>
                <Box
                
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
                 
                
                >
                <Button variant="outlined" color="error" onClick={() => { dispatch(logout()); navigate(`/login/${localStorage.getItem("UnkId")}`) }}>Logout</Button>

                </Box>

            </Stack>

        </Box>
    )
}

export default AccountPreviewCard;