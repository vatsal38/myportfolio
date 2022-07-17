import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const DraweComp = () => {


  const goToViolation = (id) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation.offsetTop,
      behavior: "smooth",
    });
  };


  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ backgroundColor: "#07447b" }}>
          <Link to="/" underline="none" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={() => setOpenDrawer(false)} >
              <ListItemIcon onClick={() => goToViolation("id1")}>
                <ListItemText sx={{ color: "white" }} primary="Home" />
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Link
            to="/AboutMe"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => goToViolation("id2")}>
                <ListItemText sx={{ color: "white" }} primary="About Me" />
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Link
            to="/Education"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => goToViolation("id3")}>
                <ListItemText sx={{ color: "white" }} primary="Education" />
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Link
            to="/Skills"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => goToViolation("id4")}>
                <ListItemText sx={{ color: "white" }} primary="Skills" />
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Link
            to="/Project"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => goToViolation("id5")}>
                <ListItemText sx={{ color: "white" }} primary="Projects" />
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Link
            to="/Contact"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => goToViolation("id6")}>
                <ListItemText sx={{ color: "white" }} primary="Contact Me" />
              </ListItemIcon>
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
     
    </React.Fragment>
  );
};

export default DraweComp;
