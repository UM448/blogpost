import * as React from 'react';
import {useState, } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link as RouterLink,  useNavigate,useLocation } from "react-router-dom";


import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { profile_pic,profile_pic2 } from '../../Redux/helper'
import { Token_remove } from "../../Redux/authSlice";
import Clock from './digitalClock'

const drawerWidth = 240;


const navItems = [
  { text: 'Home', link: '' },
  
  { text: 'Sign-Up', link: 'homesignup' },
 
  
];

const profPicStyles={
  height: 35,
  padding: 0.05,
  margin:0.5,
  borderRadius: '50%',
  border: '1px solid white',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.7)',
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});




const StyledLink = styled(Link)(({ theme, isActive }) => ({
  textDecoration: 'none',
  color: isActive ? theme.palette.primary.main : 'inherit',
  fontWeight: isActive ? 'bold' : 'normal',
  
}));







function Header(props) {
    const dispatch = useDispatch();
    const location = useLocation();
const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isToggle=JSON.parse(localStorage.getItem("isToggle"))
  const isToggle2=JSON.parse(localStorage.getItem("isToggle2"))
  const image = localStorage.getItem("profile_pic")
  
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const remove = () => {
    dispatch(Token_remove());
   
    
    };




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PROJECT
      </Typography>
      <Divider />

     <List>
  {navItems.map((item) => (
    <ListItem key={item.text} disablePadding>
      <Link href={`/${item.link}`}>
  <ListItemButton sx={{ textAlign: 'center' }}>
    <ListItemText primary={item.text} />
  </ListItemButton>
</Link>
    </ListItem>
  ))}
</List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex', height:60}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#29ADB2' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Project
          </Typography>
        
<Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}>
  
  <Box display="flex" alignItems="center" gap={2}>
{navItems.map((item) => (
              <Button key={item.text} sx={{ color: 'white' }}>
              
               
                

<StyledLink
            component={RouterLink}
            to={`/${item.link}`}
            color="inherit"
           
            isActive={location.pathname === `/${item.link}`}
          >
            {item.text}
          </StyledLink>



              </Button>
            ))}
            
      {isToggle ? (
        <>
        {'  |   '}
          


          <StyledLink
            component={RouterLink}
            to="/createproduct"
            color="inherit"
           
            isActive={location.pathname === "/createproduct"}
          >
           NEW-BLOG
          </StyledLink>{'  |  '}
          <StyledLink
            component={RouterLink}
            to="/productlist"
            color="inherit"
           
            isActive={location.pathname === "/productlist"}
          >
          VIEW-BLOGS
          </StyledLink>{'  |  '}
         

          <Link onClick={remove} href="/homesignin" color="inherit" underline="none">Logout </Link>{'  |  '}



          <Box
        component="img"
        sx={profPicStyles}
            src={profile_pic(image)}
            alt="Profile Pic"
            onError={(event) => {
              event.target.src =  "/007.jpg";
              event.target.onerror = null;
            }}
          />
          {' |  '}
        </>
      ) : isToggle2 ? (
        <>
        
        {'  |   '}
          

          <StyledLink
            component={RouterLink}
            to="/user"
            color="inherit"
           
            isActive={location.pathname === "/user"}
          >
          USER-DASHBOARD
          </StyledLink>{'  |  '}


         

          <Link onClick={remove} href="/homesignin" color="inherit" underline="none">Logout </Link>


         
          <Box
        component="img"
        sx={profPicStyles}
            src={profile_pic2(image)}
            alt="Profile Pic"
            onError={(event) => {
              event.target.src =  "/007.jpg";
              event.target.onerror = null;
            }}
          />
        {' |  '}
        
          
         
        </>
      ) : (
       
        

 <StyledLink
            component={RouterLink}
            to="/homesignin"
            color="inherit"
           
            isActive={location.pathname === "/homesignin" || location.pathname === "/login"}
           
          >
          LOG-IN
          </StyledLink> 

         
        
      )}



</Box>





   
</Box>


<Box sx={{ flexGrow: 0.5, display: { xs: 'none', lg: 'block' } }}> <Clock/> </Box>











        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
    </ThemeProvider>
  );
}



export default Header;
