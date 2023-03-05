import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Facilities from "../Facilities/Facilities";
import "./HomeContain1.css";

const HomeContain1 = () => {
  const [facilities, setFacilities] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("./carosolData.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);

  const handleSeeMoreButton = () => {
    navigate("/about");
  };

  return (
    <div>
      <div className="card-container">
        <Grid container justifyContent="center" spacing={1}>
          {facilities.map((facility) => (
            <Facilities key={facility.id} facility={facility}></Facilities>
          ))}
        </Grid>
      </div>
      <div className="btn-container">
        <button onClick={handleSeeMoreButton} className="btn">
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeContain1;
