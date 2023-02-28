import { Box, Container, Divider, Grid, Modal, Stack, Typography } from '@mui/material'
import logo from "../../Assets/logo.png"
import { Form, Input, Button } from 'antd';
import { useNavigate, NavLink } from "react-router-dom";
import React from 'react'

const { TextArea } = Input;

function Footer() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 320,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: " 10px",
        boxShadow: 0,
        p: 6,
    };

    const responsivestyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 250,
        height: 320,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: " 10px",
        boxShadow: 0,
        p: 6,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [resopen, setresOpen] = React.useState(false);
    const handleOpenRes = () => setresOpen(true);
    const handleCloseRes = () => setresOpen(false);
    return (
        <>
            {/* <Divider sx={{ marginTop: "5%", marginBottom: "5%", height: "0.2vh", backgroundColor: "#38ACFF" }} /> */}
            <Box backgroundColor="#38ACFF" sx={{ height: "20vh" }} pb={5}>
                <Container>
                    <Grid container spacing={2} pt={10}>
                        <Grid xs={6} lg={8}>
                            <Container>
                                <NavLink to="/"><img src={logo} alt="..." style={{ width: "15vh" }} /></NavLink>
                            </Container>
                        </Grid>
                        <Grid xs={6} lg={4}>
                            <Stack direction={{ xs: "column", sm: "row", md: "row", lg: "row" }} spacing={{ xs: 1, lg: 4 }} sx={{ color: "white", marginTop: "0vh", fontSize: "small", fontWeight: "bold", cursor: "pointer" }}>
                                <NavLink to="/privacyandpolicy" style={{ textDecoration: "none", color: "white" }}>  <Typography variant="paragraph" >Privacy Policy</Typography></NavLink>
                                <NavLink to="/termandcondition" style={{ textDecoration: "none", color: "white" }}><Typography variant="paragraph">Terms & Condition</Typography></NavLink>
                                {/* <NavLink to="/aboutus" style={{ textDecoration: "none", color: "white" }}><Typography variant='paragraph'>About Us</Typography></NavLink> */}
                                <Typography variant="paragraph" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }} onClick={handleOpen}>Contact Us</Typography>

                                <Typography variant="paragraph" sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }} onClick={handleOpenRes}>Contact Us</Typography>
                            </Stack>
                        </Grid>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
                        >
                            <Box sx={style}>
                                <Stack align="center">
                                    <Typography variant="h4" fontWeight="bold" color="#38ACFF">
                                        Contact Us
                                    </Typography>
                                </Stack>

                                <Box sx={{ marginTop: "2vh" }}>
                                    <Form className="footer">
                                        <Form.Item >
                                            <Input placeholder='Full Name' style={{ borderColor: "lightgray", padding: "1vh" }} />
                                        </Form.Item>

                                        <Form.Item >
                                            <Input placeholder='Email' style={{ borderColor: "lightgray", padding: "1vh" }} />
                                        </Form.Item>

                                        <Form.Item >
                                            <TextArea placeholder='Your Messege' rows={4} style={{ borderColor: "lightgray", padding: "1vh" }} />
                                        </Form.Item>

                                        <Form.Item >
                                            <Button style={{ width: "100%", backgroundColor: "#38ACFF", color: "white" }}>Submit</Button>
                                        </Form.Item>
                                    </Form>
                                </Box>
                            </Box>
                        </Modal>

                        {/* responsive */}
                        <Modal
                            open={resopen}
                            onClose={handleCloseRes}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
                        >
                            <Box sx={responsivestyle}>
                                <Stack align="center">
                                    <Typography variant="h4" fontWeight="bold" color="#38ACFF">
                                        Contact Us
                                    </Typography>
                                </Stack>

                                <Box sx={{ marginTop: "2vh" }}>
                                    <Form className="footer">
                                        <Form.Item >
                                            <Input placeholder='Full Name' style={{ borderColor: "lightgray", padding: "1vh" }} />
                                        </Form.Item>

                                        <Form.Item >
                                            <Input placeholder='Email' style={{ borderColor: "lightgray", padding: "1vh" }} />
                                        </Form.Item>

                                        <Form.Item >
                                            <TextArea placeholder='Your Messege' rows={4} style={{ borderColor: "lightgray" }} />
                                        </Form.Item>

                                        <Form.Item >
                                            <Button style={{ width: "100%", backgroundColor: "#38ACFF", color: "white" }}>Submit</Button>
                                        </Form.Item>
                                    </Form>
                                </Box>

                            </Box>
                        </Modal>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default Footer
