import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const defaultTheme = createTheme();

const header = createTheme({
    palatte: {
        primary: {
            main: "#041e42"
        }
    }
})

export default function SignIn() {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        if(data.get('email') && data.get('password')) {
            const userData = {
                email: data.get('email'),
                password: data.get('password'),
            };
            localStorage.setItem('useNA', 'Alex');
            //http://abcapp1.com/user/authentication
            // axios.post('/sign-in', userData)
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
            navigate('/my-application')
        } else {

        }
    };

    return (
        <div>
            <header>            
                <Box sx={{ flexGrow: 1, backgroundColor: '#041e42 !important' }}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit" component="div">

                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>

            {show && (<div>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
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
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Username"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have access? Request Here"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>)}
            <footer className='all-footer'>
                <Box sx={{ flexGrow: 1, backgroundColor: '#041e42 !important' }}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit" component="div">

                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </footer>
        </div>
    );
}