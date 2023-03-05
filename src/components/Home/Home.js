import React from "react";
import HomeContain1 from "../HomeContain1/HomeContain1";
import HomeContain2 from "../HomeContain2/HomeContain2";

import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Popular Course Section */}
      <div className="contain-2">
        <div className="text">
          <h2>Our Popular Courses</h2>
          <p>Take your Knowledge to The Next Level!</p>
        </div>
        <HomeContain2></HomeContain2>
      </div>

      {/* Choose Reason Section */}
      <div className="contain-1">
        <div className="text">
          <h2>Why Choose Teach..</h2>
        </div>
        <HomeContain1></HomeContain1>
      </div>
    </div>
  );
};

export default Home;
