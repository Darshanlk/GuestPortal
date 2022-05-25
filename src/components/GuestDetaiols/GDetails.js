import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Card, Divider, Grid, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,

} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function GDetails() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
        >
            <Grid item xs={11} sm={11} md={6}>
                <Box sx={{ width: '100%', marginTop: 5 }}>
                    <Stack spacing={2}>
                        <Paper>
                            <StyledAccordion sx={{ minHeight: 30 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <AccountCircleIcon sx={{ color: blue[500], marginRight: 5, margin: 2, fontSize: 40 }} />
                                        <Stack spacing={1} sx={{ marginRight: 5, margin: 2 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <Typography sx={{ marginRight: 5 }}>John Spencer</Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                    <CheckCircleIcon color='primary' sx={{ fontSize: 17 }} />
                                                    <Typography>Approved</Typography>
                                                </Box>
                                            </Box>
                                            <Divider />
                                            <Typography>+91 98980 98980</Typography>
                                            <Divider />
                                            <Typography>john.spencer123@gmail.com</Typography>
                                        </Stack>
                                    </Card>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={0.1}
                                    >

                                        <Divider />
                                        <Button variant="text">Add Guest</Button>
                                        <Divider />
                                        <Button variant="text">Send Invite to Member</Button>



                                    </Stack>


                                </AccordionDetails>
                            </StyledAccordion>
                        </Paper>
                        <Paper>
                            <StyledAccordion sx={{ minHeight: 30 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <AccountCircleIcon sx={{ color: blue[500], marginRight: 5, margin: 2, fontSize: 40 }} />
                                        <Stack spacing={1} sx={{ marginRight: 5, margin: 2 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <Typography sx={{ marginRight: 5 }}>John Spencer</Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                    <CheckCircleIcon color='primary' sx={{ fontSize: 17 }} />
                                                    <Typography>Approved</Typography>
                                                </Box>
                                            </Box>
                                            <Divider />
                                            <Typography>+91 98980 98980</Typography>
                                            <Divider />
                                            <Typography>john.spencer123@gmail.com</Typography>
                                        </Stack>
                                    </Card>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={0.1}
                                    >

                                        <Divider />
                                        <Button variant="text">Edit Profile</Button>
                                        <Divider />
                                        <Button color="error" variant="text">Remove Profile</Button>



                                    </Stack>


                                </AccordionDetails>
                            </StyledAccordion>
                        </Paper>


                        <Paper>
                            <StyledAccordion sx={{ minHeight: 30 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <AccountCircleIcon sx={{ color: blue[500], marginRight: 5, margin: 2, fontSize: 40 }} />
                                        <Stack spacing={1} sx={{ marginRight: 5, margin: 2 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <Typography sx={{ marginRight: 5 }}>John Spencer</Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                    <CheckCircleIcon color='primary' sx={{ fontSize: 17 }} />
                                                    <Typography>Approved</Typography>
                                                </Box>
                                            </Box>
                                            <Divider />
                                            <Typography>+91 98980 98980</Typography>
                                            <Divider />
                                            <Typography>john.spencer123@gmail.com</Typography>
                                        </Stack>
                                    </Card>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={0.1}
                                    >
                              

                                        <Divider />
                                        <Button variant="text">Add Guest</Button>
                                        <Divider />
                                        <Button variant="text">Send Invite to Member</Button>



                                    </Stack>


                                </AccordionDetails>
                            </StyledAccordion>
                        </Paper>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={11} md={4} sm={11} sx={{ marginTop: 10 }}>
                <Stack direction="column" spacing={2}>

                    <Button variant="outlined" >
                        Add Guest
                    </Button>
                    <Button variant="outlined" >
                        Send Invite to Member
                    </Button>
                </Stack>

            </Grid>
        </Grid>
    )
}
const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
}));

export default GDetails;