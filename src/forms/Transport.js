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

import { useFormik } from "formik";
import * as Yup from "yup";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function Transport() {
  const [valueDate, setValueDate] = React.useState(new Date());
  const [valueTime, setValueTime] = React.useState(new Date());

  // for dropdown
  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: theme.palette.text.secondary,
  }));

  //validation  formik  and Yup

  const formik1 = useFormik({
    initialValues: {
      pickupBy1: "",
      desciption1: "",
      transportNameNumber1: "",
      date1: new Date(),
      time1: new Date(),
    },
    validationSchema: Yup.object({
      desciption1: Yup.string().required("Please enter Your Description. "),
      transportNameNumber1: Yup.string().required(
        "Please enter required transport info."
      ),
    }),
    onSubmit: (values) => {
      console.log("formSubmitted", values);
    },
  });

  const formik2 = useFormik({
    initialValues: {
      pickupBy2: "",
      desciption2: "",
      transportNameNumber2: "",
      date2: new Date(),
      time2: new Date(),
    },
    validationSchema: Yup.object({
      desciption2: Yup.string().required("Please enter Your Description. "),
      transportNameNumber2: Yup.string().required(
        "Please enter required transport info."
      ),
    }),
    onSubmit: (values) => {
      console.log("formSubmitted", values);
    },
  });

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
              onSubmit={formik1.handleSubmit}
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

              <TextField
                label="Description"
                type="text"
                name="desciption1"
                onChange={formik1.handleChange}
                error={formik1.touched.desciption1 && Boolean(formik1.errors.desciption1)}
                onBlur={formik1.handleBlur}
                helperText={formik1.touched.desciption1 && formik1.errors.desciption1}
              />
              <TextField
                label="Transport Name and number"
                type="text"
                name="transportNameNumber1"
                onChange={formik1.handleChange}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  name="date1"
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  onChange={formik1.handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  name="time1"
                  label="Time"
                  onChange={formik1.handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Button variant="contained" type="submit" >
              Submit
            </Button>
            </Box>
           
          </Card>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Card sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6">Require Dropoff?</Typography>
            <Box
              component="form"
              onSubmit={formik2.handleSubmit}
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
                name="description2"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Date"
                  openTo="year"
                  views={["year", "month", "day"]}
                  onChange={formik1.onChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Time"
                  value={valueTime}
                  onChange={setValueTime}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Button variant="contained" type="sumbit">
              Submit
            </Button>
              </LocalizationProvider>
            </Box>
            
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Transport;
