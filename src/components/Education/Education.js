import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SchoolIcon from "@mui/icons-material/School";
import { Divider } from "@mui/material";
const Education = () => {
  return (
    <Container sx={{ pt: 15, textAlign: "center" }}>
      <Typography variant="h2" component="h2" color={"#110252"} pb={10}>
        Education
      </Typography>

      <List sx={{ width: "100%", bgcolor: "rgb(214, 235, 242)" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <SchoolIcon style={{ fontSize: 60, marginRight: "15px" }} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#07447b" fontWeight="bold">
                2017 - 2018
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontWeight: "bold" }}
                  component="span"
                  variant="h4"
                  color="text.primary"
                >
                  S.S.C
                </Typography>
                <Typography fontSize="20px">
                  J B and Karp Vidhya Sankul , Laskana , Surat
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <SchoolIcon style={{ fontSize: 60, marginRight: "15px" }} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#07447b" fontWeight="bold">
                2018 - 2020
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontWeight: "bold" }}
                  component="span"
                  variant="h4"
                  color="text.primary"
                >
                  H.S.C
                </Typography>
                <Typography fontSize="20px">
                  Tapovan Vidhya Sankul and Risen Morden School , Varachha ,
                  Surat
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <SchoolIcon style={{ fontSize: 60, marginRight: "15px" }} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#07447b" fontWeight="bold">
                2020 - Present
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontWeight: "bold" }}
                  component="span"
                  variant="h4"
                  color="text.primary"
                >
                  B.E / C.E
                </Typography>
                <Typography fontSize="20px">
                  LDRP Institute of Technology and Research
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </Container>
  );
};

export default Education;
