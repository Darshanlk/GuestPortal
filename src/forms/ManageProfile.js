import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { Grid, Icon, Card, Box, Typography, Divider, TextField, FormControlLabel, Stack, Button } from "@mui/material";
import { Fragment } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from '@mui/material/colors';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogContent from '@mui/material/DialogContent';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function ManageProfile(props) {
    const [value, setValue] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [country, setCountry] = React.useState('');
 
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        setStatus(event.target.value);
    };
    return (
        <Fragment>
            <Box  sx={{ marginLeft: 1,marginRight:1, marginTop: 3 }}>

            <Typography variant="h5" sx={{marginBottom:3}} >Manage Profile</Typography>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}  order={{xs:2,md:1}}>
                    <Card elevation={1} sx={{ display: 'flex', flexDirection: 'column', marginTop: 1 }}>
                        <Typography sx={{ color: blue[500], marginRight: 5, margin: 2 }} >Adult(s)</Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                            <Box sx={{width:190,display:'flex',justifyContent:'center',alignItems:'start'}}>

                            <Typography  variant="button"  sx={{  marginTop: 1.2,}}  >Main Guest</Typography>
                            </Box>
                            <TextField
                                id="filled-read-only-input"
                                onClick={handleClickOpen}
                                size='small'
                                defaultValue="Mrs. JohnDoee"
                                sx={{ marginBottom: 1, marginRight: 1 }}
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EditIcon />
                                        </InputAdornment>
                                    )
                                }}
                                variant="filled"
                            />
                        </Box>
                        <Dialog maxWidth='lg' fullWidth={true} open={open} onClose={handleClose}>
                            <DialogTitle bgcolor={blue[500]} style={{ marginBottom: 5, }}>Edit Profile(Main Guest)
                            </DialogTitle>
                            <DialogContent>
                                {/* <DialogContentText>
                                </DialogContentText> */}
                                <Box>
                                    <Grid container spacing={2} >

                                        <Grid item xs={10} padding={2} sm={10} md={6} lg={6}>
                                            <Typography fullWidth>Guest Information</Typography>
                                            <Divider />

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>
                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Guest Image</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 2 }}>

                                                    <LoadingButton
                                                        size="midium"
                                                        onClick={handleClick}
                                                        endIcon={<CloudUploadIcon />}
                                                        loading={loading}
                                                        loadingPosition="end"
                                                        variant="contained"
                                                        sx={{ marginBottom: 1 }}
                                                    >
                                                        Upload
                                                    </LoadingButton>
                                                    <Typography variant="caption" display="block" gutterBottom sx={{ color: 'red' }}>
                                                        Note: Only image(png/jpg/jpeg) supported. Max Size - 2MB</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Name</Typography>
                                                </Box>
                                                <Box fullWidth sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                                                    <FormControl variant="standard" sx={{ paddingRight: 2, paddingLeft: 2 }}>
                                                        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-standard"
                                                            id="demo-simple-select-standard"
                                                            value={status}
                                                            onChange={handleChange}
                                                            sx={{ maxWidth: 40 }}
                                                        // label="Age"
                                                        >
                                                            <MenuItem value={'Mr'}>Mr.</MenuItem>
                                                            <MenuItem value={'Mrs'}>Mrs.</MenuItem>
                                                            <MenuItem value={'Mam'}>Mam.</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <TextField size='small' fullWidth id="outlined-basic" variant="outlined" placeholder="Your Name" />
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Gender</Typography>
                                                </Box>

                                                <FormControl>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="male" control={<Radio />} label={
                                                            <Typography variant="subtitle2">Male</Typography>
                                                        } />
                                                        <FormControlLabel value="female" control={<Radio />} label={
                                                            <Typography variant="subtitle2">Female</Typography>
                                                        } />
                                                        <FormControlLabel value="other" control={<Radio />} label={
                                                            <Typography variant="subtitle2">Other</Typography>
                                                        } />

                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Address</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>

                                                    <TextField size='small' sx={{
                                                        paddingBottom: 0,
                                                        width:'23ch',
                                                        paddingTop: 0,
                                                    }} label="Address" variant="outlined" />
                                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                        <TextField size='small' sx={{ width: '7ch', marginRight: 1 }} id="outlined-basic" label="City" variant="outlined" />
                                                        <TextField size='small' sx={{ width: '7ch', marginRight: 1 }} id="outlined-basic" label="State" variant="outlined" />
                                                        <TextField size='small' sx={{ width: '7ch' }} id="outlined-basic" label="Zip" variant="outlined" />

                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 150 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Country</Typography>
                                                </Box>

                                                <Grid container>
                                                    <Grid item xs={6}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <CountryDropdown
                                                                value={country}
                                                                onChange={(val) => this.setCountry(val)}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                </Grid>






                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Mobile</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                    <TextField size='small' sx={{ marginRight: 1 }} id="outlined-basic" label="Mobile" variant="outlined" />
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Email Id</Typography>
                                                </Box>
                                                <TextField size='small' sx={{ marginRight: 1 }} id="outlined-basic" label="Email Id" variant="outlined" />

                                            </Box>

                                        </Grid>
                                        <Grid item xs={10} sm={10} md={6} lg={6}>
                                            <Typography fullWidth>Other Information</Typography>
                                            <Divider />

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>
                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Identity Image</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 2 }}>

                                                    <LoadingButton
                                                        size="midium"
                                                        onClick={handleClick}
                                                        endIcon={<CloudUploadIcon />}
                                                        loading={loading}
                                                        loadingPosition="end"
                                                        variant="contained"
                                                        sx={{ marginBottom: 1 }}
                                                    >
                                                        Upload
                                                    </LoadingButton>
                                                    <Typography variant="caption" display="block" gutterBottom sx={{ color: 'red' }}>
                                                        Note: Only image(png/jpg/jpeg) supported. Max Size - 2MB</Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>
                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Guest Signature</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>


                                                    {/* <Box sx={{ borderStyle: 'solid', borderWidth: '0.14rem', borderColor: 'black' }}> */}

                                                         <CanvasDraw brushColor='black'
                                                            brushRadius={0}
                                                            lazyRadius={0} canvasWidth={150} canvasHeight={120} ></CanvasDraw> 

 
                                                    {/* </Box> */}



                                                    <Box sx={{ marginTop: 1.5, display: 'flex', flexDirection: 'column' }}>
                                                        <Stack direction="row" spacing={2}>
                                                            <Button size="small" variant="contained" color="success">
                                                                Save
                                                            </Button>
                                                            <Button size="small" variant="outlined" color="error">
                                                                Clear
                                                            </Button>
                                                        </Stack>
                                                        <Typography variant="caption" display="block" gutterBottom sx={{ color: 'red', marginTop: 0.5, }}>Note: Draw your Signature here and Save</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>
                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Guest Identity</Typography>
                                                </Box>
                                                <Box fullWidth sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'center', marginTop: 2 }}>
                                                    <FormControl variant="standard" sx={{ paddingRight: 2, paddingLeft: 2 }}>
                                                        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-standard"
                                                            id="demo-simple-select-standard"
                                                            // value={status}
                                                            onChange={handleChange}
                                                            sx={{ minWidth: 70, width: 70, marginRight: 2 }}
                                                            label="--select--"
                                                        >
                                                            <MenuItem value={'id1'}>Aadhar card</MenuItem>
                                                            <MenuItem value={'id2'}>Driving Licence</MenuItem>
                                                            <MenuItem value={'id3'}>Passport</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <TextField size='small' fullWidth id="outlined-basic" variant="outlined" placeholder="Enter your id no" />
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>
                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Expiry Date</Typography>
                                                </Box>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Enter Expiry Date"
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField size="small" {...params} />}
                                                    />
                                                </LocalizationProvider>


                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 150 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Issuing Country</Typography>
                                                </Box>


                                                <Grid container>
                                                    <Grid item xs={6}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <CountryDropdown
                                                                value={country}
                                                                onChange={(val) => this.setCountry(val)}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                </Grid>







                                            </Box>


                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: 120 }}>

                                                    <Typography variant="body2" sx={{ marginRight: 2 }}>Issuing City</Typography>
                                                </Box>
                                                <TextField size='small' sx={{ marginRight: 1 }} id="outlined-basic" label="Issuing City" variant="outlined" />

                                            </Box>

                                        </Grid>
                                    </Grid>
                                    <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                    <Box>
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Button size="small" variant="contained">Send Request</Button>
                                            <Button size="small" variant="contained" sx={{ color: 'black', backgroundColor: 'GrayText' }}>Reset</Button>
                                            <Button size="small" variant="contained" sx={{ color: 'black', backgroundColor: 'GrayText' }}>Close</Button>
                                        </Stack>
                                    </Box>
                                   
                                </Box>


                            </DialogContent>
                        </Dialog>
                    </Card>

                </Grid>
                <Grid item xs={12} md={6} order={{xs:1,md:2}}>
                    <Card elevation={1} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row' }}>

                            <AccountCircleIcon sx={{ color: blue[500], marginRight: 5, margin: 2, fontSize: 40 }} />
                            <Typography variant="h6" sx={{ color: blue[500], marginRight: 0, marginTop: 2 }}>Mr.JohnDoe</Typography>
                            <Typography variant="h6" sx={{ margin: 2 }}>Booking # : 100043</Typography>

                        </Card>
                        <Divider></Divider>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
                            <Typography variant="body2" sx={{ marginRight: 2, marginLeft: 2 }}>Check In : 30/05/2022</Typography>
                            <Typography variant="body2">Check Out : 31/05/2022</Typography>
                        </Card>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginBottom: 1 }}>
                            <Typography variant="body2" sx={{ marginLeft: 2 }}>1 Night(s),  King Room,   2 Adult(s)/1 Child(ren)</Typography>
                        </Card>



                    </Card>
                </Grid>
                <Grid item xs={12} md={6}  order={{xs:3,md:3}}>
                    <Card elevation={1} sx={{ display: 'flex', flexDirection: 'column', marginTop: 1 }}>
                        <Typography sx={{ color: blue[500], marginRight: 5, margin: 2 }} >Child(ren)</Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                        <Box sx={{width:190,display:'flex',alignItems:'start',justifyContent:'center'}}>

                            <Typography variant="button"  sx={{ width: '70px', marginTop: 1.2, marginLeft: 2, marginRight: 5 }}>Child1</Typography>
                           </Box>
                            <TextField
                                id="filled-read-only-input"
                                defaultValue="Mrs. JohnDoee"
                                onClick={handleClickOpen}
                                sx={{ marginBottom: 1, marginRight: 1 }}
                                fullWidth
                                size="small"
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EditIcon />
                                        </InputAdornment>
                                    )
                                }}
                                variant="filled"
                            />
                        </Box>
                    </Card>
                </Grid>

            </Grid>
            </Box>

        </Fragment>
    )
}

export default ManageProfile