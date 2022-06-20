import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import {
  Grid,
  Icon,
  Card,
  Box,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Stack,
  Button,
} from "@mui/material";
import { Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { blue } from "@mui/material/colors";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton";
import DialogContent from "@mui/material/DialogContent";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Container } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";

import {
  getManageProfile,
  postManageProfile,
} from "../reducers/userDataReducers";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import PreviewImage from "../components/PreviewImage";
import { YearPicker } from "@mui/x-date-pickers";
// import { useDispatch, useSelector } from "react-redux";

function ManageProfile() {
  const { userData, loading, manageProfileData} = useSelector(
    (state) => state.userDetails
  );

  console.log(manageProfileData)
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const honorificsArray = ["Dr.", "Jn.", "Mam.", "Mrs.", "Ms.", "Sir", "Sr."];
  const identity = ["Adhar Card", "Driving License", "Passport"];

  //     const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
  //    const validateImageType = (value) => {
  //       if(value) {
  //         let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]
  //         return SUPPORTED_FORMATS.includes(type)
  //       }
  //     }

  //       Yup.mixed() .test('fileSize', "File is too large", value => value.size <= FILE_SIZE) .test('fileType', "Your Error Message", value => SUPPORTED_FORMATS.includes(value.type) )

  const guestImageRef = React.useRef(null);
  const [showGuestImage, setShowGuestImage] = React.useState("");

  const identityImageRef = React.useRef(null);
  const [showIdentityImage, setIdentityGuestImage] = React.useState("");

  const [open, setOpen] = React.useState(false);

  let name = "";
  let identityImage = "";
  let honorifics = [];
  let gender = "";
  let address = "";
  let city = "";
  let state = "";
  let zip = "";
  let guest_country = "";
  let phone = "";
  let email = "";
  let guestIdentity = "";
  let guestIdentityNumber = "";
  let expiryDate = "";
  let issuingCountry = "";
  let identity_city = "";
  let no_adult = "";
  let no_child = "";
  let reservationno = "";
  let checkin = "";
  let checkout = "";
  let nights = "";
  let rooms = "";
  let exp_date = null;

  try {
    // console.log(manageProfileData[0]);
    if (userData.length > 0) {
      honorifics = [userData[0].name.split(" ")[0]]
      name = userData[0].name.split(" ")[1];
      no_adult = [userData[0].adult];
      no_child = [userData[0].child];
      reservationno = userData[0].reservationno;
      rooms = [userData[0].Roomno];
      checkin = userData[0].arrival;
      checkout = userData[0].departure;
      nights = userData[0].noofdays;
      gender = manageProfileData[0].gender;
      address = manageProfileData[0].address;
      city = manageProfileData[0].city;
      state = manageProfileData[0].state;
      zip = manageProfileData[0].zipcode;
      phone = manageProfileData[0].mobile;
      email = manageProfileData[0].email;
      guest_country = manageProfileData[0].country;
      guestIdentity = [manageProfileData[0].guestidentity];
      guestIdentityNumber = manageProfileData[0].identity_no;
      exp_date = manageProfileData[0].exp_date;
      identity_city = manageProfileData[0].identity_city;
    }
  } catch (e) {
    console.log(e);
  }
  const [country, setCountry] = React.useState(guest_country);
  //formil and Yup

  const formik = useFormik({
    initialValues: {
      guestImage: "",
      identityImage: "",
      honorifics: honorifics,
      name: name,
      gender: gender,
      address: address,
      city: city,
      state: state,
      zip: zip,
      country: guest_country,
      phone: phone,
      email: email,
      guestIdentity: guestIdentity,
      guestIdentityNumber: guestIdentityNumber,
      expiryDate: exp_date,
      issuingCountry: issuingCountry,
      identity_city: identity_city,
    },
    validationSchema: Yup.object({
      honorifics: Yup.string().required("Please select Your transportation"),
      name: Yup.string().required("Please enter Your Description. "),
      gender: Yup.string().required("Please select Your gender"),
      address: Yup.string().required("Please enter Your Address."),
      city: Yup.string().required("Please enter Your city"),
      state: Yup.string().required("Please enter Your state"),
      zip: Yup.string().required("please enter  your city  zipcode"),
      phone: Yup.number().required("Please enter Your Phone number"),
      email: Yup.string().required("Please enter your Email."),
      guestIdentity: Yup.string().required("Please SelectYour Identity"),
      guestIdentityNumber: Yup.number().required(
        "Please Enter Your Identity Number"
      ),
    }),
    onSubmit: (values) => {
      console.log("formSubmitted", typeof values);

      if (!values) {
        alert("fill all the field");
      } else {
       
        console.log("submiit")

        dispatch(postManageProfile(values));

        setOpen(false);
      }
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [loadingx, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };
  return (
    <Fragment>
      <Box sx={{ marginLeft: 1, marginRight: 1, marginTop: 3 }}>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Manage Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            {no_adult.map(() => {
              return (
                <Card
                  elevation={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 1,
                  }}
                >
                  <Typography
                    sx={{ color: blue[500], marginRight: 5, margin: 2 }}
                  >
                    Adult(s)
                  </Typography>
                  <Divider />
                  <Box
                    sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}
                  >
                    <Box
                      sx={{
                        width: 190,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <Typography variant="button" sx={{ marginTop: 1.2 }}>
                        Main Guest
                      </Typography>
                    </Box>
                    <TextField
                      id="filled-read-only-input"
                      onClick={handleClickOpen}
                      size="small"
                      defaultValue={`${name}`}
                      sx={{ marginBottom: 1, marginRight: 1 }}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="start">
                            <EditIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </Box>
                  <Dialog
                    maxWidth="lg"
                    fullWidth={true}
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle
                      bgcolor={blue[500]}
                      style={{ marginBottom: 5 }}
                    >
                      Edit Profile(Main Guest)
                    </DialogTitle>
                    <DialogContent>
                      {/* <DialogContentText>
                                </DialogContentText> */}
                      <Box component="form" onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={10}
                            paddingTop={2}
                            sm={10}
                            md={6}
                            lg={6}
                          >
                            <Typography fullWidth>Guest Information</Typography>
                            <Divider />

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Guest Image
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  marginTop: 2,
                                }}
                              >
                                <input
                                  ref={guestImageRef}
                                  type="file"
                                  name="guestImage"
                                  values={formik.values.guestImage}
                                  onChange={(event) => {
                                    const {
                                      target: { files },
                                    } = event;
                                    formik.setFieldValue(
                                      "guestImage",
                                      files[0]
                                    );
                                    setShowGuestImage(files[0]);
                                  }}
                                  hidden
                                />

                                <LoadingButton
                                  size="midium"
                                  onClick={() => {
                                    setOpen(true);
                                    guestImageRef.current.click();
                                  }}
                                  endIcon={<CloudUploadIcon />}
                                  loading={loadingx}
                                  loadingPosition="end"
                                  variant="contained"
                                  sx={{ marginBottom: 1 }}
                                >
                                  Upload
                                </LoadingButton>
                                {formik.values.guestImage == "" ? (
                                  " "
                                ) : (
                                  <PreviewImage
                                    file={formik.values.guestImage}
                                  />
                                )}

                                <Typography
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                  sx={{ color: "red" }}
                                >
                                  Note: Only image(png/jpg/jpeg) supported. Max
                                  Size - 2MB
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Name
                                </Typography>
                              </Box>

                              <Box
                                fullWidth
                                sx={{
                                  width: "70%",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "start",
                                  marginTop: 2,
                                }}
                              >
                                <FormControl
                                  variant="standard"
                                  sx={{ paddingRight: 2 }}
                                >
                                  <Select
                                    labelId="demo-simple-select-standard"
                                    id="demo-simple-select-standard"
                                    single
                                    value={formik.values.honorifics}
                                    name="honorifics"
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
                                      formik.touched.honorifics &&
                                      formik.errors.honorifics
                                    }
                                    sx={{ maxWidth: 40 }}
                                  >
                                    {honorificsArray.map((service) => (
                                      <MenuItem key={service} value={service}>
                                        {service}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                                <TextField
                                  name="name"
                                  value={formik.values.name}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.name &&
                                    Boolean(formik.errors.name)
                                  }
                                  onBlur={formik.handleBlur}
                                  helperText={
                                    formik.touched.name && formik.errors.name
                                  }
                                  size="small"
                                  fullWidth
                                  variant="standard"
                                  placeholder="Your Name"
                                  sx={{ marginTop: 0.5 }}
                                />
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Gender
                                </Typography>
                              </Box>

                              <FormControl>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                  onChange={formik.handleChange}
                                >
                                  <FormControlLabel
                                    name="gender"
                                    value="male"
                                    control={<Radio />}
                                    label={
                                      <Typography variant="subtitle2">
                                        Male
                                      </Typography>
                                    }
                                  />
                                  <FormControlLabel
                                    name="gender"
                                    value="female"
                                    control={<Radio />}
                                    label={
                                      <Typography variant="subtitle2">
                                        Female
                                      </Typography>
                                    }
                                  />
                                  <FormControlLabel
                                    name="gender"
                                    value="other"
                                    control={<Radio />}
                                    label={
                                      <Typography variant="subtitle2">
                                        Other
                                      </Typography>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2, marginBottom: 4 }}
                                >
                                  Address
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: "70%",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "start",
                                }}
                              >
                                <TextField
                                  name="address"
                                  value={formik.values.address}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.address &&
                                    Boolean(formik.errors.address)
                                  }
                                  onBlur={formik.handleBlur}
                                  helperText={
                                    formik.touched.address &&
                                    formik.errors.address
                                  }
                                  fullWidth
                                  size="small"
                                  sx={{
                                    paddingBottom: 0,

                                    paddingTop: 0,
                                  }}
                                  placeholder="Address"
                                  variant="standard"
                                />
                                <Box
                                  sx={{
                                    width: "100%",
                                    marginTop: 1,
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <TextField
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.city &&
                                      Boolean(formik.errors.city)
                                    }
                                    onBlur={formik.handleBlur}
                                    helperText={
                                      formik.touched.city && formik.errors.city
                                    }
                                    size="small"
                                    sx={{ width: "33%", marginRight: 1 }}
                                    id="outlined-basic"
                                    placeholder="City"
                                    variant="standard"
                                  />
                                  <TextField
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.state &&
                                      Boolean(formik.errors.state)
                                    }
                                    onBlur={formik.handleBlur}
                                    helperText={
                                      formik.touched.state &&
                                      formik.errors.state
                                    }
                                    size="small"
                                    sx={{ width: "33%", marginRight: 1 }}
                                    id="outlined-basic"
                                    placeholder="State"
                                    variant="standard"
                                  />
                                  <TextField
                                    name="zip"
                                    value={formik.values.zip}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.zip &&
                                      Boolean(formik.errors.zip)
                                    }
                                    onBlur={formik.handleBlur}
                                    helperText={
                                      formik.touched.zip && formik.errors.zip
                                    }
                                    size="small"
                                    sx={{ width: "33%" }}
                                    id="outlined-basic"
                                    placeholder="Zip"
                                    variant="standard"
                                  />
                                </Box>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 150,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Country
                                </Typography>
                              </Box>

                              <Grid container>
                                <Grid item xs={12}>
                                  <Box
                                    sx={{
                                      width: "70%",
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <CountryDropdown
                                      value={country}
                                      onChange={(val) => setCountry(val)}
                                    />
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Mobile
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: "70%",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  name="phone"
                                  value={formik.values.phone}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.phone &&
                                    Boolean(formik.errors.phone)
                                  }
                                  onBlur={formik.handleBlur}
                                  helperText={
                                    formik.touched.phone && formik.errors.phone
                                  }
                                  size="small"
                                  sx={{ marginRight: 1 }}
                                  id="outlined-basic"
                                  placeholder="Mobile"
                                  variant="standard"
                                />
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Email Id
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: "70%",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  type="emai"
                                  value={formik.values.email}
                                  size="small"
                                  sx={{ marginRight: 1 }}
                                  id="outlined-basic"
                                  placeholder="Email Id"
                                  variant="standard"
                                  name="email"
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                  }
                                  onBlur={formik.handleBlur}
                                  helperText={
                                    formik.touched.email && formik.errors.email
                                  }
                                />
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={10} sm={10} md={6} lg={6}>
                            <Typography fullWidth>Other Information</Typography>
                            <Divider />

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Identity Image
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  marginTop: 2,
                                }}
                              >
                                <input
                                  ref={identityImageRef}
                                  type="file"
                                  name="identityImage"
                                  values={formik.values.identityImage}
                                  onChange={(event) => {
                                    const {
                                      target: { files },
                                    } = event;
                                    formik.setFieldValue(
                                      "identityImage",
                                      files[0]
                                    );
                                    setIdentityGuestImage(files[0]);
                                  }}
                                  hidden
                                />

                                <LoadingButton
                                  size="midium"
                                  onClick={() => {
                                    setOpen(true);
                                    identityImageRef.current.click();
                                  }}
                                  endIcon={<CloudUploadIcon />}
                                  loading={loadingx}
                                  loadingPosition="end"
                                  variant="contained"
                                  sx={{ marginBottom: 1 }}
                                >
                                  Upload
                                </LoadingButton>
                                {formik.values.identityImage == "" ? (
                                  " "
                                ) : (
                                  <PreviewImage
                                    file={formik.values.identityImage}
                                  />
                                )}
                                <Typography
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                  sx={{ color: "red" }}
                                >
                                  Note: Only image(png/jpg/jpeg) supported. Max
                                  Size - 2MB
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Guest Signature
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {/* <Box sx={{ borderStyle: 'solid', borderWidth: '0.14rem', borderColor: 'black' }}> */}

                                {/*get signature  */}
                                {/* <CanvasDraw
                                  brushColor="black"
                                  brushRadius={0}
                                  lazyRadius={0}
                                  canvasWidth={150}
                                  canvasHeight={120}
                                ></CanvasDraw> */}

                                {/* </Box> */}

                                <Box
                                  sx={{
                                    marginTop: 1.5,
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Stack direction="row" spacing={2}>
                                    <Button
                                      size="small"
                                      variant="contained"
                                      color="success"
                                    >
                                      Save
                                    </Button>
                                    <Button
                                      size="small"
                                      variant="outlined"
                                      color="error"
                                    >
                                      Clear
                                    </Button>
                                  </Stack>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                    sx={{ color: "red", marginTop: 0.5 }}
                                  >
                                    Note: Draw your Signature here and Save
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Guest Identity
                                </Typography>
                              </Box>
                              <Box
                                fullWidth
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  marginTop: 2,
                                }}
                              >
                                <FormControl
                                  variant="standard"
                                  sx={{ paddingRight: 2, paddingLeft: 2 }}
                                >
                                  {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                  <Select
                                    labelId="demo-simple-select-standard"
                                    id="demo-simple-select-standard"
                                    // value={status}

                                    sx={{
                                      minWidth: 30,
                                      width: 70,
                                      marginRight: 2,
                                      marginBottom: 5,
                                    }}
                                    label="--select--"
                                    name="guestIdentity"
                                    value={formik.values.guestIdentity}
                                    onChange={(event) => {
                                      const {
                                        target: { value },
                                      } = event;
                                      formik.setFieldValue(
                                        "guestIdentity",
                                        value
                                      );
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
                                    {identity.map((service) => (
                                      <MenuItem key={service} value={service}>
                                        {service}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                                <TextField
                                  name="guestIdentityNumber"
                                  value={formik.values.guestIdentityNumber}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.guestIdentityNumber &&
                                    Boolean(formik.errors.guestIdentityNumber)
                                  }
                                  onBlur={formik.handleBlur}
                                  helperText={
                                    formik.touched.guestIdentityNumber &&
                                    formik.errors.guestIdentityNumber
                                  }
                                  size="small"
                                  fullWidth
                                  id="outlined-basic"
                                  variant="standard"
                                  placeholder="Enter your id no"
                                />
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Expiry Date
                                </Typography>
                              </Box>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                >
                                  <DatePicker
                                    name="expiryDate"
                                    label="Date"
                                    openTo="year"
                                    views={["year", "month", "day"]}
                                    value={formik.values.expiryDate}
                                    onChange={(value) => {
                                      formik.setFieldValue("expiryDate", value);
                                    }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        variant="standard"
                                      />
                                    )}
                                  />
                                </LocalizationProvider>
                              </LocalizationProvider>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 150,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Issuing Country
                                </Typography>
                              </Box>

                              <Grid container>
                                <Grid item xs={6}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <CountryDropdown
                                      value={country}
                                      onChange={(val) => setCountry(val)}
                                    />
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  justifyContent: "center",
                                  width: 120,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ marginRight: 2 }}
                                >
                                  Issuing City
                                </Typography>
                              </Box>
                              <TextField
                                name="identity_city"
                                value={formik.values.identity_city}
                                onChange={formik.handleChange}
                                error={
                                  formik.touched.issuingCity &&
                                  Boolean(formik.errors.issuingCity)
                                }
                                onBlur={formik.handleBlur}
                                helperText={
                                  formik.touched.issuingCity &&
                                  formik.errors.issuingCity
                                }
                                size="small"
                                sx={{ marginRight: 1 }}
                                id="outlined-basic"
                                placeholder="Issuing City"
                                variant="standard"
                              />
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
                            <Button
                              size="small"
                              type="submit"
                              variant="contained"
                            >
                              Send Request
                            </Button>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                color: "black",
                                backgroundColor: "GrayText",
                              }}
                              type="reset"
                            >
                              Reset
                            </Button>
                            {/* <Button
                              size="small"
                              variant="contained"
                              sx={{
                                color: "black",
                                backgroundColor: "GrayText",
                              }}
                            >
                              Close
                            </Button> */}
                          </Stack>
                        </Box>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Card
              elevation={1}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Card
                elevation={0}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <AccountCircleIcon
                  sx={{
                    color: blue[500],
                    marginRight: 5,
                    margin: 2,
                    fontSize: 40,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: blue[500], marginRight: 0, marginTop: 2 }}
                >
                  {name}
                </Typography>
                <Typography variant="h6" sx={{ margin: 2 }}>
                  Booking # : {reservationno}
                </Typography>
              </Card>
              <Divider></Divider>
              <Card
                elevation={0}
                sx={{ display: "flex", flexDirection: "row", marginTop: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{ marginRight: 2, marginLeft: 2 }}
                >
                  Check In : {checkin}
                </Typography>
                <Typography variant="body2">Check Out : {checkout} </Typography>
              </Card>
              <Card
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 1,
                  marginBottom: 1,
                }}
              >
                <Typography variant="body2" sx={{ marginLeft: 2 }}>
                  {nights} Night(s), {rooms}, {no_adult} Adult(s) / {no_child}{" "}
                  Child(ren)
                </Typography>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 3, md: 3 }}>
            {no_child.map((item) => {
              return (
                <Card
                  elevation={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 1,
                  }}
                >
                  <Typography
                    sx={{ color: blue[500], marginRight: 5, margin: 2 }}
                  >
                    Child(ren)
                  </Typography>
                  <Divider />
                  <Box
                    sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}
                  >
                    <Box
                      sx={{
                        width: 190,
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          width: "70px",
                          marginTop: 1.2,
                          marginLeft: 2,
                          marginRight: 5,
                        }}
                      >
                        Child
                      </Typography>
                    </Box>
                    <TextField
                      id="filled-read-only-input"
                      defaultValue={`${name}'s child`}
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
                        ),
                      }}
                      variant="filled"
                    />
                  </Box>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default ManageProfile;
