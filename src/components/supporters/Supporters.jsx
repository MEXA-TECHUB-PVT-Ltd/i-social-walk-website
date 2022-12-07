import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function Supporters() {
    return (
        <>
            <Container>
                <Box id="about" align="center" pt={10}>
                    <Typography id="supporteddevices" variant="h4" fontWeight="bold" color="#707070">Connected Devices</Typography>

                    <Grid container spacing={2} pt={7}>
                        <Grid item xs={12} lg={4}>
                            <Card sx={{ width: "40vh", height: "30vh" }}>
                                <CardContent>
                                    <Typography variant="h5" fontWeight="bold" color="#707070" pt={8}>Apple</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Card sx={{ width: "40vh", height: "30vh" }}>
                                <CardContent>
                                    <Typography variant="h5" fontWeight="bold" color="#707070" pt={8}>Fitbit</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Card sx={{ width: "40vh", height: "30vh" }}>
                                <CardContent>
                                    <Typography variant="h5" fontWeight="bold" color="#707070" pt={8}>Garman</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Supporters
