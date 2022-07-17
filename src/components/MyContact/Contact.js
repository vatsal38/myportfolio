import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "@mui/material/Link";
export default function Contect() {
  return (
    <Container sx={{ mb: "20px" }}>
      <Card
        sx={{ backgroundColor: "rgb(214, 235, 242)"}}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          padding: " 2.5rem 1rem",
          borderRadius: "25px",
          maxWidth:"300px"
        }}
      >
        <CardMedia>
          <LocalPhoneIcon style={{ fontSize: "80px" }} />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            Contact No.
          </Typography>
          <Typography variant="div2" color="solid black">
            +91 99251 41500
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link
            href="tel:9925141500"
            underline="none"
            target="_blank"
          >
            <Button size="large">Contact Me</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
