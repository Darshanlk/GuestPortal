import {
  Typography,
  Box,
  Grid,
  Divider,
  TextField,
  FormControlLabel,
  Stack,
  Button,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import React, { useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import SignatureCanvas from "react-signature-canvas";

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
  putManageProfile,
  postManageProfile,
} from "../reducers/userDataReducers";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import PreviewImage from "../components/PreviewImage";

import { useNavigate } from "react-router-dom";

import LoadingButton from "@mui/lab/LoadingButton";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

function ManageProfileForm() {

  const honorificsArray = ["Dr.","Mr.", "Jn.", "Mam.", "Mrs.", "Ms.", "Sir", "Sr."];
  const identity = ["Adhar Card", "Driving License", "Passport"];
  const dispatch = useDispatch();
  const guestImageRef = React.useRef(null);
  const [showGuestImage, setShowGuestImage] = React.useState("");
  const navigate = useNavigate();

  const identityImageRef = React.useRef(null);
  const [showIdentityImage, setIdentityGuestImage] = React.useState("");
  const [loadingx, setLoading] = React.useState(false);

  const location = useLocation();

  const [country, setCountry] = React.useState(location.state.country);
  var sigPad = {};
  const ClearSign = () => {
    sigPad.clear();
  };
  const [sign, setSign] = React.useState(null);
  const GetSign = () => {
    const data = sigPad.toData();
    setSign(data);
  };



  const [open, setOpen] = React.useState(true);
  const [alert, setAlert] = React.useState(false);




  const formik = useFormik({
    initialValues: {
      guestImage: location.state.guestimage,
      identityImage: location.state.identityImage,
      guesttranunkid: location.state.guesttranunkid,
      Title: location.state.Title,
      honorifics: location.state.honorifics,
      name: location.state.name,
      gender: location.state.gender,
      address: location.state.address,
      city: location.state.city,
      state: location.state.state,
      zip: location.state.city,
      country: location.state.country,
      phone: location.state.mobile,
      email: location.state.email,
      guestIdentity: location.state.guestIdentity,
      guestIdentityNumber: location.state.guestIdentityNumber,
      expiryDate: location.state.exp_date,
      issuingCountry: location.state.issuingCountry,
      identity_city: location.state.identity_city,
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

      if (!values) {
        alert("fill all the field");
      } else {
  

        if (values.Title == "Edit") {
          dispatch(putManageProfile(values));
          setOpen(true);
          setAlert(true);
        } else {
          // dispatch()
         
          dispatch(postManageProfile(values));
          setOpen(true);
          setAlert(true);
        }
      }
    },
  });

  return (
    <center>

          
      <Box
        maxWidth="lg"
        fullWidth={true}
        // open={open}
        // onClose={handleClose}
        key={""}
        sx={{ boxShadow: 3, marginTop: 5 }}
      >
   
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
                      navigate("/guestdetails");
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
        <Box sx={{ padding: 2, marginTop: 5 }}>
          <Typography variant="h5" style={{ marginBottom: 5 }}>
            {formik.values.Title} Profile
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={10} paddingTop={2} sm={10} md={6} lg={6}>
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                        formik.setFieldValue("guestImage", files[0]);
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
                      <PreviewImage file={formik.values.guestImage} />
                    )}

                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "red" }}
                    >
                      Note: Only image(png/jpg/jpeg) supported. Max Size - 2MB
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                    <FormControl variant="standard" sx={{ paddingRight: 2 }}>
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
                          formik.touched.honorifics && formik.errors.honorifics
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
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.name && formik.errors.name}
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                          <Typography variant="subtitle2">Male</Typography>
                        }
                      />
                      <FormControlLabel
                        name="gender"
                        value="female"
                        control={<Radio />}
                        label={
                          <Typography variant="subtitle2">Female</Typography>
                        }
                      />
                      <FormControlLabel
                        name="gender"
                        value="other"
                        control={<Radio />}
                        label={
                          <Typography variant="subtitle2">Other</Typography>
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
                        formik.touched.address && Boolean(formik.errors.address)
                      }
                      onBlur={formik.handleBlur}
                      helperText={
                        formik.touched.address && formik.errors.address
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
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.city && formik.errors.city}
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
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.state && formik.errors.state}
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
                        error={formik.touched.zip && Boolean(formik.errors.zip)}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.zip && formik.errors.zip}
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.phone && formik.errors.phone}
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.email && formik.errors.email}
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                        formik.setFieldValue("identityImage", files[0]);
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
                      <PreviewImage file={formik.values.identityImage} />
                    )}
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ color: "red" }}
                    >
                      Note: Only image(png/jpg/jpeg) supported. Max Size - 2MB
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
                      Expiry Date
                    </Typography>
                  </Box>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                          <TextField {...params} variant="standard" />
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
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
                      formik.touched.issuingCity && formik.errors.issuingCity
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
                <Button size="small" type="submit" variant="contained">
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
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </center>
  );
}

export default ManageProfileForm;
