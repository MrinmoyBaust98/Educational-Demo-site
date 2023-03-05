import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import React from "react";
import "./PopularCourse.css";

const PopularCourse = (props) => {
  const { name, title, descrip, rating, enroll, react, techer, price, img } =
    props.course;
  return (
    <div>
      <Card
        style={{ marginLeft: "20px", marginRight: "20px" }}
        sx={{ maxWidth: 345 }}
      >
        <CardMedia component="img" height="190" image={img} alt="Paella dish" />
        <CardHeader style={{}} title={name} subheader={title} />

        <CardContent>
          <Typography variant="body2">{descrip}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon /> {react}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
            {enroll}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PopularCourse;
