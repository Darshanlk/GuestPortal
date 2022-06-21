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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SignatureCanvas from "react-signature-canvas";
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

import { getManageProfile } from "../reducers/userDataReducers";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import PreviewImage from "../components/PreviewImage";
import { YearPicker } from "@mui/x-date-pickers";
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";

function ManageProfile() {
  const { userData, loading, manageProfileData } = useSelector(
    (state) => state.userDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManageProfile());
  }, []);
  const honorificsArray = ["Dr.", "Jn.", "Mam.", "Mrs.", "Ms.", "Sir", "Sr."];
  const identity = ["Adhar Card", "Driving License", "Passport"];

  const guestImageRef = React.useRef(null);
  const [showGuestImage, setShowGuestImage] = React.useState("");

  const identityImageRef = React.useRef(null);
  const [showIdentityImage, setIdentityGuestImage] = React.useState("");

  const [open, setOpen] = React.useState(false);

  let name = [];
  let identityImage = [];
  let honorifics = [];
  let gender = [];
  let address = [];
  let city = [];
  let state = [];
  let zip = [];
  let guest_country = [];
  let phone = [];
  let email = [];
  let guestIdentity = [];
  let guestIdentityNumber = [];
  let expiryDate = [];
  let issuingCountry = [];
  let identity_city = [];

  let exp_date = null;

  console.log(manageProfileData);
  try {
    if (userData.length > 0) {
      // honorifics = [userData[0].name.split(" ")[0]];cle
      // name = userData[0].name.split(" ")[1];


      manageProfileData.map((user, index) => {
        honorifics[index] = user.salutation
        name[index] = user.name + user.contactunkid;

        gender[index] = user.gender;
        address[index] = user.address;
        city[index] = user.city;
        state[index] = user.state;
        zip[index] = user.zipcode;
        phone[index] =user.mobile;
        email[index] =user.email;
        guest_country[index] =user.country;

        guestIdentity[index] = [user.guestidentity];

        guestIdentityNumber[index] =user.identity_no;
        // exp_date[index] =user.exp_date;
        identity_city[index] =user.identity_city;
      });
    }
  } catch (e) {
    console.log(e);
  }
  // console.log(name,gender,address)
  console.log(name,gender,address,city,state,zip,phone,email,guest_country,guestIdentity,guestIdentityNumber,exp_date,identity_city);

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

// var x =  
//   console.log(typeof formik.values.name ,(formik.values.name)[0])



  // SignatureCanvas
  var sigPad = {};
  const ClearSign = () => {
    sigPad.clear();
  };
  const [sign, setSign] = React.useState(null);
  const GetSign = () => {
    const data = sigPad.toData();
    setSign(data);
    console.log(sign);
  };
  return (
    <Fragment>
      <Box sx={{ marginLeft: 2, marginRight: 2, marginTop: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
            {manageProfileData.map((item,index) => {
              {/* console.log(item.name);
              console.log(item.contactunkid); */}
              return (
                <Card
                  elevation={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 1,
                  }}
                >
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
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
                        <Stack spacing={1} sx={{ marginRight: 5, margin: 2 }}>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography
                              sx={{ marginRight: 5, fontWeight: 600 }}
                            >
                              {item.salutation +
                                "." +
                                item.name +
                                item.contactunkid}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                              <CheckCircleIcon
                                color="primary"
                                sx={{ fontSize: 17 }}
                              />
                              <Typography variant="caption">
                                Approved
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Typography variant="body2">+91 {phone[index]}</Typography>
                          <Divider />
                          <Typography variant="body2">{email[index]}</Typography>
                        </Stack>
                      </Card>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "",
                          marginLeft: 4,
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            fontWeight: "bold",
                            color: "dodgerBlue",
                            paddingY: 2,
                          }}
                          onClick={handleClickOpen}
                        >
                          Edit Profile
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: 4,
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{ fontWeight: "bold", color: "red", paddingY: 2 }}
                        >
                          RemoveProfile
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

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
                      Edit Profile
                    </DialogTitle>
                    <DialogContent>
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
                                  values={(formik.values.guestImage)[index]}
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
                                    value={(formik.values.honorifics)[index]}
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
                                  value={(formik.values.name)[index]}
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
                                  value={(formik.values.address)[index]}
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
                                    value={(formik.values.city)[index]}
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
                                    value={(formik.values.state)[index]}
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
                                    value={(formik.values.zip)[index]}
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
                                  value={(formik.values.phone)[index]}
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
                                  value={(formik.values.email)[index]}
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
                                <Box
                                  sx={{
                                    borderStyle: "solid",
                                    borderWidth: "0.14rem",
                                    borderColor: "black",
                                  }}
                                >
                                  {/*get signature  */}
                                  {/* <CanvasDraw
                                  brushColor="black"
                                  brushRadius={0}
                                  lazyRadius={0}
                                  canvasWidth={150}
                                  canvasHeight={120}
                                ></CanvasDraw> */}
                                  <SignatureCanvas
                                    ref={(ref) => {
                                      sigPad = ref;
                                    }}
                                    canvasProps={{
                                      width: 230,
                                      height: 120,
                                      className: "sigCanvas",
                                    }}
                                  />
                                </Box>

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
                                      onClick={GetSign}
                                    >
                                      Save
                                    </Button>
                                    <Button
                                      size="small"
                                      variant="outlined"
                                      color="error"
                                      onClick={ClearSign}
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
                                    value={(formik.values.guestIdentity)[index]}
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
                                  value={(formik.values.guestIdentityNumber)[index]}
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
                                value={(formik.values.identity_city)[index]}
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
          <Grid
            item
            xs={12}
            md={6}
            sm={11}
            order={{ xs: 2, md: 2 }}
            sx={{ marginTop: 5, marginBottom: 5 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Stack sx={{ width: "80%" }} direction="column" spacing={2}>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Add Guest
                </Button>
                <Button variant="outlined">Send Invite to Member</Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default ManageProfile;
