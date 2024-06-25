import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
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
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';

import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

import { login,login2 } from '../../Redux/authSlice'

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


export default function Login() {
    const dispatch = useDispatch()
    const { redirectTo,isUserLogin,isBlogLogin } = useSelector((state) => state.Auth);
    const navigate = useNavigate();



    const [user, setUser] = useState({
        email: "",
        password: ""
    })



    let name, value
    const PostUserData = (e) => {
        name = e.target.name
        value = e.target.value
        if (name === "email") {
            if (value.length === 0) {
                setUser({ ...user, email: "" })

            } else {
                setUser({ ...user, email: value })

            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setUser({ ...user, password: "" })

            } else {
                setUser({ ...user, password: value })

            }
        }
       
    }

    const submitInfo = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("email", user.email);
        formData.append("password", user.password);


        function formDataToJson(formData) {
            const jsonObject = {};
            for (const [key, value] of formData.entries()) {
                jsonObject[key] = value;
            }
            return jsonObject;
        }

        const jsonData = formDataToJson(formData)



        isBlogLogin && dispatch(login(user))
       isUserLogin && dispatch(login2(user))

       

    }


    useEffect(() => {
        const RedirectUser = () => {
            let token = localStorage.getItem("token");
            let token2 = localStorage.getItem("token2");
            console.log("token is", token)
            let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

            if (token !== null && token !== undefined && token !== "") {
                isInLoginPage && navigate("/productlist");
            }
            if (token2 !== null && token2 !== undefined && token2 !== "") {
                isInLoginPage && navigate("/user");
            }
        };
        console.log("useEffect")
        RedirectUser();
    }, [redirectTo]);
    console.log("Redirect To", redirectTo)

    return (
<>
{!isBlogLogin && ! isUserLogin &&(
    <Alert severity="error" sx={{marginTop:'20px'}}>
    Access denied!.Please click {' '}
        <Link  style={{ color: '#554994', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none' }} href="/homesignin">here</Link>{' '}
    to login again.
</Alert>)}
        <CssVarsProvider defaultMode="light" disableTransitionOnChange>
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


            <Box sx={{ width: '100%',paddingBottom: '160px'  }}>
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
                                                New Here?{' '}
                                                <Link href="/homesignup" level="title-sm">
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
                                        or
                                    </Divider>
                                    <Stack gap={4} sx={{ mt: 2 }}>
                                        <form
                                            
                                            onSubmit={submitInfo}
                                        >
                                            <FormControl required >
                                                <FormLabel>Email</FormLabel>
                                                <Input type="email" name="email" onChange={PostUserData} />
                                            </FormControl>
                                            <FormControl required>
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" name="password" onChange={PostUserData} />
                                            </FormControl>
                                            <Stack gap={4} sx={{ mt: 2 }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Checkbox size="sm" label="Remember me" name="persistent" />
                                                    <Link level="title-sm" href="/">
                                                        Forgot your password?
                                                    </Link>
                                                </Box>
                                                <Button type="submit" fullWidth>
                                                    Sign in
                                                </Button>
                                                
                                            </Stack>
                                        </form>
                                    </Stack>
                                    
                                </Box>
                               

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box
                            sx={(theme) => ({
                                height: '100%',


                                
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
                                top: theme.spacing(40),
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
}
