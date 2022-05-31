import React from "react";
import {
  Button,
  Grid,
  Box,
  TextField,
  Card,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";

//formik,Yup

import { useFormik } from "formik";
import * as Yup from "yup";

//MUI-extra
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function Transport({ reqtype }) {
  //dummy
  const service = ["Other", "OLA", "UBER", "Hotel-service"];

  //validation  formik  and Yup
  const formik1 = useFormik({
    initialValues: {
      pickupBy: [],
      description1: "",
      transportNameNumber1: "",
      date1: new Date(),
      time1: new Date(),
    },
    validationSchema: Yup.object({
      pickupBy: Yup.string().required("Please select Your transportation"),
      description1: Yup.string().required("Please enter Your Description. "),
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
      dropoffBy: [],
      description2: "",
      transportNameNumber2: "",
      date2: new Date(),
      time2: new Date(),
    },
    validationSchema: Yup.object({
      dropoffBy: Yup.string().required("Please select Your transportation"),
      description2: Yup.string().required("Please enter Your Description. "),
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
      
        {reqtype == "all" ? (
          <>
            <Grid item xs={12} sm={7}>
             
            <Typography variant="h5" sx={{ marginLeft: 2 }}>
                Need Transport ?
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
                    height: "60vh",
                  }}
                >
                  <FormControl>
                    <InputLabel id="demo-multiple-name-label">
                      Pick By{" "}
                    </InputLabel>
                    <Select
                      name="pickupBy"
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      single
                      value={formik1.values.pickupBy}
                      error={
                        formik1.touched.pickupBy &&
                        Boolean(formik1.errors.pickupBy)
                      }
                      onBlur={formik1.handleBlur}
                      helperText={
                        formik1.touched.pickupBy && formik1.errors.pickupBy
                      }
                      onChange={(event) => {
                        const {
                          target: { value },
                        } = event;
                        formik1.setFieldValue("pickupBy", value);
                      }}
                      input={<OutlinedInput label="services" />}
                    >
                      {service.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    label="Description"
                    type="text"
                    name="description1"
                    onChange={formik1.handleChange}
                    error={
                      formik1.touched.description1 &&
                      Boolean(formik1.errors.description1)
                    }
                    onBlur={formik1.handleBlur}
                    helperText={
                      formik1.touched.description1 &&
                      formik1.errors.description1
                    }
                  />
                  <TextField
                    label="Transport Name and number"
                    type="text"
                    name="transportNameNumber1"
                    onChange={formik1.handleChange}
                    error={
                      formik1.touched.transportNameNumber1 &&
                      Boolean(formik1.errors.transportNameNumber1)
                    }
                    onBlur={formik1.handleBlur}
                    helperText={
                      formik1.touched.transportNameNumber1 &&
                      formik1.errors.transportNameNumber1
                    }
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      name="date1"
                      label="Date"
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={formik1.values.date1}
                      onChange={(value) => {
                        formik1.setFieldValue("date1", value);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      required
                    />
                    <TimePicker
                      name="time1"
                      label="Time"
                      value={formik1.values.time1}
                      onChange={(value) => {
                        formik1.setFieldValue("time1", value);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <Box>
                    <Button variant="contained" type="sumbit">
                      Submit
                    </Button>
                  </Box>
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
                    height: "60vh",
                  }}
                >
                  <FormControl>
                    <InputLabel id="demo-multiple-name-label">
                      DropoffBy
                    </InputLabel>
                    <Select
                      name="dropoffBy"
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      single
                      value={formik2.values.dropoffBy}
                      error={
                        formik2.touched.dropoffBy &&
                        Boolean(formik2.errors.dropoffBy)
                      }
                      onBlur={formik2.handleBlur}
                      helperText={
                        formik2.touched.dropoffBy && formik2.errors.dropoffBy
                      }
                      onChange={(event) => {
                        const {
                          target: { value },
                        } = event;
                        formik2.setFieldValue("dropoffBy", value);
                      }}
                      input={<OutlinedInput label="services" />}
                    >
                      {service.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    label="Description"
                    type="text"
                    name="description2"
                    onChange={formik2.handleChange}
                    error={
                      formik2.touched.description2 &&
                      Boolean(formik2.errors.description2)
                    }
                    onBlur={formik2.handleBlur}
                    helperText={
                      formik2.touched.description2 &&
                      formik2.errors.description2
                    }
                  />
                  <TextField
                    label="Transport Name and number"
                    type="text"
                    name="transportNameNumber2"
                    onChange={formik2.handleChange}
                    error={
                      formik2.touched.transportNameNumber2 &&
                      Boolean(formik2.errors.transportNameNumber2)
                    }
                    onBlur={formik2.handleBlur}
                    helperText={
                      formik2.touched.transportNameNumber2 &&
                      formik2.errors.transportNameNumber2
                    }
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label="Date"
                      openTo="year"
                      name="date2"
                      views={["year", "month", "day"]}
                      value={formik2.values.date2}
                      onChange={(value) => {
                        formik2.setFieldValue("date2", value);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Time"
                      name="time2"
                      value={formik2.values.time2}
                      onChange={(value) => {
                        formik2.setFieldValue("time2", value);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />

                    <Box>
                      <Button variant="contained" type="sumbit">
                        Submit
                      </Button>
                    </Box>
                  </LocalizationProvider>
                </Box>
              </Card>
            </Grid>
          </>
        ) : reqtype == "pickup" ? (
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" sx={{ marginLeft: 2 }}>
              Need Transport ?
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
                  height: "60vh",
                }}
              >
                <FormControl>
                  <InputLabel id="demo-multiple-name-label">
                    Pick By{" "}
                  </InputLabel>
                  <Select
                    name="pickupBy"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    single
                    value={formik1.values.pickupBy}
                    error={
                      formik1.touched.pickupBy &&
                      Boolean(formik1.errors.pickupBy)
                    }
                    onBlur={formik1.handleBlur}
                    helperText={
                      formik1.touched.pickupBy && formik1.errors.pickupBy
                    }
                    onChange={(event) => {
                      const {
                        target: { value },
                      } = event;
                      formik1.setFieldValue("pickupBy", value);
                    }}
                    input={<OutlinedInput label="services" />}
                  >
                    {service.map((service) => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  label="Description"
                  type="text"
                  name="description1"
                  onChange={formik1.handleChange}
                  error={
                    formik1.touched.description1 &&
                    Boolean(formik1.errors.description1)
                  }
                  onBlur={formik1.handleBlur}
                  helperText={
                    formik1.touched.description1 && formik1.errors.description1
                  }
                />
                <TextField
                  label="Transport Name and number"
                  type="text"
                  name="transportNameNumber1"
                  onChange={formik1.handleChange}
                  error={
                    formik1.touched.transportNameNumber1 &&
                    Boolean(formik1.errors.transportNameNumber1)
                  }
                  onBlur={formik1.handleBlur}
                  helperText={
                    formik1.touched.transportNameNumber1 &&
                    formik1.errors.transportNameNumber1
                  }
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    name="date1"
                    label="Date"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={formik1.values.date1}
                    onChange={(value) => {
                      formik1.setFieldValue("date1", value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    required
                  />
                  <TimePicker
                    name="time1"
                    label="Time"
                    value={formik1.values.time1}
                    onChange={(value) => {
                      formik1.setFieldValue("time1", value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Box>
                  <Button variant="contained" type="sumbit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ) : (
          <Grid item xs={12} sm={7}>
          <Typography variant="h5" sx={{ marginLeft: 2 }}>
              Need Transport ?
            </Typography>
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
                  height: "60vh",
                }}
              >
                <FormControl>
                  <InputLabel id="demo-multiple-name-label">
                    DropoffBy
                  </InputLabel>
                  <Select
                    name="dropoffBy"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    single
                    value={formik2.values.dropoffBy}
                    error={
                      formik2.touched.dropoffBy &&
                      Boolean(formik2.errors.dropoffBy)
                    }
                    onBlur={formik2.handleBlur}
                    helperText={
                      formik2.touched.dropoffBy && formik2.errors.dropoffBy
                    }
                    onChange={(event) => {
                      const {
                        target: { value },
                      } = event;
                      formik2.setFieldValue("dropoffBy", value);
                    }}
                    input={<OutlinedInput label="services" />}
                  >
                    {service.map((service) => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  label="Description"
                  type="text"
                  name="description2"
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.description2 &&
                    Boolean(formik2.errors.description2)
                  }
                  onBlur={formik2.handleBlur}
                  helperText={
                    formik2.touched.description2 && formik2.errors.description2
                  }
                />
                <TextField
                  label="Transport Name and number"
                  type="text"
                  name="transportNameNumber2"
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.transportNameNumber2 &&
                    Boolean(formik2.errors.transportNameNumber2)
                  }
                  onBlur={formik2.handleBlur}
                  helperText={
                    formik2.touched.transportNameNumber2 &&
                    formik2.errors.transportNameNumber2
                  }
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    label="Date"
                    openTo="year"
                    name="date2"
                    views={["year", "month", "day"]}
                    value={formik2.values.date2}
                    onChange={(value) => {
                      formik2.setFieldValue("date2", value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TimePicker
                    label="Time"
                    name="time2"
                    value={formik2.values.time2}
                    onChange={(value) => {
                      formik2.setFieldValue("time2", value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <Box>
                    <Button variant="contained" type="sumbit">
                      Submit
                    </Button>
                  </Box>
                </LocalizationProvider>
              </Box>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Transport;
