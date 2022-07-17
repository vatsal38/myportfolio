import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Address from "./Address";
import Email from "./Email";
import Contact from "./Contact";
// import Form from "./Form";
const ContectMe = () => {
  return (
    <Container sx={{ pt: 15 , textAlign:"center"}}>
      <Typography variant="h2" component="h2" color={"#110252"} pb={12}>
        Contact Me
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={4} xs={12} align="center" justify="center">
            <Address />
          </Grid>
          <Grid item sm={12} md={6} lg={4} xs={12} align="center" justify="center">
            <Email />
          </Grid>
          <Grid item sm={12} md={6} lg={4} xs={12} align="center" justify="center">
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContectMe;
