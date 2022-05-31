import React from "react";
import { Button, Grid, Box, TextField, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {useFormik} from 'formik'
import * as Yup from 'yup'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';




function Transport() {



 const [value, setValue] = React.useState(new Date());



// for dropdown
  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: theme.palette.text.secondary,
  }));


//validation  formik  and Yup

const formik1 = useFormik({

    initialValues:{
       pickupBy:"",
       desciption:"",
       transportNameNumber:"",
       date:"",
       time:""
       
        
    },
    validationSchema:Yup.object({
        desciption:Yup.string().required("Please enter require transport info. "),
        date:""
    })

})










  return (
    <>
      <Grid container sx={{ justifyContent: "center", paddingY: 2 }}>
        <Grid item xs={12} sm={7}>
          <Typography variant="h5" sx={{ marginLeft: 2 }}>
            Need Transport?
          </Typography>

          <Card sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6">Require Pickup?</Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "",
                height: "50vh",
              }}
            >
              <StyledAccordion sx={{ minHeight: 10 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Pickup By</Typography>
                </AccordionSummary>
                <AccordionDetails>Other</AccordionDetails>
              </StyledAccordion>

              <TextField label="Description" type="text" name="desciption" error="" />
              <TextField
                label="Transport Name and number"
                type="text"
                name="transportNameNumber"
              />
               <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
              <TextField label="Time" type="time" name="time" />
            </Box>
            <Button variant="contained">Submit</Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Card sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6">Require Dropoff?</Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "",
                height: "50vh",
              }}
            >
              <StyledAccordion sx={{ minHeight: 10 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Dropoff By</Typography>
                </AccordionSummary>
                <AccordionDetails>Other</AccordionDetails>
              </StyledAccordion>

              <TextField label="Description" type="text" name="" error="" />
              <TextField
                label="Transport Name and number"
                type="text"
                name=""
              />
              <TextField label="Date" type="date" name="" />
              <TextField label="Time" type="time" name="" />
            </Box>
            <Button variant="contained">Submit</Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Transport;
