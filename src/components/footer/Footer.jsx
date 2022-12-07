import { Container, Divider, Grid, Stack, Typography } from '@mui/material'
import logo from "../../Assets/logo.png"
import {NavLink} from "react-router-dom";
import React from 'react'

function Footer() {
    return (
        <>
            <Divider sx={{ marginTop: "5%", marginBottom: "5%", height: "0.2vh", backgroundColor: "#38ACFF" }} />
            <Container>
                <Grid container spacing={2} pb={5}>
                    <Grid xs={3} lg={7}>
                        <img src={logo} alt="..." style={{ width: "13vh" }} />
                    </Grid>
                    <Grid xs={9} lg={5}>
                        <Stack direction="row" spacing={{xs:1, lg:4}} sx={{ color: "#38ACFF", marginTop: "4vh", fontSize: "small", fontWeight: "bold", cursor: "pointer" }}>
                            <NavLink to="/privacyandpolicy" style={{ textDecoration: "none", color: "#38ACFF" }}>  <Typography variant="paragraph" >Privacy Policy</Typography></NavLink>
                            <NavLink to="/termandcondition" style={{ textDecoration: "none", color: "#38ACFF" }}><Typography variant="paragraph">Terms & Condition</Typography></NavLink>
                            <NavLink to="/aboutus" style={{ textDecoration: "none", color: "#38ACFF" }}><Typography variant='paragraph'>About Us</Typography></NavLink>
                            <NavLink to="/contactus" style={{ textDecoration: "none", color: "#38ACFF" }}><Typography variant='paragraph'>Contact Us</Typography></NavLink>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer
