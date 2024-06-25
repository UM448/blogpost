import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom';

import { reset_redirectTo,user } from '../../Redux/authSlice2';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Grid, Card, CardContent,Avatar,Alert } from '@mui/material';

//1
import {
  CssVarsProvider,
  useColorScheme,
} from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Divider from '@mui/joy/Divider';

import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
// import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';

import Stack from '@mui/joy/Stack';
// import Stack from '@mui/system/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';

import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//---------------------------


//2
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));

//---------------------------




export default function UserDasboard() {
  const dispatch = useDispatch();
  
  const { users, status } = useSelector(state => state.Auth2);
 

  

 

  useEffect(() => {
    dispatch(user());
  }, []);

  useEffect(() => {
    dispatch(reset_redirectTo(null));
  }, []);



//3
const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(true);

  const handlePrivacyPolicyChange = (event) => {
    setIsPrivacyPolicyChecked(event.target.checked);
  };

    function ColorSchemeToggle(props) {
      const { onClick, ...other } = props;
      const { mode, setMode } = useColorScheme();
      const [mounted, setMounted] = useState(false);
      useEffect(() => {
        setMounted(true);
      }, []);
      if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
      }
      return (
        <IconButton
          id="toggle-mode"
          size="sm"
          variant="outlined"
          color="neutral"
          aria-label="toggle light/dark mode"
          {...other}
          onClick={(event) => {
            if (mode === 'light') {
              setMode('dark');
            } else {
              setMode('light');
            }
            onClick?.(event);
          }}
        >
          {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
      );
    }

//---------------------------













 
const updateButtonStyle = {
    backgroundColor: '#1976D2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#115293',
    },
  };
  

  

  return (
     //4
     <>
     <CssVarsProvider  defaultMode="light" disableTransitionOnChange>
     <CssBaseline />
     <Box
                                   component="header"
                                   sx={{
                                       py: 2,
                                       display: 'flex',
                                       alignItems: 'left',
                                       justifyContent: 'space-between',
                                   }}
                               >
                                   <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                                       <IconButton variant="soft" color="primary" size="sm">
                                           <AccountCircleIcon />
                                       </IconButton>
                                        
                                       <Typography level="title-lg">User Dashboard</Typography>
                                   </Box>
                                   {/* <ColorSchemeToggle /> */}
                               </Box>

                               </CssVarsProvider>                
    
      

      

      
         <Box sx={{ width: '100%',paddingBottom: '220px' }}>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={6}>

         {/* //--------------------------- */}


         <div className='container' style={{ marginTop: "5.5rem", marginBottom:"5.5rem" }}>
    <Container maxWidth="xs">
    
          
          
          
       
        <Card  sx={{
              backgroundImage: 'url(/509534.jpg)',
           
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              Height: '800px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add shadow
        borderRadius: '10px', // Optional: rounded corners
        position: 'relative',
              
            }}>
        {!users ?(<Box
     
    ><Alert severity="error" sx={{ m: 2 , justifyContent: 'center',
    alignItems: 'center',
    height: '35vh', // Adjust as needed
    textAlign: 'center',}}>
      <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
        No Data Found
      </Typography>
    </Alert></Box>):(users.map((det,index) => (
          <CardContent align="Left" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h4" component="div" color='whitesmoke'>
             {det.name}
            </Typography>
            
            <Typography color="white">
              Name: {det.name}
            </Typography>
            <Typography color="white">
              Email: {det.email}
            </Typography>
            <Typography color="white">
              Mobile: {det.mobile}
            </Typography>
            <Typography color="white">
              Role: {det.role}
            </Typography>
            <Typography color="white">
              First School: {det.first_school}
            </Typography>
            
            {/* <Avatar alt="profile pic" src={det.image} >
              
            </Avatar>

            <Typography >
             <img src={det.image}/>
            </Typography> */}
            <Typography sx={{marginBottom:"10px"}}>
            <Button
                        component={Link}
                        to={`/updatepassword/${det._id}`}
                        size="small"
                        sx={updateButtonStyle}
                      >
                        Update Password
                      </Button>
            </Typography>

            <Typography >
            <Button
                        component={Link}
                        to={`/forgetpassword`}
                        size="small"
                        sx={updateButtonStyle}
                      >
                        Forget Password
                      </Button>
            </Typography>

          </CardContent>
          
          )))}
        </Card>
      
         
           
     
    
    </Container>
    </div>



{/* //5 */}
</Grid>
        <Grid item xs={6}>
       


        


<Box
  sx={{
    position: 'flex',
    // right: 0,
    // top: 0,
    // bottom: 20,
    // left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
    // zIndex: -1,
    // transition: 'background-image var(--Transition-duration), left var(--Transition-duration) !important',
    // transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // '&.dark': {
    //   backgroundColor: 'rgba(19, 19, 24, 0.4)',
    // },
    marginTop:'30px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '450px',
    width: '550px',
    // top: '120%',
    left: '110%',
    backgroundImage: 'url(/2481550.jpg)',
     

    '&.dark': {
      backgroundImage: 'url(/2481550.jpg)',
    },
  }}
>

  </Box>
        </Grid>
        </Grid>
        </Box>
        
        



   
    </>
     //--------------------------- 
  );
}
