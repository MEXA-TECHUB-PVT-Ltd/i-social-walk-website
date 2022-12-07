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
                        <div>
                            <Typography variant='body1' pt={2} sx={{ width: { xs: "80%", lg: "45%" }, display: "flex", justifyContent: "center", alignContent: "center", color: "#707070", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                        </div>
                    </Stack>
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
                </Box>
            </Box>
        </>
    )
}

export default Download
