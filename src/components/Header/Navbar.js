import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import Logo from "../Header/vicklogo.png";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import DraweComp from "./DraweComp";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AboutMe from "../Aboutme/AboutMe";
import Education from "../Education/Education";
import Home from "../HomePage/Home";
import Skills from "../MySkills/Skills";
import Project from "../Project/Project";
import ContactMe from "../MyContact/ContactMe";
const Navbar = () => {
  const goToViolation = (id) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation.offsetTop,
      behavior: "smooth",
    });
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BrowserRouter>
      <AppBar sx={{ background: "#07447b" }}>
        <Toolbar>
          <Typography>
            <Link to="/">
              <img src={Logo} alt="hello" />
            </Link>
          </Typography>
          {isMatch ? (
            <>
              <DraweComp />
            </>
          ) : (
            <Tabs sx={{ marginLeft: "auto" }} centered>
              <Link to="/" underline="none" style={{ textDecoration: "none" }}>
                <Tab
                  label="Home"
                  sx={{ color: "white" }}
                  onClick={() => goToViolation("id1")}
                ></Tab>
              </Link>
              <Link
                to="/AboutMe"
                underline="none"
                style={{ textDecoration: "none" }}
              >
                <Tab
                  label="AboutMe"
                  sx={{ color: "white" }}
                  onClick={() => goToViolation("id2")}
                />
              </Link>
              <Link
                to="/Education"
                underline="none"
                style={{ textDecoration: "none" }}
              >
                <Tab
                  label="Education"
                  sx={{ color: "white" }}
                  onClick={() => goToViolation("id3")}
                />
              </Link>
              <Link
                to="/Skills"
                underline="none"
                style={{ textDecoration: "none" }}
              >
                <Tab
                  label="Skills"
                  sx={{ color: "white" }}
                  onClick={() => goToViolation("id4")}
                />
              </Link>
              <Link
                to="/Project"
                underline="none"
                style={{ textDecoration: "none" }}
              >
                <Tab
                  label="Projects"
                  sx={{ color: "white" }}
                  onClick={() => goToViolation("id5")}
                />
              </Link>
              <Link
                to="/Contact"
                underline="none"
                style={{ textDecoration: "none" }}
              >
                <Tab
                  label="Contact"
                  sx={{ color: "white" }}
                  onClick={() => goToViolation("id6")}
                />
              </Link>
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      <>
        <div id="id1">
          <Home />
        </div>
        <div id="id2">
          <AboutMe />
        </div>
        <div id="id3">
          <Education />
        </div>
        <div id="id4">
          <Skills />
        </div>
        <div id="id5">
          <Project />
        </div>
        <div id="id6">
          <ContactMe />
        </div>
      </>
    </BrowserRouter>
  );
};

export default Navbar;
