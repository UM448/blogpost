import * as React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch } from "react-redux"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/joy/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import {register2} from '../../Redux/authSlice'


import {
  CssVarsProvider,
  useColorScheme,
} from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Divider from '@mui/joy/Divider';

import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';

import Input from '@mui/joy/Input';

import Stack from '@mui/joy/Stack';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';











function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Udichi Mukherjee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundImage: 'url("843717.jpg")',
          backgroundColor:"#FFE3CA",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        },
      },
    },
  },
});





const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));










export default function Registration() {
    const dispatch=useDispatch()

    const [imagePreview, setImagePreview] = useState('');

   

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



      

     const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };

  

  const handleSubmit = (event) => {
    event.preventDefault();
   

    
    const data = new FormData(event.currentTarget);
    
    console.log({
      name: data.get('name'),
      mobile: data.get('mobile'),
      email: data.get('email'),
      password: data.get('password'),
      first_school: data.get('fisrt_school'),
      image: data.get('image'),
    });
    dispatch(register2(data))
  };

  return (


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
                                      <BadgeRoundedIcon />
                                  </IconButton>
                                   
                                  <Typography level="title-lg">User</Typography>
                              </Box>
                             
                          </Box>

                          </CssVarsProvider>                

 

 

 
    <Box sx={{ width: '100%',paddingBottom: '220px' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>

    



    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs"  sx= {{
          backgroundImage: 'url("843717.jpg")',
          backgroundColor:"#F6F5F5",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 0, 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
         
          padding:'1px',
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
           
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  autoComplete="mobile"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  
                />
              </Grid>
              <Grid item xs={12}>
              
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  
                />
                
              </Grid>
              
            <Grid item xs={12}>
              
              <TextField
                required
                fullWidth
                name="first_school"
                label="first_school"
                type="first_school"
                id="first_school"
                autoComplete="first_school"
                
              />
              
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="image"
                  type="file"
                  label="Profile Picture"
                  id="image"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImageChange}
                />

{imagePreview && (
        <img
          src={imagePreview}
          alt="Uploaded Profile Picture"
          style={{ maxWidth: '30%', marginTop: '10px' }}
        />
      )}

              </Grid>
              <Grid item xs={12}>
              <FormControlLabel
        control={<Checkbox checked={isPrivacyPolicyChecked} onChange={handlePrivacyPolicyChange} />}
        label="I agree to the Privacy Policy"
      />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="homesignin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isPrivacyPolicyChecked}
            >
              Sign Up
            </Button>
          
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>

     
     </Grid>
        <Grid item xs={6}>
       


       


<Box
  sx={{
    position: 'flex',
   
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '650px',
    width: '500px',
    top: '20%',
    left: '110%',
    backgroundImage: 'url(/6368592.jpg)',
    '&.dark': {
      backgroundImage: 'url(/6368592.jpg)',
    },
  }}
>

  </Box>
        </Grid>
        </Grid>
        </Box>
        </>
         
  );
}
