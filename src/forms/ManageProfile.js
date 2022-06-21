import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import CircularProgress from "@mui/material/CircularProgress";
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
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

function ManageProfile() {
  const { userData, loading, manageProfileData } = useSelector(
    (state) => state.userDetails
  );

  const navigate = useNavigate();
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
  let guestIdentity = [];
  let guestIdentityNumber = "";
  let expiryDate = "";
  let issuingCountry = "";
  let identity_city = "";

  let exp_date = null;

  console.log(manageProfileData);
  try {
    if (userData.length > 0) {
      // honorifics = [userData[0].name.split(" ")[0]];
      // name = userData[0].name.split(" ")[1];

      //   manageProfileData.map((user, index, key) => {
      //     honorifics = user.salutation;
      //     name = user.name + user.contactunkid;
      //     key = user.contactunkid;
      //     gender = user.gender;
      //     address = user.address;
      //     city = user.city;
      //     state = user.state;
      //     zip = user.zipcode;
      //     phone = user.mobile;
      //     email = user.email;
      //     guest_country = user.country;

      //     guestIdentity = [user.guestidentity];

      //     guestIdentityNumber = user.identity_no;
      //     // exp_date =user.exp_date;
      //     identity_city = user.identity_city;
      //   });
      manageProfileData.map((user, index, key) => {
        honorifics = user.salutation;
        name = user.name + user.contactunkid;
        key = user.contactunkid;
        gender = user.gender;
        address = user.address;
        city = user.city;
        state = user.state;
        zip = user.zipcode;
        phone = user.mobile;
        email = user.email;
        guest_country = user.country;

        guestIdentity = [user.guestidentity];

        guestIdentityNumber = user.identity_no;
        // exp_date =user.exp_date;
        identity_city = user.identity_city;
      });
    }
  } catch (e) {
    console.log(e);
  }
  // console.log(name,gender,address)
  console.log(
    name,
    gender,
    address,
    city,
    state,
    zip,
    phone,
    email,
    guest_country,
    guestIdentity,
    guestIdentityNumber,
    exp_date,
    identity_city
  );

 
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
    <>
      {loading ? (
        (
        <Box sx={{ display: "flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginY:10 }}>
         <CircularProgress />
        </Box>
      )
      ) : (
        <Fragment>
          <Box sx={{ marginLeft: 2, marginRight: 2, marginTop: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                {manageProfileData.map((item) => {
                  {
                    console.log(item);
                  }
                  return (
                    <Card
                      key={item.key}
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
                            <Stack
                              spacing={1}
                              sx={{ marginRight: 5, margin: 2 }}
                            >
                              <Box
                                sx={{ display: "flex", flexDirection: "row" }}
                              >
                                <Typography
                                  sx={{ marginRight: 5, fontWeight: 600 }}
                                >
                                  {item.salutation +
                                    "." +
                                    item.name +
                                    item.contactunkid}
                                </Typography>
                                <Box
                                  sx={{ display: "flex", flexDirection: "row" }}
                                >
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
                              <Typography variant="body2">
                                +91 {phone}
                              </Typography>
                              <Divider />
                              <Typography variant="body2">{email}</Typography>
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
                              onClick={() => {
                                navigate("/manageprofile", {
                                  state: {
                                    Title:"Edit",
                                    identityImage:item.identityImage,
                                    guestimage:item.guestimage,
                                    honorifics: item.salutation,
                                    name: item.name + item.contactunkid,
                                    address: item.address,
                                    gender: item.gender,
                                    city: item.city,
                                    state: item.state,
                                    zip: item.zip,
                                    country: item.country,
                                    mobile: item.mobile,
                                    email: item.email,
                                    guestIdentity:item.guestidentity,
                                    guestIdentityNumber: item.identity_no,
                                    identity_city: item.identity_city,
                                  },
                                });
                              }}
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
                              sx={{
                                fontWeight: "bold",
                                color: "red",
                                paddingY: 2,
                              }}
                            >
                              RemoveProfile
                            </Typography>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
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
                    <Button variant="outlined" 
                     onClick={() => {
                      navigate("/manageprofile", {
                        state: {
                          Title:"Add",
                          identityImage:null,
                          guestimage:null,
                          honorifics: null,
                          name: null,
                          address:null,
                          gender:null ,
                          city:null ,
                          state:null ,
                          zip:null,
                          country:null ,
                          mobile:null ,
                          email: null,
                          guestIdentity:null,
                          guestIdentityNumber:null ,
                          identity_city:null ,
                          expiryDate:null
                        },
                      });
                    }}
                    
                    
                    >
                      Add Guest
                    </Button>
                    <Button variant="outlined">Send Invite to Member</Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fragment>
      )}
    </>
  );
}

export default ManageProfile;
