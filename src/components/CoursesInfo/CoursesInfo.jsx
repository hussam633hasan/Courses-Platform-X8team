import React from "react";
import "./CoursesInfo.css";

function CoursesInfo() {
  return (
    <section className="courses_process">
      <div className="Intro">
        <h2>What you will learn</h2>
        <p>
          The training is practice-oriented and is accompanied by mentors. By
          the end of the course, you will receive a portfolio of a novice
          product designer: from simple websites to interactive applications and
          presentations on ux research that can be shown to employers
        </p>
      </div>
      <div className="process_steps">
        <div className="p_step">
          <h3>1</h3>
          <h6>UX Research</h6>
          <p>excepturi sint occaecati cupiditate non provident, similique sunt in culpa</p>
        </div>
        <div className="p_step">
          <h3>2</h3>
          <h6>UX Research</h6>
          <p>soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>
        </div>
        <div className="p_step">
          <h3>3</h3>
          <h6>UX Research</h6>
          <p>soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>
        </div>
        <div className="p_step">
          <h3>4</h3>
          <h6>UX Research</h6>
          <p>soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>
        </div>
      </div>
    </section>
  );
}
export default CoursesInfo;
