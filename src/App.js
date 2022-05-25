import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import { Container } from '@mui/system';
import Home from './components/Home/Home';
import {Routes,Route, BrowserRouter, Link} from 'react-router-dom'
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import GDetails from './components/GuestDetaiols/GDetails';

function App() {
  const [value, setValue] = React.useState(0);
  const [drawer, setDrawer] = React.useState(false);


  return (
    <>
      <SwipeableDrawer
        anchor='left'
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
             
                '& > :not(style)': {
                  m: 1,
                  width:230,
                  height: 68,
                },
              }}
            >
              <Paper elevation={3} >
             
              </Paper>
            </Box>
            <Divider />
            <ListItem key='Home' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Confirm Your Check In' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ThumbUpAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Confirm Your Check In' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Need Transport?' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DirectionsCarRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Need Transport?' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Manage Profile' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary='Manage Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Email/SMS Preferences' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalPostOfficeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Email/SMS Preferences' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Modify Booking' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BeenhereRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Modify Booking' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Itinerary' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalPostOfficeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Itinerary' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Check Your Bill' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentTurnedInRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Check Your Bill' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Rate Us' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Rate Us' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Find Hotel On Map' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddLocationAltRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Find Hotel On Map' />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />

        </Box>
      </SwipeableDrawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eZee Beach House
          </Typography>

          <div>
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

          </div>
        </Toolbar>
      </AppBar>

      <Box
        sx={{}}
      >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/guestdetails' element={<GDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        {/* <Home/> */}
      </Box>
      <Box paddingBottom='50px'>
        <BottomNavigation
          sx={{ position: 'fixed', bottom: 0, width: 1.0 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue)
            setValue(newValue);
          }}
        >
          <BottomNavigationAction    component={Link} to='/'  label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to='/booking'   label="Booking" icon={<DateRangeIcon />} />
          <BottomNavigationAction component={Link} to='/guestdetails'  label="Guest Details" icon={<PermContactCalendarIcon />} />
          <BottomNavigationAction component={Link} to='/contact'  label="Contact" icon={<AddIcCallIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default App;
