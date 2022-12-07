import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import homemain from "../../Assets/home_main.png"
import "../../styles/Home.css"
import React from 'react'
import Supporters from '../supporters/Supporters'
import Features from '../features/Features'
import Download from '../downloads/Download'

function Home() {
    return (
        <>
            <Container>
                <Box className="home">
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <Box pt={20} color="#38ACFF">
                                <Stack>
                                    <Typography variant='h3' fontWeight="bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Typography>
                                    <Typography variant='paragraph' width={{ xs: "95%", lg: "63vh" }} mt="2vh" color="#707070" sx={{ lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                                    <Stack direction="row" spacing={5}>
                                        <Button variant="contained" className="btn_download"><a href="#download" style={{textDecoration:"none", color:"white"}}>Download</a></Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                            <img src={homemain} alt="..." style={{ width: "100vh" }} />
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