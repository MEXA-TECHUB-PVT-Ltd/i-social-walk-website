import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import listingmockup from "../../Assets/listingmockup.png"
import React from 'react'

function Features() {
    return (
        <>
            <Container>
                <Box id="features" align="center" pt={10}>
                    <Typography variant="h4" fontWeight="bold" color="#707070">Fearures</Typography>
                    <div>
                        <Typography variant='body1' pt={2} sx={{ width: { xs: "80%", lg: "55%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                    </div>
                </Box>

                <Grid container spacing={2} pt={{xs:3, lg:10}}>
                    <Grid item xs={12} lg={8}>
                        <Stack direction="column" pt={{xs:3, lg:20}} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Chat With Friends</Typography>
                            <Typography variant='body1' pt={0} sx={{ width: {xs:"100%", lg:"55%"}, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <img src={listingmockup} alt="..." style={{ width: "45vh", alignSelf:"center" }} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={10} sx={{display:{xs:"none", sm:"none", md:"flex", lg:"flex"}}}>
                    <Grid item xs={12} lg={8}>
                        <img src={listingmockup} alt="..." style={{ width: "45vh", alignSelf:"center" }} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Stack direction="column" pt={20} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Create Groups</Typography>
                            <Typography variant='body1' pt={0} sx={{  display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container spacing={2} pt={{xs:1, lg:10}} sx={{display:{xs:"block", sm:"block", md:"none", lg:"none"}}}>
                   
                    <Grid item xs={12} lg={4}>
                    <Grid item xs={12} lg={8}>
                        <Stack direction="column" pt={{xs:2, lg:20}} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Create Groups</Typography>
                            <Typography variant='body1' pt={0} sx={{ width: {xs:"100%", lg:"55%"}, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                        </Stack>
                    </Grid>
                        <img src={listingmockup} alt="..." style={{ width: "45vh", alignSelf:"center" }} />
                    </Grid>
                   
                </Grid>
                <Grid container spacing={2} pt={{xs:2, lg:10}}>
                    <Grid item xs={12} lg={8}>
                        <Stack direction="column" pt={{xs:2, lg:20}} spacing={1}>
                            <Typography variant="h5" fontWeight="bold" color="#38ACFF">Can Create Challenge</Typography>
                            <Typography variant='body1' pt={0} sx={{ width: {xs:"100%", lg:"55%"}, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4}>
                        <img src={listingmockup} alt="..." style={{ width: "45vh", alignSelf:"center" }} />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
export default Features