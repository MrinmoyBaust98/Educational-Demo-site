import React from "react";
import "./Facilities.css";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

const Facilities = (props) => {
  const { title, descrip, img } = props.facility;

  return (
    <div>
      <Grid item xs={10}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar
                src={img}
                sx={{
                  border: "2px solid green",
                  padding: "0px",
                  width: "60px",
                  height: "60px",
                  marginLeft: "93px",
                }}
                alt="Remy Sharp"
              />
            }
          />
          <CardHeader
            style={{
              textAlign: "Center",
              color: "rgb(163, 119, 160)",
            }}
            title={title}
          />
          <CardContent>
            <Typography style={{ textAlign: "justify" }} variant="body2">
              {descrip}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Facilities;
