import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularCourse from "../PopularCourse/PopularCourse";
import "./HomeContain2.css";

const HomeContain2 = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("./HomeData.json")
      .then((res) => res.json())
      .then((data) => setPopularCourses(data));
  }, []);
  // view course details
  const handleCourseButton = () => {
    navigate("/courses");
  };
  return (
    <div>
      <div className="card-container-2">
        {popularCourses.map((course) => (
          <PopularCourse key={course.id} course={course}></PopularCourse>
        ))}
      </div>
      <div className="btn-container">
        <button onClick={handleCourseButton} className="btn">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default HomeContain2;
