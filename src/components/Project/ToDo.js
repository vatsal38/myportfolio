import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "@mui/material/Link";
export default function ToDo() {
  return (
    <Container sx={{ mb: "20px" }}>
      <Card
        sx={{ maxWidth: 345, backgroundColor: "rgb(214, 235, 242)" }}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          padding: " 2.5rem 1rem",
          borderRadius: "25px",
        }}
      >
        <CardMedia>
          <DescriptionIcon style={{ fontSize: "120px" }} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            To-Do-List
          </Typography>
          <Typography variant="h6" color="text.secondary">
            The To-Do-List is one kind of Notes which is storing your small data .
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link
            href="https://github.com/vatsal38/To-Do-List.git"
            underline="none"
            target="_blank"
          >
            <Button size="large">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
