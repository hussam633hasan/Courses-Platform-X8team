import React from "react";
import "./Promotion.css";
import { Link } from "react-router-dom";

function Promotion() {
  return ( <section className="promo">
    <div>
      <div className="percentage">
        <h2 className="h2-promo">50%</h2>
        <div className="time">
          <h6 className="h6-promo">27 Days</h6>
          <h6 className="h6-promo">17:44:16</h6>
        </div>
      </div>
    </div>
    <div className="promoDesc">
      <p>
        Sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt
      </p>
      <img
        src="./assets/images/Main_page/Ellipse 30.png"
        alt="vector"
      ></img>
    </div>
    <div className="CourseLink">
      <img
        src="./assets/images/Main_page/Vector 11.png"
        alt="vector"
      ></img>
      <Link to="/courses">
        <button>Choose a course</button>
      </Link>
    </div>
    <div className="background-shape rectangle"></div>
    <div className="background-shape circle"></div>
    <div className="background-shape s_circle"></div>
  </section>
);
}
export default Promotion;
