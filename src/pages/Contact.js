import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch, useSelector } from "react-redux";
import Map from '../components/Map';
import { Button, Card, CardContent, Divider, Typography } from '@mui/material';
import { getMapData } from '../reducers/mapDataReducers';
import { useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Contact() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMapData());
    }, [])
    const { mapData, loading } = useSelector((state) => state.mapData)

    let email = "darshan.mistry@ezeetechnosys.com"
    let address = "near majura gate surat"
    let phone = "+9199985-99985"
    let lat = 23.2346855
    let lng = 72.6296842
    let hotel_name="Hotel Darshan"

    try {
        if (mapData.length > 0) {
            email = mapData[0][0].email
            address = `${mapData[0][0].address1}, ${mapData[0][0].address2}, ${mapData[0][0].city} ${mapData[0][0].zipcode}, ${mapData[0][0].state}, ${mapData[0][0].country_name}`
            hotel_name = mapData[0][0].name
            if (mapData[0][0].phone != null)
                phone = mapData[0][0].phone
            if (mapData[0][0].latitude != "")
                lat = mapData[0][0].latitude
            if (mapData[0][0].longitude != "")
                lng = mapData[0][0].longitude
        }
    } catch (e) {
        console.log(e);
    }
return (
        <div>
            {loading ? (
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginY: 10 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ flexGrow: 1, margin: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Paper elevation={1} >
                                <Item ><Map lat={lat} lng={lng} /></Item>
                                {/* <Map/> */}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card elevation={1} sx={{ minWidth: 275 }}>
                                <CardContent>
                                <Typography align='center' sx={{ marginBottom: 3, fontWeight: 'bold' }} variant="h5" component="div">
                                        Hotel Harsh
                                    </Typography>

                                 

                                    {/* <Typography align='center' sx={{ marginBottom: 3, fontWeight: 'bold' }} variant="h5" component="div">
                                        {name}
                                    </Typography> */}


                                    <Box sx={{ padding: 2 }}>
                                        <Divider />
                                        <Stack spacing={2} sx={{ marginTop: 2 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <LocationOnIcon sx={{ marginRight: 2 }} color='primary' />
                                                <Typography>{address}</Typography>
                                            </Box>
                                            <Divider />

                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <AddIcCallIcon sx={{ marginRight: 2 }} color='primary' />
                                                <Typography>{phone}</Typography>
                                            </Box>
                                            <Divider />

                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <EmailIcon sx={{ marginRight: 2 }} color='primary' />
            
                                                <Typography>harsh.patel@ezeetechnosys.com
</Typography>
                                                {/* <Typography>{email}</Typography> */}
                                            </Box>
                                            <Divider />

                                            <Box>
                                                <Stack direction="row" spacing={2}>
                                                    <Button variant="outlined" startIcon={<SendIcon />}>
                                                        Get Directions
                                                    </Button>
                                                    <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                                                        WhatsApp
                                                    </Button>
                                                </Stack>
                                            </Box>

                                        </Stack>
                                    </Box>


                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Box>)}
        </div>
    );
}

export default Contact
