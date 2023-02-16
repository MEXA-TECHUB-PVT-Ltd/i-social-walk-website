import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import icondownload from "../../Assets/icondownload.png"
import React from 'react'

function Download() {
    return (
        <>
            <Box pt={10}>
                <Box id="download" align="center" backgroundColor="#F7F9FC" pb={7}>
                    <Stack align="center" pt={7} pb={7}>
                        <Typography variant="h4" fontWeight="bold" color="#38ACFF">Download</Typography>
                        <Container>
                            <div>
                                <Typography variant='body1' pt={2} sx={{ width: { xs: "100%", lg: "45%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>At iSocial Walk, we want to make it easy for you to stay on track and reach your health goals. With our app, you can stay motivated and get the support you need from your friends to reach the top. So, download our app today and get started on your journey to a healthier lifestyle!</Typography>
                            </div>
                        </Container>
                    </Stack>

                    <a href="#download">
                        <button style={{ backgroundColor: "#38ACFF", color: "white", border: "none", borderRadius: "10px" }}>
                            <Grid container spacing={0} sx={{ padding: 1 }}>
                                <Grid lg={3} sx={{ pl: 2 }}>
                                    <img src={icondownload} alt="..." style={{ width: "4vh", color: "white" }} />
                                </Grid>
                                <Grid lg={9} sx={{ pl: 3, pt: 1 }}>
                                    <span style={{ fontWeight: "bold" }}>Download</span>
                                </Grid>

                            </Grid>
                        </button>
                    </a>
                </Box>
            </Box>
        </>
    )
}

export default Download
