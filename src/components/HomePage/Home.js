import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MovingComponent from "react-moving-text";

const Home = () => {
  return (
    <Container sx={{ pt: 35, pb: 35,textAlign:"center"}} id="#">
      <Typography
        variant="h6"
        component="h6"
        mb={0}
        fontWeight="bold"
        color={"#07447b"}
      >
        H &nbsp; E &nbsp; L &nbsp; L &nbsp; O &nbsp; !
      </Typography>
      <Typography variant="h2" component="h2" mt={0}>
        Vatsal Mavani
      </Typography>
      <Container sx={{ mt: 0 }}>
        <Typography variant="h4" component="h4" m={1}>
          I am
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          color={"#07447b"}
          m={1}
          fontWeight="bold"
        >
          <MovingComponent
            type="typewriter"
            dataText={["React.JS Developer", "JavaScript Developer"]}
          />
        </Typography>
      </Container>
    </Container>
  );
};

export default Home;
