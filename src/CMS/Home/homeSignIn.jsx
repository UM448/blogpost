import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Carousel from 'react-material-ui-carousel';

import { blogLogin, userLogin } from '../../Redux/authSlice'



import {
  CssVarsProvider,
  useColorScheme,
} from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';

import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';

import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';






const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));




const boxStyles = {
  backgroundColor: '#CBB279',
  height: '250px',
  width: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px auto',
  textAlign: 'center',
  border: '1px solid white',
  padding: '10px',
  boxShadow: '5px 10px #D1D1D1',
};














const Home = () => {
  const dispatch = useDispatch()
  const [showBlogBox, setShowBlogBox] = useState(false);
  const [showDashboardBox, setShowDashboardBox] = useState(false);

  const toggleBlogBox = () => {
    setShowBlogBox(!showBlogBox);
    setShowDashboardBox(false); 
  };

  const toggleDashboardBox = () => {
    setShowDashboardBox(!showDashboardBox);
    setShowBlogBox(false); 
  };

  const items = [
    {
      imageUrl: '843717.jpg',
      caption: 'Image 1',
    },
    {
      imageUrl: '4957136.jpg',
      caption: 'Image 2',
    },
    {
      imageUrl: '509534.jpg',
      caption: 'Image 3',
    },
  ];







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















  return (
    <>
      

      <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': {
              '--Collapsed-breakpoint': '769px',
              '--Cover-width': '50vw',
              '--Form-maxWidth': '800px',
              '--Transition-duration': '0.4s',
            },
          }}
        />


        <Box sx={{ width: '100%' ,paddingBottom: '220px' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Box
                sx={(theme) => ({
                  position: 'fixed',




                  height: '100%',
                  width:
                    'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
                  transition: 'width var(--Transition-duration)',
                  transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                  position: 'relative',
                  zIndex: 1, 
                  display: 'flex',
                  justifyContent: 'flex-end',
                  backdropFilter: 'blur(12px)',
                  backgroundColor: 'rgba(255 255 255 / 0.2)',
                  [theme.getColorSchemeSelector('dark')]: {
                    backgroundColor: 'rgba(19 19 24 / 0.4)',
                  },
                })}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100dvh',
                    width:
                      'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
                    maxWidth: '100%',

                    px: 2,
                  }}
                >
                  <Box
                    component="header"
                    sx={{
                      py: 3,
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                      <IconButton variant="soft" color="primary" size="sm">
                        <BadgeRoundedIcon />
                      </IconButton>
                      <Typography level="title-lg">Blog</Typography>
                    </Box>
                    <ColorSchemeToggle />
                  </Box>
                  <Box
                    component="main"
                    sx={{
                      my: 'auto',
                      py: 2,
                      pb: 5,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      width: 400,

                      maxWidth: '100%',
                      mx: 'auto',
                      borderRadius: 'sm',
                      '& form': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                      },
                      [`& .${formLabelClasses.asterisk}`]: {
                        visibility: 'hidden',
                      },
                    }}
                  >


<Stack gap={4} sx={{ mb: 2 }}>
                                        <Stack gap={1}>
                                            <Typography component="h1" level="h3">
                                                Sign in
                                            </Typography>
                                            <Typography level="body-sm">
                                                New here?{' '}
                                                <Link to="/homesignup" level="title-sm" style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none' }}>
                                                    Sign up!
                                                </Link>
                                            </Typography>
                                        </Stack>
                                        
                                    </Stack>
                                    <Divider
                                        sx={(theme) => ({
                                            [theme.getColorSchemeSelector('light')]: {
                                                color: { xs: '#FFF', md: 'text.tertiary' },
                                                '--Divider-lineColor': {
                                                    xs: '#FFF',
                                                    md: 'var(--joy-palette-divider)',
                                                },
                                            },
                                        })}
                                    >
                                        
                                    </Divider>


                    <Stack gap={4} sx={{ mt: 2 }}>
                      {/* Page Navigation */}
                      <Box
                        sx={{
                          textAlign: 'center',
                          marginTop: '20px',

                          backgroundColor: '#CBB279',


                          border: '1px solid white',
                          padding: '10px',
                          boxShadow: '5px 10px #D1D1D1',

                        }}
                      >
                        <Typography variant="h3">
                          <Link to="#" onClick={toggleBlogBox} style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none', }}>
                            Go to Blog
                          </Link>
                        </Typography>

                        <Divider
                          sx={(theme) => ({
                            [theme.getColorSchemeSelector('light')]: {
                              color: { xs: '#FFF', md: 'text.tertiary' },
                              '--Divider-lineColor': {
                                xs: '#FFF',
                                md: 'var(--joy-palette-divider)',
                              },
                            },
                          })}
                        >
                          or
                        </Divider>




                        <Typography variant="h3">
                          <Link to="#" onClick={toggleDashboardBox} style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none' }}>
                            Go to User Dashboard
                          </Link>
                        </Typography>
                      </Box>

                      {/* Blog Box */}
                      {showBlogBox && (
                        <Box
                          sx={boxStyles}
                        >
                          <div>
                            <Stack
                              direction={{ xs: 'column', sm: 'column' }}
                              spacing={{ xs: 1, sm: 2, md: 4 }}

                            >
                              <Item>

                                <Typography variant="h2" sx={{ color: '#CBB279', fontSize: '20px' }}>
                                  Welcome to <span style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none' }}>Daily Journal</span>
                                </Typography>
                              </Item>
                              <Typography variant="body1" sx={{ color: '#fff', fontSize: '12px' }}>
                                Please{' '}
                                <Link to="/regblog" style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none' }}>
                                  register
                                </Link> {' '}
                                yourself, if you haven't already! Or do login below,
                              </Typography>







                            </Stack>
                            <Box
                              sx={{
                                textAlign: 'center',
                                marginTop: '20px',
                              }}
                            >
                              <Button variant="solid" color="primary" component={Link} to="/login" onClick={() => dispatch(blogLogin())}>
                                User Blog Login
                              </Button>
                            </Box>
                          </div>


                        </Box>


                      )}

                      {/* Dashboard Box */}
                      {showDashboardBox && (
                        <Box
                          sx={boxStyles}
                        >
                          <div>
                            <Stack
                              direction={{ xs: 'column', sm: 'column' }}
                              spacing={{ xs: 1, sm: 2, md: 4 }}

                            >
                              <Item>

                                <Typography variant="h2" sx={{ color: '#CBB279', fontSize: '20px' }}>
                                  Welcome to <span style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none' }}>Your Dashboard</span>
                                </Typography>
                              </Item>
                              <Typography variant="body1" sx={{ color: '#fff', fontSize: '12px' }}>
                                Please{' '}
                                <Link to="/reguser" style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none', }}>
                                  register
                                </Link> {' '}
                                yourself, if you haven't already! Or do login below,
                              </Typography>






                            </Stack>
                            <Box
                              sx={{
                                textAlign: 'center',
                                marginTop: '20px',
                              }}
                            >
                              <Button variant="solid" color="primary" component={Link} to="/login" onClick={() => dispatch(userLogin())}>
                                User Dashboard Login
                              </Button>
                            </Box>
                          </div>


                        </Box>
                      )}
                    </Stack>
                  </Box>
                  
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={(theme) => ({
                  height: '100%',


                  // position: 'fixed',
                  // position: 'relative',
                  position: 'absolute',

                  right: 0,
                  top: 0,
                  bottom: 0,
                  left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
                  zIndex: -1, 
                  transition:
                    'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                  transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                  backgroundColor: 'rgba(255 255 255 / 0.2)',
                  [theme.getColorSchemeSelector('dark')]: {
                    backgroundColor: 'rgba(19 19 24 / 0.4)',
                  },
                 
                  backgroundSize: 'contain',
                  backgroundSize: '100% 100%', 

                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',

                  height: '450px',
                  width: '500px',
                  top: theme.spacing(35),
                  left: theme.spacing(110),

                  

                  backgroundImage:
                    'url(/4957136.jpg)',
                  [theme.getColorSchemeSelector('dark')]: {
                    backgroundImage:
                      'url(/4957136.jpg)',
                  },

                })}
              />
            </Grid>
          </Grid>
        </Box>

      </CssVarsProvider>









    </>
  );
};

export default Home;
