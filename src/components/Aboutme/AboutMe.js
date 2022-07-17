import React from "react";
import Box from "@mui/material/Box";
import Vatsal from "./vatsal.jpg";
import "./AboutMe.css";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
// import "bootstrap/dist/css/bootstrap.min.css";
export default function AboutMe() {
  return (
    <Container sx={{ textAlign: "center", pt: 15 }} >
      <Container>
        <Typography variant="h2" component="h2" color={"#110252"} pb={10}>
          About Me
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12} lg={6} align="center" justify="center">
              <img
                src={Vatsal}
                alt="vatsal"
                width="100%"
                height="auto"
                style={{ borderRadius: "25px" }}
              />
            </Grid>
            <Grid item sm={12} md={12} lg={6} align="center" justify="center">
              <Typography variant="h4" component="h4" color="#07447b" mb={6}>
                Information
              </Typography>

              <table className="info">
                <tr>
                  <td style={{ textAlign: "left" }} className="td1">
                    <h3>Name:</h3>
                  </td>
                  <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    Vatsal V Mavani
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }} className="td1">
                    <h3>Date Of Birth:</h3>
                  </td>
                  <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    August 3,2002
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }} className="td1">
                    <h3>Address:</h3>
                  </td>
                  <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    Surat Gujarat India
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }} className="td1">
                    <h3>Email:</h3>
                  </td>
                  <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    vatsal9999.vm@gmail.com
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }} className="td1">
                    <h3>Phone:</h3>
                  </td>
                  <td style={{ textAlign: "left", fontWeight: "bold" }}>
                    +91 99251 41500
                  </td>
                </tr>
                <tr>
                  <td colspan={2}>
                    <Button className="btn" variant="outlined" onClick={()=>{
                      alert("currently in maintence");
                    }}>
                      Download CV
                    </Button>
                  </td>
                </tr>
              </table>
              <table className="table2">
                <tr>
                  <td className="td2">
                    <Link
                      href="https://www.instagram.com/_vatsal_mavani_0308/?igshid=YmMyMTA2M2Y="
                      underline="none"
                      target="_blank"
                    >
                      <Button>
                        <InstagramIcon fontSize="large" />
                      </Button>
                    </Link>
                  </td>
                  <td className="td2">
                    <Link
                      href="https://www.facebook.com/vatsal.mavani.144"
                      underline="none"
                      target="_blank"
                    >
                      <Button>
                        <FacebookIcon fontSize="large" />
                      </Button>
                    </Link>
                  </td>
                  <td className="td2">
                    <Link
                      href="https://github.com/vatsal38?tab=repositories"
                      underline="none"
                      target="_blank"
                    >
                      <Button>
                        <GitHubIcon fontSize="large" />
                      </Button>
                    </Link>
                  </td>
                  <td className="td2">
                    <Link
                      href="https://www.linkedin.com/in/vatsal-mavani-4859a9225"
                      underline="none"
                      target="_blank"
                    >
                      <Button>
                        <LinkedInIcon fontSize="large" />
                      </Button>
                    </Link>
                  </td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
