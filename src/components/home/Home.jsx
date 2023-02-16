import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import homemain from "../../Assets/home_main.png"
import "../../styles/Home.css"
import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar';
import Supporters from '../supporters/Supporters'
import Features from '../features/Features'
import Download from '../downloads/Download'

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Container>
                <Box className="home">
                    <Grid container spacing={2} sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
                        <Grid item lg={6}>
                            <Box pt={20} color="#38ACFF">
                                <Stack>
                                    <Typography variant='h4' fontWeight="bold" width={{ xs: "95%", lg: "73vh" }}>Welcome to Isocial Walk, the app that helps you stay motivated and stay connected with your friends and family.</Typography>
                                    <Typography variant='paragraph' width={{ xs: "95%", lg: "63vh" }} mt="2vh" color="#707070" sx={{ lineHeight: "25px" }}>I Social Walk is an innovative mobile application designed to help users achieve their health goals by tracking their daily, weekly, and monthly step count. The app connects to various devices including Fitbit, Apple Health, and Garman to monitor the user’s physical activity. The app measures the user’s burnt calories and the number of steps taken.</Typography>
                                    <Stack direction="row" spacing={5}>
                                        <Button variant="contained" className="btn_download"><a href="#download" style={{ textDecoration: "none", color: "white" }}>Download</a></Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                            <img src={homemain} alt="..." style={{ width: "100vh" }} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                        <Grid item lg={12}>
                            <img src={homemain} alt="..." style={{ width: "100%" }} />
                        </Grid>

                        <Grid item lg={12}>
                            <Box color="#38ACFF">
                                <Stack>
                                    <Typography variant='h4' fontWeight="bold" width={{ xs: "95%", lg: "73vh" }}>Welcome to Isocial Walk, the app that helps you stay motivated and stay connected with your friends and family.</Typography>
                                    <Typography variant='paragraph' width="100%" mt="2vh" color="#707070" sx={{ lineHeight: "25px" }}>I Social Walk is an innovative mobile application designed to help users achieve their health goals by tracking their daily, weekly, and monthly step count. The app connects to various devices including Fitbit, Apple Health, and Garman to monitor the user’s physical activity. The app measures the user’s burnt calories and the number of steps taken.</Typography>
                                    <Stack direction="row" spacing={5}>
                                        <Button variant="contained" className="btn_download"><a href="#download" style={{ textDecoration: "none", color: "white" }}>Download</a></Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Supporters />
                <Features />
            </Container>

            <Download />
        </>
    )
}

export default Home