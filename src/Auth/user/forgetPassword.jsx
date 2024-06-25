import * as React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch } from "react-redux"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Input from '@mui/material/Input'
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
import {forgetPassword} from '../../Redux/authSlice2'
import {useParams } from 'react-router-dom';

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
// import Input from '@mui/joy/Input';

import Stack from '@mui/joy/Stack';
// import Stack from '@mui/system/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';

// import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
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


const textFieldStyles={
  
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px', // Adjust the radius as needed
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Adds a light shadow
    '& fieldset': {
      borderRadius: '10px', // Adjust the radius as needed
      borderColor: '#fff', // Sets the border color
      borderWidth: '1px', // Sets the border width
    },
    '&:hover fieldset': {
      borderColor: '#555', // Change border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#555', // Change border color when focused
    },
  },
  }




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
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
          backgroundImage: 'url("")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        },
      },
    },
  },
});

export default function UpdatePassword() {
    const dispatch=useDispatch()

    const { id } = useParams();

   
    const [update, setUpdate] = useState({
       email:"",
       first_school:"",
        newPassword:"",
      });

      

      const PostUserData = (e) => {
        const { name, value } = e.target;
       
    
    
        setUpdate({ ...update, [name]: value });
        
      };

  

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append("id", id);
    formData.append("password", update.password);
    
    function formDataToJson(formData) {
        const jsonObject = {};
        for (const [key, value] of formData.entries()) {
            jsonObject[key] = value;
        }
        return jsonObject;
    }

    const jsonData = formDataToJson(formData)
    
    dispatch(forgetPassword(update))
  };

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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx= {{
          
          // backgroundColor:"#F6F5F5",
          // backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
            backgroundImage: 'url(/509534.jpg)',
         
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            Height: '800px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add shadow
      borderRadius: '10px', // Optional: rounded corners
      position: 'relative',
            
         
          marginBottom:'50px',
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.8)', }}>
            Forget Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
            <Grid item xs={12}>
              
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  onChange={PostUserData}
                  sx={textFieldStyles}
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
                  onChange={PostUserData}
                  sx={textFieldStyles}
                />
                
              </Grid>
              
           
              <Grid item xs={12}>
              
              <TextField
                required
                fullWidth
                name="newPassword"
                label="newPassword"
                type="newPassword"
                id="newPassword"
                autoComplete="new-password"
                onChange={PostUserData}
                sx={textFieldStyles}
              />
              
            </Grid>


              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/user" variant="body2" sx={{ color: 'rgba(255, 255, 255, 1)', }}>
                 Go back to user dashboard
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
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
    marginTop:'70px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    width: '350px',
    top: '100%',
    left: '110%',
    backgroundImage: 'url(/4002785.jpg)',
     

    '&.dark': {
      backgroundImage: 'url(/4002785.jpg)',
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
