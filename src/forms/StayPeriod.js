import React from "react";
import { Divider, Typography, Box,TextField, Button } from "@mui/material";
import { Fragment } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function StayPeriod() {
    const [value, setValue] = React.useState(null);

    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: 2 }}>

                <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                   
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Enter Arrival Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField variant="standard" fullWidth size="small" {...params} />}
                        />
                    </LocalizationProvider>


                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Enter Departure Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField variant="standard" fullWidth size="small" {...params} />}
                        />
                    </LocalizationProvider>


                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
                <TextField fullWidth id="standard-basic" label="Night(s)" variant="standard" />
                    </Box>
                <Box  sx={{ marginTop:2, display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                    <Button size="small" variant="outlined">Send Request</Button>
                </Box>
            </Box>
        </Fragment>
    )
}

export default StayPeriod;