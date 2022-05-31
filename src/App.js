import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LogoutIcon from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import BeenhereRoundedIcon from "@mui/icons-material/BeenhereRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Badge from "@mui/material/Badge";
import GDetails from "./pages/GDetails";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotFound from "./pages/NotFound";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Login from "./pages/Login";
import Transport from "./forms/Transport";

function App() {
  const [value, setValue] = React.useState();
  const [title, setTitle] = React.useState();
  const [drawer, setDrawer] = React.useState(false);
  const [navTitle, setNavTitle] = React.useState("0");

  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    let path = location.pathname;
    if (path === "/") {
      setValue(0);
      setNavTitle("Avalanche Luxury Hotel");
    } else if (path === "/booking") {
      setValue(1);
      setNavTitle("Booking Details");
    } else if (path === "/guestdetails") {
      setValue(2);
      setNavTitle("Guest Details");
    } else if (path === "/contact") {
      setValue(3);
      setNavTitle("Contact");
    } else {
      setValue(-1);
    }
  });

  React.useEffect(() => {
    let path = location.pathname;
    if (path === "/") setTitle("Avalanche Luxury Hotel");
    else if (path === "/booking") setTitle("Booking Details");
    else if (path === "/guestdetails") setTitle("Guest Details");
    else if (path === "/contact") setTitle("Contact");
  });

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
        >
          <List>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: 230,
                  height: 68,
                },
              }}
            >
              <Paper elevation={3}></Paper>
            </Box>
            <Divider />
            <ListItem key="Home" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Confirm Your Check In" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ThumbUpAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Confirm Your Check In" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Need Transport?" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DirectionsCarRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Need Transport?" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Manage Profile" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Email/SMS Preferences" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalPostOfficeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Email/SMS Preferences" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Modify Booking" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BeenhereRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Modify Booking" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Itinerary" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalPostOfficeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Itinerary" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Check Your Bill" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentTurnedInRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Check Your Bill" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Rate Us" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Rate Us" />
              </ListItemButton>
            </ListItem>

            <ListItem key="Find Hotel On Map" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddLocationAltRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Find Hotel On Map" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </SwipeableDrawer>
      {value < 0 ? null : (
        <AppBar position="static" variant="outlined" color="default">
          <Toolbar>
            {value ? (
              <IconButton
                sx={{ paddingLeft: 0 }}
                onClick={(e) => navigate("/")}
                size="large"
                color="inherit"
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            ) : null}
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, flexGrow: 1 }}
              component="div"
            >
              {title}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton size="large" sx={{ color: "GrayText" }}>
                <Badge badgeContent={7} color="error">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" sx={{ color: "GrayText" }}>
                <AccountCircleIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 1 }}
                onClick={() => setDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>

          </div> */}
          </Toolbar>
        </AppBar>
      )}
      <Box sx={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/guestdetails" element={<GDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login name="Avalanche Luxury" />} />
          <Route path="/transport" element={<Transport /> }/> 
        </Routes>
        {/* <Home/> */}
      </Box>
      {value < 0 ? null : (
        <Box paddingBottom="50px">
          <BottomNavigation
            sx={{ position: "fixed", bottom: 0, width: 1.0 }}
            showLabelsdeta
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue);
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              component={Link}
              to="/"
              label="Home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/booking"
              label="Booking"
              icon={<DateRangeIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/guestdetails"
              label="Details"
              icon={<PermContactCalendarIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/contact"
              label="Contact"
              icon={<AddIcCallIcon />}
            />
          </BottomNavigation>
        </Box>
      )}
    </>
  );
}

export default App;
