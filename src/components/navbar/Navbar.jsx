import { AppBar, Box, Container, Drawer, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from "../../Assets/logo.png"
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function Home() {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box>
                <AppBar position="fixed" sx={{ backgroundColor: "#38ACFF", display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                    <Toolbar>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <NavLink to="/"><img src={logo} style={{ backgroundColor: "", width: "13%", paddingLeft: "5vh" }} /></NavLink>
                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <Stack direction="row" spacing={5} sx={{ color: "white", marginTop: "1vh", fontSize: "small", fontWeight: "bold", cursor: "pointer" }}>
                                        {/* <Typography variant="paragraph"><a href="#about" style={{ textDecoration: "none", color: "white" }}>Learn More</a></Typography> */}
                                        <Typography variant="paragraph"><a href="#supporteddevices" style={{ textDecoration: "none", color: "white" }}>Connected Devices</a></Typography>
                                        <Typography variant='paragraph'><a href="#features" style={{ textDecoration: "none", color: "white" }}>Features</a></Typography>
                                        <Typography variant='paragraph'><a href="#download" style={{ textDecoration: "none", color: "white" }}>Download</a></Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <AppBar sx={{ backgroundColor: "#38ACFF", display: { xs: "block", sm: "block", md: "none", lg: "none" } }} >
                    <Toolbar>
                        <Grid container spacing={2}>
                            <Grid item xs={10} sm={11} >
                                <NavLink to="/"><img src={logo} style={{ width: "13vh", paddingTop: "2vh" }} /></NavLink>
                            </Grid>
                            <Grid item xs={2} sm={1} mt={0}>
                                <IconButton
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}>
                                    <MenuIcon sx={{ color: "white" }} />
                                </IconButton>
                                <Drawer
                                    sx={{
                                        width: drawerWidth,
                                        flexShrink: 0,
                                        "& .MuiDrawer-paper": {
                                            width: drawerWidth,
                                            boxSizing: "border-box"
                                        }
                                    }}
                                    anchor="right"
                                    open={open}
                                    onClick={handleDrawerClose}
                                >
                                    <Container>
                                        <Stack direction="column" spacing={2} sx={{ color: "#38ACFF", marginTop: "4vh", fontWeight: "bold", cursor: "pointer" }}>
                                            <img src={logo} alt="..." style={{ width: "35%", alignSelf: "center" }} />
                                            {/* <Typography variant="paragraph"><a href="#about" style={{ textDecoration: "none", color: "#38ACFF" }}>Learn More</a></Typography> */}
                                            <Typography variant="paragraph"><a href="#supporteddevices" style={{ textDecoration: "none", color: "#38ACFF" }}>Connected Devices</a></Typography>
                                            <Typography variant='paragraph'><a href="#features" style={{ textDecoration: "none", color: "#38ACFF" }}>Features</a></Typography>
                                            <Typography variant='paragraph'><a href="#download" style={{ textDecoration: "none", color: "#38ACFF" }}>Download</a></Typography>
                                        </Stack>
                                    </Container>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Home