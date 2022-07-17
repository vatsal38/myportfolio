import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyBoot from "./MyBoot";
import MyCss from "./MyCss";
import MyHtml from "./MyHtml";
import MyJs from "./MyJs";
import MyMui from "./MyMui";
import MyReact from "./MyReact";

const Skills = () => {
  return (
    <>
      <Container sx={{ pt: 15 , textAlign:"center"}}>
        <Typography variant="h2" component="h2" color={"#110252"} pb={12}>
          Skills
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6} lg={4} xs={12}>
              <MyHtml />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xs={12}>
              <MyCss />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xs={12}>
              <MyJs />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xs={12}>
              <MyBoot />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xs={12}>
              <MyMui />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xs={12}>
              <MyReact />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Skills;
