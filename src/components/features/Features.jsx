import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import listingmockup from "../../Assets/listingmockup.png"
import React from 'react'

function Features() {
    return (
        <>
            <Container>
                <Box id="features" align="center" pt={10}>
                    <Typography variant="h4" fontWeight="bold" color="#707070">Features</Typography>
                    <div>
                        <Typography variant='body1' pt={2} sx={{ width: { xs: "100%", lg: "55%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>ISocial Walk is a revolutionary application that helps people to track their daily, weekly, and monthly steps toward achieving their health goals. With its easy-to-use interface and powerful features, users can easily search, add and invite their friends, as well as create groups to stay motivated.</Typography>
                    </div>
                </Box>

                <Grid container spacing={2} pt={{ xs: 3, lg: 10 }}>
                    <Grid item xs={12} lg={8}>
                        <Stack direction="column" pt={{ xs: 3, lg: 20 }} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Chat With Friends</Typography>
                            <Typography variant='body1' pt={0} sx={{ width: { xs: "100%", lg: "55%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>We provide an easy-to-use interface that will make tracking your progress simple and convenient. You can search for friends and add them to your network, and even chat with each other.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <img src={listingmockup} alt="..." style={{ width: "45vh" }} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={10} sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
                    <Grid item xs={12} lg={8} >
                        <img src={listingmockup} alt="..." style={{ width: "45vh" }} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Stack direction="column" pt={20} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Create Groups</Typography>
                            <Typography variant='body1' pt={0} sx={{ display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Create a group and invite your friends and family from all over the world to join. Invite your friends to join and share their progress. Create a challenge and get your group to compete and reach their goals together.</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={{ xs: 1, lg: 10 }} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>

                    <Grid item xs={12} lg={8}>
                        <Stack direction="column" pt={{ xs: 2, lg: 20 }} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Create Groups</Typography>
                            <Typography variant='body1' pt={0} sx={{ width: { xs: "100%", lg: "55%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Create a group and invite your friends and family from all over the world to join. Invite your friends to join and share their progress. Create a challenge and get your group to compete and reach their goals together.</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <img src={listingmockup} alt="..." style={{ width: "45vh" }} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={{ xs: 2, lg: 10 }}>
                    <Grid item xs={12} lg={8}>
                        <Stack direction="column" pt={{ xs: 2, lg: 20 }} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Can Create Challenge</Typography>
                            <Typography variant='body1' pt={0} sx={{ width: { xs: "100%", lg: "55%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>With this feature, users can easily create and manage challenges with their friends and groups. This encourages users to stay motivated while pursuing their health goals.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <img src={listingmockup} alt="..." style={{ width: "45vh" }} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={10} sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
                    <Grid item xs={12} lg={8} >
                        <img src={listingmockup} alt="..." style={{ width: "45vh" }} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Stack direction="column" pt={20} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Step Tracking</Typography>
                            <Typography variant='body1' pt={0} sx={{ display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>The application will track users’ daily, weekly, and monthly steps and provide a graph of the data. With its easy-to-use features and comprehensive tracking, users can easily monitor their progress and stay motivated to achieve their health goals.</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={{ xs: 1, lg: 10 }} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>

                    <Grid item xs={12} lg={4}>
                        <Grid item xs={12} lg={8}>
                            <Stack direction="column" pt={{ xs: 2, lg: 20 }} spacing={1}>
                                <Typography variant="h5" fontWeight="bold" color="#38ACFF">Step Tracking</Typography>
                                <Typography variant='body1' pt={0} sx={{ width: { xs: "100%", lg: "55%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>The application will track users’ daily, weekly, and monthly steps and provide a graph of the data. With its easy-to-use features and comprehensive tracking, users can easily monitor their progress and stay motivated to achieve their health goals.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={8} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                            <img src={listingmockup} alt="..." style={{ width: "45vh" }} />
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
export default Features