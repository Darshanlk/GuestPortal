import React from "react";
import { Grid, Icon, Card, Box, Typography, Divider, TextField, FormControlLabel } from "@mui/material";
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
function ManageProfile() {
    const [open, setOpen] = React.useState(false);

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
            <Grid container spacing={2} sx={{ marginLeft: 1, marginTop: 1 }}>

                <Grid item xs={6}>
                    <Card elevation={1} sx={{ display: 'flex', flexDirection: 'column', marginTop: 1 }}>
                        <Typography sx={{ color: blue[500], marginRight: 5, margin: 2 }} >Adult(s)</Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                            <Typography sx={{ width: '70px', marginTop: 1.2, marginLeft: 2, marginRight: 5 }}>Main Guest</Typography>
                            <TextField
                                id="filled-read-only-input"
                                onClick={handleClickOpen}
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
                        <Dialog maxWidth='xl' fullWidth={true} open={open} onClose={handleClose}>
                            <DialogTitle style={{ fontWeight: 'bold' }}>Edit Profile(Main Guest)
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                </DialogContentText>
                                <Box>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6} padding={2}>
                                            <Typography fullWidth>Guest Information</Typography>
                                            <Divider />
                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                                    <Typography sx={{ marginRight: 2 }}>Guest Image</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 2 }}>

                                                    <LoadingButton
                                                        size="midium"
                                                        onClick={handleClick}
                                                        endIcon={<CloudUploadIcon />}
                                                        loading={loading}
                                                        loadingPosition="end"
                                                        variant="contained"
                                                    >
                                                        Upload
                                                    </LoadingButton>
                                                    <Typography variant="caption" display="block" gutterBottom sx={{ color: 'red' }}> UploadNo file chosen
                                                        Note: Only image(png/jpg/jpeg) supported. Max Size - 2MB</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                                    <Typography sx={{ marginRight: 2 }}>Name</Typography>
                                                </Box>
                                                <Box fullWidth sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                                                    <FormControl variant="standard" sx={{ minWidth: 120, paddingRight: 5, paddingLeft: 2 }}>
                                                        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-standard"
                                                            id="demo-simple-select-standard"
                                                            value={status}
                                                            onChange={handleChange}
                                                        // label="Age"
                                                        >
                                                            <MenuItem value={'Mr'}>Mr.</MenuItem>
                                                            <MenuItem value={'Mrs'}>Mrs.</MenuItem>
                                                            <MenuItem value={'Mam'}>Mam.</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                                    <Typography sx={{ marginRight: 2 }}>Gender</Typography>
                                                </Box>

                                                <FormControl>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                        <FormControlLabel value="other" control={<Radio />} label="Other" />

                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                                    <Typography sx={{ marginRight: 2 }}>Address</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'start', justifyContent: 'start' }}>

                                                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                                                    <Box sx={{marginTop:1  , display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <TextField sx={{width:'15ch',marginRight:1}} id="outlined-basic" label="City" variant="outlined" />
                                                    <TextField sx={{width:'15ch',marginRight:1}} id="outlined-basic" label="State" variant="outlined" />
                                                    <TextField sx={{width:'15ch'}} id="outlined-basic" label="Zip" variant="outlined" />

                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography fullWidth>Other Information</Typography>
                                            <Divider />

                                        </Grid>
                                    </Grid>
                                </Box>

                            </DialogContent>
                        </Dialog>
                    </Card>

                </Grid>
                <Grid item xs={6}>
                    <Card elevation={1} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row' }}>

                            <AccountCircleIcon sx={{ color: blue[500], marginRight: 5, margin: 2, fontSize: 40 }} />
                            <Typography variant="h6" sx={{ color: blue[500], marginRight: 0, marginTop: 2 }}>Mr.JohnDoe</Typography>
                            <Typography variant="h6" sx={{ margin: 2 }}>Booking # : 100043</Typography>

                        </Card>
                        <Divider></Divider>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
                            <Typography sx={{ marginRight: 2, marginLeft: 2 }}>Check In : 30/05/2022</Typography>
                            <Typography>Check Out : 31/05/2022</Typography>
                        </Card>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginBottom: 1 }}>
                            <Typography sx={{ marginLeft: 2 }}>1 Night(s),  King Room,   2 Adult(s)/1 Child(ren)</Typography>
                        </Card>



                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card elevation={1} sx={{ display: 'flex', flexDirection: 'column', marginTop: 1 }}>
                        <Typography sx={{ color: blue[500], marginRight: 5, margin: 2 }} >Child(ren)</Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                            <Typography sx={{ width: '70px', marginTop: 1.2, marginLeft: 2, marginRight: 5 }}>Child1</Typography>
                            <TextField
                                id="filled-read-only-input"
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
                    </Card>
                </Grid>

            </Grid>
        </Fragment>
    )
}

export default ManageProfile