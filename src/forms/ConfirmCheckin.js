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
  Typography,
  Alert,
  Collapse,
  Checkbox,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
//validation
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PhoneBluetoothSpeakerTwoTone } from "@mui/icons-material";
import { fetchFunction } from "../helpers/fetchFunction";

//By Darshan
export default function ConfirmCheckin() {
  //for navigation
  const { userData, loading } = useSelector((state) => state.userDetails);
  const navigate = useNavigate();
  // console.log(userData,'at form')
  //dummy
  let guestName = "";
  let email = "";
  let phone = "";
  let address = "";
  // let guestIdentity = "";
  // let guestIdentityNumber = "";

  try {
    guestName = userData[0].name.split(".")[1];
    // console.log(guestName)
    email = userData[0].notiemail;
    phone = userData[0].mobile;
  } catch (e) {
    console.log(e);
  }

  const honorificsArray = ["Dr.", "Jn.", "Mam.", "Mrs.", "Ms.", "Sir", "Sr."];
  const identity = ["Adhar Card", "Driving License", "Passport"];

  const service = ["Other", "OLA", "UBER", "Hotel-service"];
  // for alert
  const [open, setOpen] = React.useState(true);
  const [alert, setAlert] = React.useState(false);

  //for transport form and checkBox
  const [checked, setChecked] = React.useState({
    checked: false,
    width: "80vh",
  });
  const handleChange = (event) => {
    setChecked({ checked: event.target.checked, width: "120vh" });

    console.log("value", checked);
  };
  //for validation
  const formik = useFormik({
    initialValues: !checked.checked
      ? {
          honorifics: [],
          name: guestName,
          address: "",
          phone: phone,
          email: email,
          guestIdentity: [],
          identityNumber: "",
          time1: new Date(),
          spReq: "",
        }
      : {
          honorifics: [],
          name: guestName,
          address: "",
          phone: phone,
          email: email,
          guestIdentity: [],
          identityNumber: "",
          time1: new Date(),
          spReq: "",
          pickupBy: [],
          description: "",
          transportNameNumber: "",
          date2: new Date(),
          time2: new Date(),
        },
    validationSchema: Yup.object(
      !checked.checked
        ? {
            honorifics: Yup.string().required(
              "Please select Your transportation"
            ),
            name: Yup.string().required("Please enter Your Description. "),
            address: Yup.string().required("Please enter Your Address."),
            phone: Yup.number().required("Please enter Your Phone number"),
            email: Yup.string().required("Please enter your Email."),
            guestIdentity: Yup.string().required("Please SelectYour Identity"),
            identityNumber: Yup.number().required(
              "Please Enter Your Identity Number"
            ),
          }
        : {
            honorifics: Yup.string().required(
              "Please select Your transportation"
            ),
            name: Yup.string().required("Please enter Your Description. "),
            address: Yup.string().required("Please enter Your Address."),
            phone: Yup.number().required("Please enter Your Phone number"),
            email: Yup.string().required("Please enter your Email."),
            guestIdentity: Yup.string().required("Please SelectYour Identity"),
            identityNumber: Yup.number().required(
              "Please Enter Your Identity Number"
            ),
            pickupBy: Yup.string().required(
              "Please select Your transportation"
            ),
            description: Yup.string().required(
              "Please enter Your Description. "
            ),
            transportNameNumber: Yup.string().required(
              "Please enter required transport info."
            ),
          }
    ),
    onSubmit: (values) => {
      console.log("formSubmitted", values);
      console.log("click");
      console.log(typeof values, values, "defewfwfe");
      //send request function

     const result = fetchFunction('/guestportal/confrimCheckIn',values,"post",localStorage.getItem("token"))
 
    
     console.log(result)
      if (!values) {
        alert("fill all the field");
      } else {
        setAlert(true);
      }
    },
  });

  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center", paddingY: 2, padding: 2 }}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h5">Confirm Your Check In</Typography>
          {alert ? (
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                      setAlert(false);
                      navigate("/");
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Your Request is Submited
              </Alert>
            </Collapse>
          ) : null}
          <Card>
            <Box>
              <Typography variant="h5" sx={{ padding: 2 }}>
                Your Details
              </Typography>
              <hr />
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                  backgroundColor: "",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: checked.width,
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Guest Name </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FormControl
                      variant="standard"
                      sx={{ minWidth: 80, marginBottom: 2 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Mr.
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name="honorifics"
                        single
                        value={formik.values.honorifics}
                        onChange={(event) => {
                          const {
                            target: { value },
                          } = event;
                          formik.setFieldValue("honorifics", value);
                        }}
                        error={
                          formik.touched.honorifics &&
                          Boolean(formik.errors.honorifics)
                        }
                        onBlur={formik.handleBlur}
                        helperText={
                          formik.touched.honorifics && formik.errors.honorifics
                        }
                      >
                        {honorificsArray.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      sx={{ marginLeft: 2, width: "100%" }}
                      type="text"
                      variant="standard"
                      name="name"
                      // InputLabelProps={{ shrink: true }}
                      // label="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.name && formik.errors.name}
                      placeholder="Name"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      //   backgroundColor:"red"
                    }}
                  >
                    <TextField
                      sx={{ marginBottom: 2, width: "100%" }}
                      type="text"
                      variant="standard"
                      // label="Address"
                      placeholder="Address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.address && Boolean(formik.errors.address)
                      }
                      onBlur={formik.handleBlur}
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Phone</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      //   backgroundColor:"red"
                    }}
                  >
                    <TextField
                      sx={{ marginBottom: 2, width: "100%" }}
                      type="text"
                      variant="standard"
                      // label="Phone"
                      placeholder="Phone"
                      value={formik.values.phone}
                      name="phone"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      //   backgroundColor:"red"
                    }}
                  >
                    <TextField
                      sx={{ marginBottom: 2, width: "100%" }}
                      type="email"
                      variant="standard"
                      value={formik.values.email}
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Guest Identity </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FormControl
                      variant="standard"
                      sx={{ minWidth: 80, marginBottom: 2 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Identity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name="guestIdentity"
                        single
                        value={formik.values.guestIdentity}
                        onChange={(event) => {
                          const {
                            target: { value },
                          } = event;
                          formik.setFieldValue("guestIdentity", value);
                        }}
                        error={
                          formik.touched.guestIdentity &&
                          Boolean(formik.errors.guestIdentity)
                        }
                        onBlur={formik.handleBlur}
                        helperText={
                          formik.touched.guestIdentity &&
                          formik.errors.guestIdentity
                        }
                      >
                        {identity.map((idn) => (
                          <MenuItem key={idn} value={idn}>
                            {idn}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      sx={{ marginLeft: 2, marginBottom: 2, width: "100%" }}
                      type="text"
                      variant="standard"
                      label="Enter your Identity"
                      value={formik.values.identityNumber}
                      name="identityNumber"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.identityNumber &&
                        Boolean(formik.errors.identityNumber)
                      }
                      onBlur={formik.handleBlur}
                      helperText={
                        formik.touched.identityNumber &&
                        formik.errors.identityNumber
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Est. Arrival Time</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      //   backgroundColor:"red"
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        value={formik.values.time1}
                        onChange={(value) => {
                          formik.setFieldValue("time1", value);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            sx={{ marginBottom: 2, width: "100%" }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingX: 2,
                      alignItems: "center",
                    }}
                  >
                    <Typography>Special Request</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      //   backgroundColor:"red"
                    }}
                  >
                    <TextField
                      sx={{ marginBottom: 2, width: "100%" }}
                      type="text"
                      variant="standard"
                      label="Enter Your request"
                      name="spReq"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>

                {/* CheckBox */}

                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingX: 2,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox onChange={handleChange} />

                    <Typography variant="h5">Require Pickup?</Typography>
                  </Grid>
                </Grid>
                <Grid>
                  <hr />
                </Grid>

                {checked.checked ? (
                  <>
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          paddingX: 2,
                          alignItems: "center",
                        }}
                      >
                        <Typography>Pick Up By</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <FormControl
                          variant="standard"
                          sx={{ width: "100%", marginBottom: 2 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label1">
                            service.
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label1"
                            id="demo-simple-select-standard1"
                            name="pickupBy"
                            single
                            value={formik.values.pickupBy}
                            error={
                              formik.touched.pickupBy &&
                              Boolean(formik.errors.pickupBy)
                            }
                            onBlur={formik.handleBlur}
                            helperText={
                              formik.touched.pickupBy && formik.errors.pickupBy
                            }
                            onChange={(event) => {
                              const {
                                target: { value },
                              } = event;
                              formik.setFieldValue("pickupBy", value);
                            }}
                          >
                            {service.map((service) => (
                              <MenuItem key={service} value={service}>
                                {service}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          paddingX: 2,
                          alignItems: "center",
                        }}
                      >
                        <Typography>Description</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",

                          //   backgroundColor:"red"
                        }}
                      >
                        <TextField
                          sx={{ marginBottom: 2, width: "100%" }}
                          type="text"
                          variant="standard"
                          label="Description"
                          name="description"
                          onChange={formik.handleChange}
                          error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                          }
                          onBlur={formik.handleBlur}
                          helperText={
                            formik.touched.description &&
                            formik.errors.description
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          paddingX: 2,
                          alignItems: "center",
                        }}
                      >
                        <Typography>Transport Name and Number</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",

                          //   backgroundColor:"red"
                        }}
                      >
                        <TextField
                          sx={{ marginBottom: 2, width: "100%" }}
                          type="text"
                          variant="standard"
                          label="Enter Transport Name and Number"
                          name="transportNameNumber"
                          onChange={formik.handleChange}
                          error={
                            formik.touched.transportNameNumber &&
                            Boolean(formik.errors.transportNameNumber)
                          }
                          onBlur={formik.handleBlur}
                          helperText={
                            formik.touched.transportNameNumber &&
                            formik.errors.transportNameNumber
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          paddingX: 2,
                          alignItems: "center",
                        }}
                      >
                        <Typography>Pick Up Date</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",

                          //   backgroundColor:"red"
                        }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            disableFuture
                            name="date2"
                            label="Date"
                            openTo="year"
                            views={["year", "month", "day"]}
                            value={formik.values.date1}
                            onChange={(value) => {
                              formik.setFieldValue("date2", value);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                sx={{ marginBottom: 2, width: "100%" }}
                              />
                            )}
                            required
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          paddingX: 2,
                          alignItems: "center",
                        }}
                      >
                        <Typography>Pick Up Time</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",

                          //   backgroundColor:"red"
                        }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <TimePicker
                            name="time2"
                            value={formik.values.time2}
                            onChange={(value) => {
                              formik.setFieldValue("time2", value);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                sx={{ marginBottom: 2, width: "100%" }}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </>
                ) : null}

                {/* Button */}
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      padding: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ width: "100%" }}
                      type="submit"
                    >
                      Send Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
