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
import Map from '../components/Map';
import { Button, Card, CardContent, Divider, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Contact() {
    return (
        <Box sx={{ flexGrow: 1, margin: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={1} >
                        <Item ><Map/></Item>
                        {/* <Map/> */}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={5} sx={{ minWidth: 275 }}>
                        <CardContent>

                            <Typography align='center' sx={{ marginBottom: 3, fontWeight: 'bold' }} variant="h5" component="div">
                                Avalanche Luxury Hotel
                            </Typography>

                            <Box sx={{ padding: 2 }}>
                                <Divider />
                                <Stack spacing={2} sx={{ marginTop: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <LocationOnIcon sx={{ marginRight: 2 }} color='primary' />
                                        <Typography>D-113, International Trade Center, Majura
                                            Gate, Surat, Gujarat 395002</Typography>
                                    </Box>
                                    <Divider />

                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <AddIcCallIcon sx={{ marginRight: 2 }} color='primary' />
                                        <Typography>+9199985-99985</Typography>
                                    </Box>
                                    <Divider />

                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <EmailIcon sx={{ marginRight: 2 }} color='primary' />
                                        <Typography>info@avalanchehotel.com</Typography>
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
        </Box>
    );
}

export default Contact