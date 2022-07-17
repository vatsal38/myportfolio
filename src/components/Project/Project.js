import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ToDo from "./ToDo";
import Auth from "./Auth";
const Project = () => {
  return (
    <Container sx={{ pt: 15 , textAlign:"center"}}>
      <Typography variant="h2" component="h2" color={"#110252"} pb={12}>
        Projects
      </Typography>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={6} align="center" justify="center">
            <ToDo />
          </Grid>
          <Grid item sm={12} md={6} lg={6} align="center" justify="center">
            <Auth />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Project;
